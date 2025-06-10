import { useState, useEffect } from "react";
import FavoriteCardList from "../../components/FavoriteCardList/FavoriteCardList";
import styles from "./Favorites.module.css";

export default function Favorites({ favorites, toggleFavorites, addToCart }) {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      if (favorites.length === 0) {
        setFavoriteProducts([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=150"
        );
        if (!response.ok) throw new Error("Fejl ved hentning af produkter");

        const data = await response.json();
        const filteredFavorites = data.products.filter((product) =>
          favorites.includes(product.id)
        );

        setFavoriteProducts(filteredFavorites);
      } catch (error) {
        setError(error.message);
        console.error("Fejl ved hentning af favoritter", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavoriteProducts();
  }, [favorites]);

  if (loading) {
    return (
      <div className={styles.favoritesPage}>
        <h1 className={styles.favHeading}>Favoritter</h1>
        <p>Indlæser dine favoritter...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.favoritesPage}>
        <h1 className={styles.favHeading}>Favoritter</h1>
        <p className={styles.error}>Fejl: {error}</p>
      </div>
    );
  }

  return (
    <div className={styles.favoritesPage}>
      <h1 className={styles.favHeading}>Favoritter</h1>
      {favoriteProducts.length === 0 ? (
        <div className={styles.noFavorites}>
          <p>Du har ingen favoritter endnu.</p>
          <p>
            Gå til <a href="/products">Produkter</a> for at tilføje nogle!
          </p>
        </div>
      ) : (
        <FavoriteCardList
          products={favoriteProducts}
          favoriteIds={favorites}
          toggleFavorite={toggleFavorites}
          addToCart={addToCart}
        />
      )}
    </div>
  );
}
