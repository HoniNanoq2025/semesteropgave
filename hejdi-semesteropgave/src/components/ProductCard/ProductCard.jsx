import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductCard.module.css";

export default function ProductCard() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Fejl ved hentning af detaljer", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Indlæser...</p>;

  return <p>placeholder</p>;
}
