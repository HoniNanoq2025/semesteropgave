import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoMdStar } from "react-icons/io";
import styles from "./ProductCard.module.css";

// Modtager props: favorites (array), toggleFavorites (funktion), addToCart (funktion)
export default function ProductCard({ favorites, toggleFavorites, addToCart }) {
  // Henter id fra URL parametrene ved hjælp af useParams hook
  const { id } = useParams();
  // State hook til at gemme produktdata
  const [product, setProduct] = useState(null);

  // useEffect hook kører når komponenten mountes eller id ændres
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        // Opdaterer product state med den hentede data
        setProduct(data);
      } catch (error) {
        console.error("Fejl ved hentning af detaljer", error);
      }
    };

    fetchProduct();
  }, [id]); // Dependency array - effekten kører igen hvis id ændres

  // Conditional rendering - viser loading besked hvis product endnu ikke er hentet
  if (!product) return <p>Indlæser...</p>;

  // Tjekker om produktet er i favoritter ved at søge i favorites array prop
  const isFavorite = favorites.includes(product.id);

  return (
    <div className={styles.productDetailWrapper}>
      {/* Mobile layout version */}
      <div className={styles.productDetailCardMobile}>
        {/* Produktkategori sektion */}
        <div className={styles.productCategory}>
          <span className={styles.category}>{product.category}</span>
        </div>
        {/* Produkttitel header */}
        <div className={styles.detailHeader}>
          <h3>{product.title}</h3>
        </div>
        {/* Produktbillede container med favorit knap */}
        <div className={styles.detailImageContainer}>
          {/* Div der fungerer som billede med inline styles for background */}
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
          {/* Favorit toggle knap - kalder toggleFavorites prop funktion */}
          <button
            onClick={() => toggleFavorites(product.id)}
            className={`${styles.favoriteBtn} ${
              isFavorite ? styles.favorited : ""
            }`}
            aria-label={
              isFavorite ? "Fjern fra favoritter" : "Tilføj til favoritter"
            }
          >
            {/* Conditional rendering af emoji baseret på favorit status */}
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
        {/* Produkttags sektion - join indsætter komma mellem værdierne */}
        <div className={styles.productTags}>
          <p className={styles.tags}>{product.tags.join(", ")}</p>
        </div>
        {/* Produktbeskrivelse */}
        <div className={styles.productDetail}>
          <p className={styles.description}>{product.description}</p>
        </div>
        {/* Pris og tilgængelighed sektion */}
        <div className={styles.productPricing}>
          <div>
            <p>
              <strong>{product.price} DKK</strong>
            </p>
          </div>
          <div>
            <p>{product.availabilityStatus}</p>
          </div>
        </div>
        {/* Tilføj til kurv knap - kalder addToCart prop funktion */}
        <button
          onClick={() => addToCart(product)}
          className={styles.addToCartBtn}
        >
          TILFØJ TIL KURV
        </button>
      </div>

      {/* Desktop layout version - samme funktionalitet, anden struktur */}
      <div className={styles.productDetailCardDesktop}>
        {/* Venstre side med billede og kategori */}
        <div className={styles.detailsLeft}>
          <div className={styles.productCategory}>
            <span className={styles.category}>{product.category}</span>
          </div>
          <div className={styles.detailImageContainer}>
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
          <div className={styles.productTags}>
            <p className={styles.tags}>{product.tags.join(", ")}</p>
          </div>
        </div>
        {/* Højre side med detaljer og knapper */}
        <div className={styles.detailsRight}>
          {/* Top sektion med titel og beskrivelse */}
          <div className={styles.detailsRightTop}>
            <div className={styles.detailHeader}>
              <h3>{product.title}</h3>
            </div>
            <div className={styles.productDetail}>
              <p className={styles.description}>{product.description}</p>
            </div>
          </div>
          {/* Bund sektion med pris og knapper */}
          <div className={styles.detailsRightBottom}>
            <div className={styles.productPricing}>
              <div>
                <p className={styles.availability}>
                  {product.availabilityStatus}
                </p>
              </div>
              <div>
                <p className={styles.price}>
                  <strong>{product.price} DKK</strong>
                </p>
              </div>
            </div>
            {/* Container for favorit og kurv knapper */}
            <div className={styles.buttons}>
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
              <button
                onClick={() => addToCart(product)}
                className={styles.addToCartBtn}
              >
                TILFØJ TIL KURV
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Anmeldelser sektion */}
      <div className={styles.productReviews}>
        <h3>Anmeldelser</h3>
        {/* Conditional rendering - viser anmeldelser hvis de findes */}
        {product.reviews && product.reviews.length > 0 ? (
          <div className={styles.reviewsList}>
            {/* Map funktion der tildeler index til hvert review der mappes */}
            {product.reviews.map((review, index) => (
              <div key={index} className={styles.reviewItem}>
                <div className={styles.reviewDetail}>
                  {/* Anmelder navn */}
                  <div className={styles.reviewer}>
                    <p>{review.reviewerName}</p>
                  </div>
                  {/* Rating med stjerne ikon */}
                  <div className={styles.rating}>
                    <span>
                      <IoMdStar color="yellow" />
                      {review.rating}/5
                    </span>
                  </div>
                </div>
                {/* Anmeldelse kommentar */}
                <div className={styles.reviewComment}>
                  <p className={styles.comment}>{review.comment}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Fallback hvis ingen anmeldelser findes
          <p className={styles.noReviews}>Ingen Anmeldelser endnu</p>
        )}
      </div>
    </div>
  );
}
