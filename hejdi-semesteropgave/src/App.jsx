import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./pages/Home/Home";
import AboutContact from "./pages/AboutContactPage/AboutContactPage";
import Products from "./pages/Products/Products";
import ProductCard from "./components/ProductCard/ProductCard";
import Favorites from "./pages/Favorites/Favorites";
import CartPage from "./pages/CartPage/CartPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CookieBanner from "./components/CookieBanner/CookieBanner";

export default function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (error) {
        console.error("Error parsing saved favorites:", error);
        setFavorites([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Function to toggle favorites status
  const toggleFavorites = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fav) => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-contact" element={<AboutContact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/products/:id"
            element={
              <ProductCard
                toggleFavorites={toggleFavorites}
                favorites={favorites}
              />
            }
          />
        </Routes>
      </main>
      <CookieBanner />
      <Footer />
    </div>
  );
}
