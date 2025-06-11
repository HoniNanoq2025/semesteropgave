import { IoMdStar } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./ProductList.module.css";

export default function ProductList({
  products,
  favoriteIds,
  toggleFavorite,
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
                  <IoMdStar color="#52B69A" /> {prod.rating}
                </div>
                <div className={styles.imageContainer}>
                  <div
                    className={styles.image}
                    style={{
                      backgroundImage: `url(${
                        prod.images[0] || prod.thumbnail
                      })`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    role="img"
                    aria-label={prod.title}
                  />
                  <button
                    onClick={() => toggleFavorite(prod.id)}
                    className={`${styles.favoriteBtn} ${
                      isFavorite ? styles.favorited : ""
                    }`}
                    aria-label={
                      isFavorite
                        ? "Fjern fra favoritter"
                        : "Tilføj til favoritter"
                    }
                  >
                    {isFavorite ? "❤️" : "🤍"}
                  </button>
                </div>
                <div className={styles.detailsContainer}>
                  <Link
                    to={`/products/${prod.id}`}
                    className={styles.productTitleLink}
                  >
                    <h5 className={styles.productTitle}>{prod.title}</h5>
                  </Link>
                  <div className={styles.priceContainer}>
                    <h4 className={styles.price}>
                      <strong>{prod.price} DKK</strong>
                    </h4>
                    <button
                      onClick={() => addToCart(prod)}
                      className={styles.addCartBtn}
                    >
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
