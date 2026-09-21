import { Link } from "react-router";
import type { Product } from "../types";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-card-link">
        <div className="product-card-image">
          <img
            src={product.image}
            alt={product.title}
            // loading="lazy"
          />
        </div>
        <h3 className="product-card-name">{product.title}</h3>
      </Link>
      <div className="product-card-info">
        <span className="product-card-price">${product.price.toFixed(2)}</span>
      </div>
      <div className="product-card-footer">
        <span
          className={`stock-badge ${product.inStock ? "in-stock" : "out-of-stock"}`}
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
        <Link to={`/products/${product.id}`} className="btn btn-primary btn-sm">
          View Details
        </Link>
      </div>
    </div>
  );
};
