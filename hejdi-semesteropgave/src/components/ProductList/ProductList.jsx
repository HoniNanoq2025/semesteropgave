import { IoMdStar } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./ProductList.module.css";

// ProductList component - modtager props fra parent component
export default function ProductList({
  products, // array af produktobjekter som prop
  favoriteIds, // array af favorit-id'er som prop
  toggleFavorite, // callback function prop til at håndtere favorit toggle
  addToCart, // callback function prop til at tilføje til indkøbskurv
}) {
  // Early return hvis products array er tomt - conditional rendering
  if (products.length === 0) {
    return <p>Ingen produkter fundet</p>;
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.productList}>
        {/* Map over products array for at render hvert produkt - list rendering */}
        {products.map((prod) => {
          // Tjek om nuværende produkt er i favoritter ved at bruge includes() method
          const isFavorite = favoriteIds.includes(prod.id);

          return (
            // Key prop er påkrævet for list items i React - bruges til reconciliation
            <div key={prod.id} className={styles.productItem}>
              <div className={styles.card}>
                {/* Rating sektion med icon component fra react-icons */}
                <div className={styles.rating}>
                  <IoMdStar color="#52B69A" /> {prod.rating}
                </div>

                {/* Image container med background-image styling */}
                <div className={styles.imageContainer}>
                  <div
                    className={styles.image}
                    style={{
                      // Inline styles object - fallback til thumbnail hvis images array er tomt
                      backgroundImage: `url(${
                        prod.images[0] || prod.thumbnail
                      })`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    // Accessibility attributter til skærmlæsere
                    role="img"
                    aria-label={prod.title}
                  />

                  {/* Favorit toggle button med conditional styling */}
                  <button
                    // Event handler - kalder callback function prop med produkt id
                    onClick={() => toggleFavorite(prod.id)}
                    // Template literal for conditional CSS classes
                    className={`${styles.favoriteBtn} ${
                      isFavorite ? styles.favorited : ""
                    }`}
                    // Betinget aria-label til accessibility
                    aria-label={
                      isFavorite
                        ? "Fjern fra favoritter"
                        : "Tilføj til favoritter"
                    }
                  >
                    {/* Betinget rendering af emoji baseret på favorit status */}
                    {isFavorite ? "❤️" : "🤍"}
                  </button>
                </div>

                {/* Produkt detaljer sektion */}
                <div className={styles.detailsContainer}>
                  {/* React Router Link component til navigation */}
                  <Link
                    to={`/products/${prod.id}`} // Template literal til dynamic routing
                    className={styles.productTitleLink}
                  >
                    <h5 className={styles.productTitle}>{prod.title}</h5>
                  </Link>

                  {/* Pris og indkøbskurv sektion */}
                  <div className={styles.priceContainer}>
                    <h4 className={styles.price}>
                      <strong>{prod.price} DKK</strong>
                    </h4>
                    {/* Add to cart button med event handler */}
                    <button
                      // Callback function prop kaldes med hele produkt objektet
                      onClick={() => addToCart(prod)}
                      className={styles.addCartBtn}
                    >
                      {/* Icon komponent med size prop */}
                      <FaShoppingCart size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
