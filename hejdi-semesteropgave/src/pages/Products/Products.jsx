import { useState, useEffect } from "react";
import ProductList from "../../components/ProductList/ProductList";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import Pagination from "../../components/Pagination/Pagination";
import styles from "./Products.module.css";

export default function Products({ addToCart, favorites, toggleFavorites }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  //Filter States
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("");

  //Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=150"
        );
        if (!response.ok) throw new Error("Noget gik galt med hentningen");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = [...new Set(products.map((p) => p.category))];

  const filteredProducts = products
    .filter((p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((p) => (selectedCategory ? p.category === selectedCategory : true))
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

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const pagedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [filteredProducts, currentPage, totalPages]);

  return (
    <div className={styles.productsPage}>
      <h1>Produkter</h1>
      <FilterPanel
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />

      {loading && <p>Loader produkter...</p>}
      {error && <p className={styles.error}>Fejl: {error}</p>}

      {!loading && !error && (
        <>
          <ProductList
            products={pagedProducts}
            favoriteIds={favorites}
            toggleFavorite={toggleFavorites}
            addToCart={addToCart}
          />
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
