import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductCard.module.css";

export default function ProductCard({ favorites, toggleFavorites, addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Fejl ved hentning af detaljer", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Indlæser...</p>;

  const isFavorite = favorites.includes(product.id);

  return (
    <div className={styles.productDetailWrapper}>
      <div className={styles.productDetailCard}>
        <div className={styles.productCategory}>
          <span className={styles.category}>{product.category}</span>
        </div>
        <div className={styles.detailHeader}>
          <h4>{product.title}</h4>
        </div>
        <div className={styles.detailImageContainer}>
          <div
            className={styles.image}
            style={{
              backgroundImage: `url(${product.images[0] || product.thumbnail})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            role="img"
            aria-label={product.title}
          />
          <button
            onClick={() => toggleFavorites(product.id)}
            className={`${styles.favoriteBtn} ${
              isFavorite ? styles.favorited : ""
            }`}
            aria-label={
              isFavorite ? "Fjern fra favoritter" : "Tilføj til favoritter"
            }
          >
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
        <div className={styles.productTags}>
          <p className={styles.tags}>{product.tags}</p>
        </div>
        <div className={styles.productDetail}>
          <p>{product.description}</p>
        </div>
        <div className={styles.productPricing}>
          <div>
            <h5>{product.price} DKK</h5>
          </div>
          <div>
            <p>{product.availabilityStatus}</p>
          </div>
        </div>
        <button
          onClick={() => addToCart(product)}
          className={styles.addToCartBtn}
        >
          TILFØJ TIL KURV
        </button>
      </div>


    </div>
  );
}
