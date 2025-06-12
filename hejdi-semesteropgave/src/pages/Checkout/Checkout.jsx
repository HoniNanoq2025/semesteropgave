import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import DiscountCode from "../../components/DiscountCode/DiscountCode";
import styles from "./Checkout.module.css";

// Checkout-komponent, der modtager tre props: cart (array med produkter), removeFromCart (funktion til at fjerne et produkt), og clearCart (funktion til at rydde kurven)
// Props har default destructuring med fallback-værdi [] for cart
export default function Checkout({ cart = [], removeFromCart, clearCart }) {
  // useForm hook giver adgang til register (til input-binding), handleSubmit (til form-submission) og errors (til valideringsfejl)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // useState hook bruges til at holde styr på en eventuel rabatkode (discount)
  const [discount, setDiscount] = useState(null);

  // Fast fragtpris
  const shippingFee = 50;

  // Funktion til at beregne subtotal (uden fragt og rabat)
  // Bruger array.reduce() til at summere alle item.price værdier
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  // Funktion til at beregne den endelige totalpris inkl. fragt og evt. rabat
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    let total = subtotal + shippingFee;

    // Anvendelse af rabat, afhængig af rabattype: procent, fast beløb eller gratis fragt
    if (discount) {
      if (discount.type === "percent") {
        // Procent-rabat: fratrækker procent af subtotal
        total -= (subtotal * discount.value) / 100;
      } else if (discount.type === "fixed") {
        // Fast beløbs-rabat: trækker fast værdi fra total
        total -= discount.value;
      } else if (discount.type === "freeShipping") {
        // Gratis fragt: trækker shippingFee fra total
        total -= shippingFee;
      }
    }
    // Returnér aldrig en negativ total
    return total > 0 ? total : 0;
  };

  // onSubmit funktion, der bliver kaldt ved form submission. Viser en bekræftelse og rydder kurven.
  const onSubmit = (data) => {
    // Viser confirmation alert
    alert(
      `Tak for din ordre, ${data.name}! Total: ${calculateTotal().toFixed(
        2
      )} kr.`
    );
    // Ryd cart after successful order
    clearCart(); // Kalder clearCart-prop for at tømme kurven
  };

  return (
    <div className={styles.checkoutContainer}>
      <h1>Kurv</h1>

      <div className={styles.cart}>
        {/* Conditional rendering baseret på array længde */}
        {/* Viser enten en tom kurv eller kort over produkterne i kurven */}
        {cart.length === 0 ? (
          <div className={styles.emptyCartMsg}>
            <p>Din kurv er tom</p>
            <p>
              Gå til <a href="/products">Produkter</a> eller{" "}
              <a href="/favorites">Favoritter</a> for at tilføje produkter!
            </p>
          </div>
        ) : (
          // Map funktion til at render hvert produkt/item i kurven
          cart.map((item, index) => (
            <div key={index} className={styles.cartItem}>
              <div className={styles.cartInfo}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className={styles.cartImage}
                />
                <span>{item.title}</span>
              </div>
              <div className={styles.purchaseInfo}>
                <span>{item.price} DKK</span>
                <button
                  onClick={() => removeFromCart(index)} // Kalder removeFromCart prop ved klik
                  className={styles.removeBtn}
                >
                  <MdOutlineRemoveShoppingCart size={16} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Conditional rendering kun når cart har items */}
      {/*Hvis cart.length > 0 er true (kurven indeholder items) → vis rabatkode og formular
        Hvis cart.length > 0 er false (kurven er tom) → vis intet*/}
      {cart.length > 0 && (
        <>
          {/* Child-komponent til håndtering af rabatkoder. setDiscount er callback-funktionen til at sætte state. */}
          <div>
            <DiscountCode onApply={setDiscount} />
          </div>
          {/* Formular til kundeinformation, håndteret med react-hook-form */}
          <form
            onSubmit={handleSubmit(onSubmit)} // handleSubmit wrapper onSubmit for at håndtere validering
            className={styles.checkoutForm}
          >
            <label>Fornavn</label>
            <input
              type="text"
              {...register("name", { required: true })} // register binder input til useForm og tilføjer validering
              placeholder="Fornavn..."
            />
            {/* Error message der kun vises hvis validation slår fejl */}
            {errors.name && <p className={styles.error}>Fornavn er påkrævet</p>}

            <label>Efternavn</label>
            <input
              type="text"
              {...register("lastname", { required: true })}
              placeholder="Efternavn..."
            />
            {errors.lastname && (
              <p className={styles.error}>Efternavn er påkrævet</p>
            )}

            <label>Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email..."
            />
            {errors.email && <p className={styles.error}>Email er påkrævet</p>}

            <label>Adresse</label>
            <input
              {...register("address", { required: true })}
              placeholder="Adresse..."
            />
            {errors.address && (
              <p className={styles.error}>Adresse er påkrævet</p>
            )}

            {/* Sektion for visning af priser: subtotal, fragt og total */}
            <div className={styles.checkoutPrice}>
              <div className={styles.totalTitles}>
                <p>Subtotal:</p>
                <p>Fragt:</p>
                <p>
                  <strong>Total:</strong>
                </p>
              </div>
              <div className={styles.totalPrice}>
                {/* .toFixed(2) = max 2 decimaler efter punktumet */}
                <p>{calculateSubtotal().toFixed(2)} kr.</p>
                <p>
                  {/* condition ?(hvis) valueIfTrue :(ellers) valueIfFalse */}
                  {/*Tjek om discount eksisterer AND om dens type property er lig med "freeShipping" 
                  Hvis JA → vis "0.00 kr." (fragtpris)
                  Hvis NEJ → Vis faktisk fragtpris (f.eks., "50.00 kr.")*/}
                  {discount?.type === "freeShipping"
                    ? "0.00 kr."
                    : `${shippingFee.toFixed(2)} kr.`}
                </p>
                <p>
                  <strong>{calculateTotal().toFixed(2)} kr.</strong>
                </p>
              </div>
            </div>
            {/* Køb-knap der indsender formularen */}
            <div className={styles.buttonPlacement}>
              <button type="submit" className={styles.orderBtn}>
                Køb
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
