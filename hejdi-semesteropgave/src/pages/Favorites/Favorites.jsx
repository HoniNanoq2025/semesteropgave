import { useState, useEffect } from "react";
import FavoriteCardList from "../../components/FavoriteCardList/FavoriteCardList";
import FilterFavorites from "../../components/FilterFavorites/FilterFavorites";
import styles from "./Favorites.module.css";

// Favorites komponenten tager tre props: favorites array, toggleFavorites funktion og addToCart funktion
export default function Favorites({ favorites, toggleFavorites, addToCart }) {
  // State hook til at gemme de fulde produktdata for favoritter
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  // State hook til at håndtere loading tilstand under API kald
  const [loading, setLoading] = useState(false);

  // State hook til at gemme eventuelle fejlbeskeder
  const [error, setError] = useState(null);

  // State hooks til filter og sortering funktionalitet
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("");

  // useEffect hook kører når favorites array ændrer sig
  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      // Hvis der ikke er nogen favoritter, tøm produktlisten
      if (favorites.length === 0) {
        setFavoriteProducts([]);
        return;
      }

      // Sæt loading state til true og nulstil fejl
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=150"
        );
        // Tjek om API kaldet var succesfuldt
        if (!response.ok) throw new Error("Fejl ved hentning af produkter");

        const data = await response.json();

        // Filtrer produkter så vi kun får dem der er i favorites array
        const filteredFavorites = data.products.filter((product) =>
          favorites.includes(product.id)
        );

        // Opdater state med de filtrerede favoritprodukter
        setFavoriteProducts(filteredFavorites);
      } catch (error) {
        // Håndter fejl ved at sætte error state
        setError(error.message);
        console.error("Fejl ved hentning af favoritter", error);
      } finally {
        // Sæt loading til false uanset om der var fejl eller ej
        setLoading(false);
      }
    };

    // Kald funktionen når component mounter eller når favorites ændrer sig
    fetchFavoriteProducts();
  }, [favorites]); // Dependency array - useEffect kører kun når favorites ændrer sig

  // Loading state - vis besked mens data hentes
  if (loading) {
    return (
      <div className={styles.favoritesPage}>
        <h1 className={styles.favHeading}>Favoritter</h1>
        <p>Indlæser dine favoritter...</p>
      </div>
    );
  }

  // Error state - vis fejlbesked hvis der opstod en fejl
  if (error) {
    return (
      <div className={styles.favoritesPage}>
        <h1 className={styles.favHeading}>Favoritter</h1>
        <p className={styles.error}>Fejl: {error}</p>
      </div>
    );
  }

  // Hent kategorier fra favoriteProducts, ikke fra favorites
  const categories = [
    ...new Set(favoriteProducts.map((product) => product.category)),
  ];

  // Filtrer og sortér favoriteProducts
  const filteredFavorites = favoriteProducts
    // Filtrer på kategori hvis en er valgt
    .filter((product) =>
      selectedCategory ? product.category === selectedCategory : true
    )
    // Sortér baseret på sortOption state
    .sort((a, b) => {
      switch (sortOption) {
        case "priceAsc":
          return a.price - b.price; // Pris stigende
        case "priceDesc":
          return b.price - a.price; // Pris faldende
        case "alphaAsc":
          return a.title.localeCompare(b.title);
        case "alphaDesc":
          return b.title.localeCompare(a.title);
        case "ratingHigh":
          return b.rating - a.rating;
        case "ratingLow":
          return a.rating - b.rating;
        default:
          return 0; // Ingen sortering
      }
    });

  return (
    <div className={styles.favoritesPage}>
      <h1 className={styles.favHeading}>Dine favoritter</h1>

      {/* Filter panel med kategori og sorteringsvalg */}
      <div className={styles.filterPanel}>
        <FilterFavorites
          // Props til kategori filtering
          selectedCategory={selectedCategory} // Aktuel valgt kategori
          setSelectedCategory={setSelectedCategory} // Sætter funktion til at opdatere valgt kategori
          categories={categories} // Array med tilgængelige kategorier
          // Props til sortering
          sortOption={sortOption} // Aktuel sorteringsindstilling
          setSortOption={setSortOption} // Sætter funktion til at opdatere sorteringsindstilling
        />
      </div>

      {/* Conditional rendering - vis enten "ingen favoritter" besked eller produktliste */}
      {favoriteProducts.length === 0 ? (
        <div className={styles.noFavorites}>
          <p>Du har ingen favoritter endnu.</p>
          <p>
            Gå til <a href="/products">Produkter</a> for at tilføje dine
            favorit-produkter!
          </p>
        </div>
      ) : (
        // Render FavoriteCardList component med filtrerede produkter og props
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
