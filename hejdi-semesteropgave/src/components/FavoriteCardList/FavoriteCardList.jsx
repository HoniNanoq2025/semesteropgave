import { Link } from "react-router-dom";
import { IoHeartDislikeSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./FavoriteCardList.module.css";

export default function FavoriteCardList({
  products,
  favoriteIds,
  toggleFavorite,
  addToCart,
}) {
  if (products.length === 0) {
    return <p>Ingen favorit produkter fundet</p>;
  }

  return (
    <div className={styles.favoritesList}>
      {products.map((product) => {
        const isFavorite = favoriteIds.includes(product.id);
        return (
          <div key={product.id} className={styles.favoriteCard}>
            <div className={styles.productImage}>
              <div
                className={styles.image}
                style={{
                  backgroundImage: `url(${
                    product.images[0] || product.thumbnail
                  })`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                role="img"
                aria-label={product.title}
              />
            </div>

            <div className={styles.productInfo}>
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

            <div className={styles.actions}>
              <button
                onClick={() => toggleFavorite(product.id)}
                className={`${styles.removeBtn} ${
                  isFavorite ? styles.favorited : ""
                }`}
                aria-label="Fjern fra favoritter"
              >
                <IoHeartDislikeSharp size={20} />
              </button>
              <button
                onClick={() => addToCart(product)}
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
