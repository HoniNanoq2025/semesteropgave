import React, { useState, useEffect } from "react";
import styles from "./TopRatedProducts.module.css";

export default function TopRatedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopRatedProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=150"
        );
        if (!response.ok) throw new Error("Noget gik galt med hentningen");
        const data = await response.json();

        // Sort products by rating (highest first) and take top 5
        const topRatedProducts = data.products
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 5);

        setProducts(topRatedProducts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopRatedProducts();
  }, []);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return <p>To be added</p>;
}
