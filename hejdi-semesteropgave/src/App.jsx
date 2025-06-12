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

// Hoved-App component der fungerer som root component for hele applikationen
export default function App() {
  // State hooks til at administrere favoritter og indkøbskurv
  const [favorites, setFavorites] = useState([]); // State array til at gemme favorit produkt-ID'er
  const [cart, setCart] = useState([]); // State array til at gemme produkter i indkøbskurven

  // Effect hook til at indlæse favoritter fra localStorage ved component mount
  useEffect(() => {
    const savedFavorites = getFavoritesFromStorage(); // Kalder utility function til at hente data
    setFavorites(savedFavorites); // Opdaterer state med de gemte favoritter
  }, []); // Tom dependency array betyder at effect kun kører ved mount

  // Load cart fra localStorage
  // Effect hook til at indlæse indkøbskurv fra localStorage ved component mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart"); // Henter serialiseret cart data
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart)); // Parser JSON string tilbage til array
      } catch (error) {
        console.error("Error parsing saved cart:", error);
        setCart([]); // Fallback til tom array hvis parsing fejler
      }
    }
  }, []);

  // gem favorites til localStorage via utility funktion
  // Effect hook til at gemme favoritter i localStorage når favorites state ændres
  useEffect(() => {
    saveFavoritesToStorage(favorites); // Kalder utility function med aktuelt favorites state
  }, [favorites]); // Dependency array med favorites - kører når favorites ændres

  // Gem kurv til localStorage
  // Effect hook til at gemme indkøbskurv i localStorage når cart state ændres
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart)); // Serialiserer cart array til JSON string
  }, [cart]); // Dependency array med cart - kører når cart ændres

  // Funktion til at toggle favorites status
  // Handler function til at toggle favorit status for et produkt
  const toggleFavorites = (id) => {
    if (favorites.includes(id)) {
      // Hvis produkt-ID allerede er i favoritter, fjern det
      setFavorites(favorites.filter((fav) => fav !== id));
    } else {
      // Hvis produkt-ID ikke er i favoritter, tilføj det via spread operator
      setFavorites([...favorites, id]);
    }
  };

  // Tilføj produkt til kurv
  // Handler function til at tilføje et produkt til indkøbskurven
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // Spread operator til at tilføje nyt produkt
  };

  // Fjern item fra kurv
  // Handler function til at fjerne et specifikt item fra kurven baseret på index
  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  // Handler function til at tømme hele indkøbskurven
  const clearCart = () => {
    setCart([]); // Sætter state til tom array
  };

  return (
    <div className={styles.app}>
      {/* Header component der vises på alle sider */}
      <Header />
      <main className={styles.main}>
        {/* React Router Routes til at definere navigation mellem sider */}
        <Routes>
          {/* Home route - sender handler funktioner som props til Home component */}
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
          {/* Statisk route uden props */}
          <Route path="/about-contact" element={<AboutContact />} />

          {/* Products route med props til produkthåndtering */}
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

          {/* Favorites route med props til favoritfunktionalitet */}
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

          {/* Cart/Checkout route med props til indkøbskurvhåndtering */}
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

          {/* Dynamic route med URL parameter (:id) til individuelle produktsider */}
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

          {/* Statiske routes til juridiske sider */}
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route
            path="/personal-data-policy"
            element={<PersonalDataPolicy />}
          />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Routes>
      </main>

      {/* Globale components der vises på alle sider */}
      <CookieBanner />
      <Footer />
    </div>
  );
}
