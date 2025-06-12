import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./pages/Home/Home";
import AboutContact from "./pages/AboutContactPage/AboutContactPage";
import Products from "./pages/Products/Products";
import ProductCard from "./components/ProductCard/ProductCard";
import Favorites from "./pages/Favorites/Favorites";
import Checkout from "./pages/Checkout/Checkout";
import CookiePolicy from "./pages/CookiePolicy/CookiePolicy";
import PersonalDataPolicy from "./pages/PersonalDataPolicy/PersonalDataPolicy";
import TermsConditions from "./pages/TermsConditions/TermsConditions";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CookieBanner from "./components/CookieBanner/CookieBanner";
import {
  getFavoritesFromStorage,
  saveFavoritesToStorage,
} from "./utils/localStorage";

export default function App() {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  // Load favorites from localStorage using utility function
  useEffect(() => {
    const savedFavorites = getFavoritesFromStorage();
    setFavorites(savedFavorites);
  }, []);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Error parsing saved cart:", error);
        setCart([]);
      }
    }
  }, []);

  // Save favorites to localStorage using utility function
  useEffect(() => {
    saveFavoritesToStorage(favorites);
  }, [favorites]);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Function to toggle favorites status
  const toggleFavorites = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fav) => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // Function to add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Function to remove item from cart
  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  // Function to clear entire cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                addToCart={addToCart}
                favorites={favorites}
                toggleFavorites={toggleFavorites}
              />
            }
          />
          <Route path="/about-contact" element={<AboutContact />} />
          <Route
            path="/products"
            element={
              <Products
                addToCart={addToCart}
                favorites={favorites}
                toggleFavorites={toggleFavorites}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                toggleFavorites={toggleFavorites}
                addToCart={addToCart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Checkout
                cart={cart}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
              />
            }
          />
          <Route
            path="/products/:id"
            element={
              <ProductCard
                toggleFavorites={toggleFavorites}
                favorites={favorites}
                addToCart={addToCart}
              />
            }
          />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route
            path="/personal-data-policy"
            element={<PersonalDataPolicy />}
          />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Routes>
      </main>
      <CookieBanner />
      <Footer />
    </div>
  );
}
