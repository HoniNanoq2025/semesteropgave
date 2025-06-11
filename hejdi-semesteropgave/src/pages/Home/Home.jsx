import TopRatedProducts from "../../components/TopRatedProducts/TopRatedProducts";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home({ addToCart, favorites, toggleFavorites }) {
  return (
    <div className={styles.homeContainer}>
      <h1>Velkommen til min hjemmeside</h1>
      <div>
        <TopRatedProducts
          favoriteIds={favorites}
          toggleFavorite={toggleFavorites}
          addToCart={addToCart}
        />
        <div className={styles.goToProducts}>
          <Link to="/products" className={styles.goToProductsBtn}>
            Se alle produkter
          </Link>
        </div>
      </div>
    </div>
  );
}
