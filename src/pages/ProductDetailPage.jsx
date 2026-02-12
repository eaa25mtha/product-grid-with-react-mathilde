import { useParams } from "react-router";
import { useEffect, useState } from "react";
import styles from "./ProductDetailPage.module.css";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = Number(params.id);
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchProducts() {
      //fetchProducts er en asynkron funktion der henter data fra en ekstern kilde
      const url =
        "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/webshop/products.json";
      const response = await fetch(url);
      const products = await response.json();

      const productToDisplay = products.find((p) => p.id === productId);
      setProduct(productToDisplay);
    }

    fetchProducts();
  }, [productId]); //vi har puttet productId i dependency arrayet

  return (
    <>
      <header>
        <h1>{product.title}</h1>
        <h2>{product.category}</h2>
      </header>
      <main>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <span
          //ternary operator
          className={`${styles.stock} ${product.inStock ? styles.inStock : styles.outOfStock}`}
        >
          {product.inStock ? "På lager" : "Udsolgt"}
        </span>
      </main>
    </>
  );
}
