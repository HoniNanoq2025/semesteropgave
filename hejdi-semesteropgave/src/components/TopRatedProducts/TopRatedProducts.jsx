import { useState, useEffect } from "react";
import { IoMdStar } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./TopRatedProducts.module.css";

// Komponent der viser de 5 bedst bedømte produkter
// Modtager tre props: favoriteIds, toggleFavorite og addToCart
export default function TopRatedProducts({
  favoriteIds, // Array med ID'er på favorit produkter
  toggleFavorite, // Funktion til at tilføje/fjerne favoritter
  addToCart, // Funktion til at tilføje produkter til kurven
}) {
  // State hooks til at håndtere komponentens data
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Async funktion til at hente top-rated produkter fra API
    const fetchTopRatedProducts = async () => {
      setLoading(true); // Sæt loading til true når vi starter
      setError(null); // Nulstil eventuelle fejl

      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=150"
        );
        // Tjek om response er OK, ellers vis en fejl
        if (!response.ok) throw new Error("Noget gik galt med hentningen");
        const data = await response.json();

        // Sorter produkter efter rating (højeste først) og tag de første 5
        const topRatedProducts = data.products
          .sort((a, b) => b.rating - a.rating) // Sorter descending efter rating
          .slice(0, 5); // Tag kun de første 5

        // Opdater products state med topRated produkter
        setProducts(topRatedProducts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopRatedProducts();
  }, []); // Tom dependency array betyder kun kør én gang ved mount

  // Conditional rendering: Vis loading besked hvis loading er true
  if (loading) return <div className={styles.loading}>Loading...</div>;

  // Conditional rendering: Vis fejlbesked hvis der er en fejl
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.topRatedContainer}>
      <h2>Top 5 produkter</h2>
      <div className={styles.topRatedGrid}>
        {/* Map over products array og render hvert produkt */}
        {products.map((product) => {
          // Tjek om produktet er i favoritter ved at se om ID'et er i favoriteIds array
          const isFavorite = favoriteIds.includes(product.id);
          return (
            <div key={product.id} className={styles.topRatedItem}>
              <div className={styles.card}>
                {/* Rating sektion med stjerne ikon */}
                <div className={styles.rating}>
                  <IoMdStar color="#52B69A" /> {product.rating}
                </div>
                {/* Produkt billede container */}
                <div className={styles.imageContainer}>
                  {/* Div der fungerer som billede med background-image CSS */}
                  <div
                    className={styles.image}
                    style={{
                      backgroundImage: `url(${
                        product.images[0] || product.thumbnail // Brug første billede eller thumbnail som fallback
                      })`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    role="img" // Accessibility rolle
                    aria-label={product.title} // Accessibility label
                  />
                  {/* Favorit knap med conditional styling */}
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className={`${styles.favoriteBtn} ${
                      isFavorite ? styles.favorited : "" // Kald toggleFavorite prop med produkt ID
                    }`}
                    aria-label={
                      isFavorite
                        ? "Fjern fra favoritter"
                        : "Tilføj til favoritter" // Accessibility label baseret på tilstand
                    }
                  >
                    {/* Conditional rendering af emoji baseret på favorit status */}
                    {isFavorite ? "❤️" : "🤍"}
                  </button>
                </div>
                {/* Produkt detaljer sektion */}
                <div className={styles.detailsContainer}>
                  {/* Link til produkt detalje side (React Router) */}
                  <Link
                    to={`/products/${product.id}`} // Dynamisk route til produkt side
                    className={styles.productTitleLink}
                  >
                    <h5 className={styles.productTitle}>{product.title}</h5>
                  </Link>
                  {/* Pris og kurv knap container */}
                  <div className={styles.priceContainer}>
                    <h4 className={styles.price}>
                      <strong>{product.price} DKK</strong>
                    </h4>
                    {/* Tilføj til kurv knap */}
                    <button
                      onClick={() => addToCart(product)} // Kald addToCart prop med hele produkt objektet
                      className={styles.addCartBtn}
                    >
                      <FaShoppingCart size={16} /> {/* Shopping cart ikon */}
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
