import { useState } from "react";
import { useForm } from "react-hook-form";
import DiscountCode from "../../components/DiscountCode/DiscountCode";
import styles from "./Checkout.module.css";

export default function Checkout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [discount, setDiscount] = useState(null);

  const shippingFee = 50;

  const calculateTotal = () => {
    let total = product.price + shippingFee;

    if (discount) {
      if (discount.type === "percent") {
        total -= (product.price * discount.value) / 100;
      } else if (discount.type === "fixed") {
        total -= discount.value;
      } else if (discount.type === "freeShipping") {
        total -= shippingFee;
      }
    }
    return total > 0 ? total : 0;
  };

  const onSubmit = (data) => {
    alert(`Tak for din ordre, ${data.name}! Total: ${calculateTotal()} kr.`);
  };

  return (
    <div className={styles.checkoutContainer}>
      <h1>Kurv</h1>
      <div>
        <DiscountCode onApply={setDiscount} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.checkoutForm}>
        <label>Navn</label>
        <input type="text" {...register("name", { required: true })} />
        {errors.name && <p className={styles.error}>Navn er påkrævet</p>}
        <label>Efternavn</label>
        <input type="text" {...register("lastname", { required: true })} />
        {errors.lastname && (
          <p className={styles.error}>Efternavn er påkrævet</p>
        )}
        <label>Email</label>
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <p className={styles.error}>Email er påkrævet</p>}
        <label>Adresse</label>
        <input {...register("address", { required: true })} />
        {errors.address && <p className={styles.error}>Adresse er påkrævet</p>}
        <div className={styles.checkoutPrice}>
          <div className={styles.totalTitles}>
            <p>Fragt:</p>
            <p>
              <strong>Total:</strong>
            </p>
          </div>
          <div className={styles.totalPrice}>
            <p>
              {" "}
              {discount?.type === "freeshipping"
                ? "0 kr."
                : `${shippingFee} kr.`}
            </p>
            <p>
              <strong>{calculateTotal()} kr.</strong>
            </p>
          </div>
        </div>
        <button type="submit" className={styles.orderBtn}>
          Køb
        </button>
      </form>
    </div>
  );
}
