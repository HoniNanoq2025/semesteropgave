import { IoMdStar } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./ProductList.module.css";

export default function ProductList({
  products,
  favoriteIds,
  toggleFavorites,
  addToCart,
}) {
  if (products.length === 0) {
    return <p>Ingen produkter fundet</p>;
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.productList}>
        {products.map((prod) => {
          const isFavorite = favoriteIds.includes(prod.id);
          return (
            <div key={prod.id} className={styles.productItem}>
              <div className={styles.card}>
                <div className={styles.rating}>
                  <IoMdStar /> {prod.rating}
                </div>
                <div className={styles.imageContainer}>
                  <div
                    className={styles.image}
                    style={{ backgroundImage: `url(${imageUrl})` }}
                    role="img"
                    aria-label={prod.title}
                  />
                  <button
                    className={`${styles.likeBtn} ${
                      isFavorite(prod.id) ? styles.liked : ""
                    }`}
                    onClick={() => toggleFavorites(prod.id)}
                  />
                </div>
                <h4 className={styles.productTitle}>{prod.title}</h4>
                <div>
                  <h4 className={styles.price}>
                    <strong>{prod.price} DKK</strong>
                  </h4>
                  <button
                    onClick={() => addToCart(prod)}
                    className={styles.addButton}
                  >
                    <FaShoppingCart size={28} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
