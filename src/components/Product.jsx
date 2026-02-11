import { Link } from "react-router";
import styles from "./Product.module.css";

export default function Product ({product}) {
    const stars = product.rating.rate > 4 ? "⭐️⭐️⭐️⭐️⭐️" : "⭐️⭐️⭐️";
    const category = product.category.charAt(0).toUpperCase() + product.category.slice(1);

    return (
        <Link to={`/products/${product.id}`} className="product-card-link">
        <aritcle className="product-card">
            <img src={product.image} className="product-image"/>
            <div className="product-info">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-description">{product.description || "product description not available"}</p>
                <p className="product-price">DKK {product.price}</p>
                <span
                //ternary operator
                className={`product-stock ${product.inStock ? "in-stock" : "out-of-stock"}`}>
                {product.inStock ? "På lager" : "Udsolgt"}
                </span>
                <span className="product-rating">{stars}</span>
                <span className="product-category">{category}</span>
            </div>
        </aritcle>
        </Link>
    );
}