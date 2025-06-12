import { Link } from "react-router-dom";
import { IoHeartDislikeSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./FavoriteCardList.module.css";

// Komponent der viser en liste af favorit produkter
export default function FavoriteCardList({
  products, // Array af produkt objekter (props)
  favoriteIds, // Array af favorit ID'er (props)
  toggleFavorite, // Funktion til at tilføje/fjerne favoritter (props)
  addToCart, // Funktion til at tilføje produkter til kurv (props)
}) {
  // Hvis der ikke er nogen produkter, vis besked
  if (products.length === 0) {
    return <p>Ingen favorit produkter fundet</p>;
  }

  return (
    <div className={styles.favoritesList}>
      {products.map((product) => {
        // Tjekker om det aktuelle produkt er en favorit
        const isFavorite = favoriteIds.includes(product.id);
        return (
          <div key={product.id} className={styles.favoriteCard}>
            {/* Produkt billede sektion */}
            <div className={styles.productImage}>
              <div
                className={styles.image}
                style={{
                  // Dynamisk background image baseret på produkt data
                  backgroundImage: `url(${
                    product.images[0] || product.thumbnail
                  })`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                role="img"
                aria-label={product.title} // Tilgængelighed for skærmlæsere
              />
            </div>

            {/* Produkt information sektion */}
            <div className={styles.productInfo}>
              {/* Link komponent fra react-router-dom til navigation */}
              <Link
                to={`/products/${product.id}`}
                className={styles.productTitleLink}
              >
                <h4 className={styles.productTitle}>{product.title}</h4>
              </Link>
              <p className={styles.productPrice}>
                <strong>{product.price} DKK</strong>
              </p>
            </div>

            {/* Action buttons sektion */}
            <div className={styles.actions}>
              {/* Fjern fra favoritter knap */}
              <button
                onClick={() => toggleFavorite(product.id)} // Event handler der kalder props funktion
                className={`${styles.removeBtn} ${
                  isFavorite ? styles.favorited : "" // Betinget CSS klasse
                }`}
                aria-label="Fjern fra favoritter" // Tilgængelighed for skærmlæsere
              >
                <IoHeartDislikeSharp size={20} />
              </button>
              {/* Tilføj til kurv knap */}
              <button
                onClick={() => addToCart(product)} // Event handler der sender hele produkt objektet
                className={styles.addToCartBtn}
              >
                <FaShoppingCart size={20} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
