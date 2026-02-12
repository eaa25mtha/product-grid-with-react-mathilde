import { Link } from "react-router";
import styles from "./Product.module.css";

export default function Product({ product }) {
  const stars = product.rating.rate > 4 ? "⭐️⭐️⭐️⭐️⭐️" : "⭐️⭐️⭐️";
  const category =
    product.category.charAt(0).toUpperCase() + product.category.slice(1);

  return (
    <Link to={`/products/${product.id}`} className={styles.cardLink}>
      <aritcle className={styles.card}>
        <img src={product.image} className={styles.image} />
        <div className={styles.info}>
          <h2 className={styles.title}>{product.title}</h2>
          <p className={styles.description}>
            {product.description || "product description not available"}
          </p>
          <p className={styles.price}>DKK {product.price}</p>
          <span
            //ternary operator
            className={`${styles.stock} ${product.inStock ? styles.inStock : styles.outOfStock}`}
          >
            {product.inStock ? "På lager" : "Udsolgt"}
          </span>
          <span className={styles.rating}>{stars}</span>
          <span className={styles.category}>{category}</span>
        </div>
      </aritcle>
    </Link>
  );
}
