import { useState, useEffect } from "react";
import FavoriteCardList from "../../components/FavoriteCardList/FavoriteCardList";
import FilterFavorites from "../../components/FilterFavorites/FilterFavorites";
import styles from "./Favorites.module.css";

export default function Favorites({ favorites, toggleFavorites, addToCart }) {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("");

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

  // Get categories from favoriteProducts, not favorites
  const categories = [
    ...new Set(favoriteProducts.map((product) => product.category)),
  ];

  // Filter and sort favoriteProducts, not favorites
  const filteredFavorites = favoriteProducts
    .filter((product) =>
      selectedCategory ? product.category === selectedCategory : true
    )
    .sort((a, b) => {
      switch (sortOption) {
        case "priceAsc":
          return a.price - b.price;
        case "priceDesc":
          return b.price - a.price;
        case "alphaAsc":
          return a.title.localeCompare(b.title);
        case "alphaDesc":
          return b.title.localeCompare(a.title);
        case "ratingHigh":
          return b.rating - a.rating;
        case "ratingLow":
          return a.rating - b.rating;
        default:
          return 0;
      }
    });

  return (
    <div className={styles.favoritesPage}>
      <h1 className={styles.favHeading}>Dine favoritter</h1>
      <div className={styles.filterPanel}>
        <FilterFavorites
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />
      </div>
      {favoriteProducts.length === 0 ? (
        <div className={styles.noFavorites}>
          <p>Du har ingen favoritter endnu.</p>
          <p>
            Gå til <a href="/products">Produkter</a> for at tilføje dine
            favorit-produkter!
          </p>
        </div>
      ) : (
        <FavoriteCardList
          products={filteredFavorites}
          favoriteIds={favorites}
          toggleFavorite={toggleFavorites}
          addToCart={addToCart}
        />
      )}
    </div>
  );
}
