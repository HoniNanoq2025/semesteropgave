import { useState, useEffect } from "react";
import ProductList from "../../components/ProductList/ProductList";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import Pagination from "../../components/Pagination/Pagination";
import styles from "./Products.module.css";

/**
 * Products komponenten - hovedkomponent for produktsiden
 * @param {Object} props - Component props indeholder:
 * @param {Function} addToCart - Callback function til at tilføje produkter til kurven
 * @param {Array} favorites - Array med favorit produkt IDs
 * @param {Function} toggleFavorites - Callback function til at toggle favorit status
 */
export default function Products({ addToCart, favorites, toggleFavorites }) {
  // State hooks til at håndtere produkt data og loading states
  const [products, setProducts] = useState([]); // State hook til at gemme alle produkter
  const [error, setError] = useState(null); // State hook til error handling
  const [loading, setLoading] = useState(false); // State hook til loading indicator

  // Filter States - state hooks til at håndtere forskellige filter muligheder
  const [searchTerm, setSearchTerm] = useState(""); // State hook til søgeterm input
  const [selectedCategory, setSelectedCategory] = useState(""); // State hook til valgt kategori filter
  const [sortOption, setSortOption] = useState(""); // State hook til sorteringsmuligheder

  // Pagination States - state hooks til at håndtere side opdeling
  const [currentPage, setCurrentPage] = useState(1); // State hook til nuværende side nummer
  const itemsPerPage = 9; // Konstant der definerer antal produkter per side

  // useEffect hook til at fetch produkter når komponenten mounter
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Sætter loading state til true før API kald
      setError(null); // Nulstiller error state

      try {
        // Async API kald til DummyJSON API
        const response = await fetch(
          "https://dummyjson.com/products?limit=150"
        );

        // Response validation - checker om API kaldet var succesfuldt
        if (!response.ok) throw new Error("Noget gik galt med hentningen");

        // Parser JSON response data
        const data = await response.json();

        // Opdaterer products state med fetched data
        setProducts(data.products);
      } catch (error) {
        // Error handling - sætter error message i state
        setError(error.message);
      } finally {
        // Sætter loading til false uanset om request lykkedes eller fejlede
        setLoading(false);
      }
    };

    fetchProducts(); // Kalder async function
  }, []); // Tomt dependency array betyder hook kun kører ved component mount

  // Computed value - udtrækker unikke kategorier fra produkter ved hjælp af Set
  const categories = [...new Set(products.map((p) => p.category))];

  // Computed value - filtrerer og sorterer produkter baseret på filter states
  const filteredProducts = products
    // Filter baseret på søgeterm - case insensitive string matching
    .filter((p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
    // Filter baseret på valgt kategori - ternary operator til conditional filtering
    .filter((p) => (selectedCategory ? p.category === selectedCategory : true))
    // Sorterer produkter baseret på valgt sorteringsmulighed
    .sort((a, b) => {
      switch (sortOption) {
        case "priceAsc":
          return a.price - b.price; // Ascending pris sortering
        case "priceDesc":
          return b.price - a.price; // Descending pris sortering
        case "alphaAsc":
          return a.title.localeCompare(b.title); // Alfabetisk A-Z sortering
        case "alphaDesc":
          return b.title.localeCompare(a.title); // Alfabetisk Z-A sortering
        case "ratingHigh":
          return b.rating - a.rating; // Højeste rating først
        case "ratingLow":
          return a.rating - b.rating; // Laveste rating først
        default:
          return 0; // Ingen sortering
      }
    });

  // Computed values til pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage); // Beregner totalt antal sider

  // Slice array til at få produkter for nuværende side - pagination implementation
  const pagedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage, // Start index
    currentPage * itemsPerPage // End index
  );

  // useEffect hook til at håndtere edge case hvor nuværende side overstiger total sider
  useEffect(() => {
    // Checker om current page er større end total pages efter filtering
    if (currentPage > totalPages) {
      setCurrentPage(1); // Reset til side 1 hvis nuværende side ikke eksisterer
    }
  }, [filteredProducts, currentPage, totalPages]); // Dependencies - kører når disse states ændres

  // Component render - JSX return statement
  return (
    <div className={styles.productsPage}>
      <h1>Produkter</h1>

      {/* FilterPanel component - modtager filter states som props */}
      <FilterPanel
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />

      {/* Conditional rendering baseret på loading state */}
      {loading && <p>Loader produkter...</p>}

      {/* Conditional rendering baseret på error state */}
      {error && <p className={styles.error}>Fejl: {error}</p>}

      {/* Conditional rendering - viser produkter og pagination kun hvis ikke loading eller error */}
      {!loading && !error && (
        <>
          {/* ProductList component - modtager filtrerede produkter og callback functions som props */}
          <ProductList
            products={pagedProducts}
            favoriteIds={favorites}
            toggleFavorite={toggleFavorites}
            addToCart={addToCart}
          />

          {/* Pagination component - modtager pagination states som props */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}
