import { useState, useEffect } from "react";
import { IoMdStar } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./TopRatedProducts.module.css";

export default function TopRatedProducts({
  favoriteIds,
  toggleFavorite,
  addToCart,
}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopRatedProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=150"
        );
        if (!response.ok) throw new Error("Noget gik galt med hentningen");
        const data = await response.json();

        // Sort products by rating (highest first) and take top 5
        const topRatedProducts = data.products
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 5);

        setProducts(topRatedProducts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopRatedProducts();
  }, []);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.topRatedContainer}>
      <h2>Top 5 produkter</h2>
      <div className={styles.topRatedGrid}>
        {products.map((product) => {
          const isFavorite = favoriteIds.includes(product.id);
          return (
            <div key={product.id} className={styles.topRatedItem}>
              <div className={styles.card}>
                <div className={styles.rating}>
                  <IoMdStar color="#52B69A" /> {product.rating}
                </div>
                <div className={styles.imageContainer}>
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
                  <button
                    onClick={() => toggleFavorite(product.id)}
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
                    to={`/products/${product.id}`}
                    className={styles.productTitleLink}
                  >
                    <h5 className={styles.productTitle}>{product.title}</h5>
                  </Link>
                  <div className={styles.priceContainer}>
                    <h4 className={styles.price}>
                      <strong>{product.price} DKK</strong>
                    </h4>
                    <button
                      onClick={() => addToCart(product)}
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
