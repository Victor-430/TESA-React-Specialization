import { useLoaderData, Link } from "react-router";
import { products } from "../data/mockProducts";
import { ProductCard } from "../components/ProductCard";
import type { Product } from "../types";

export const ProductDetailPage = () => {
  const product = useLoaderData<Product>();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="detail-page">
      <Link to="/products" className="back-link">
        ← Back to Products
      </Link>

      <div className="detail-content">
        <div className="detail-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="detail-info">
          <span className="detail-category">{product.category}</span>
          <h1 className="detail-name">{product.title}</h1>
          <div className="detail-rating"></div>
          <p className="detail-price">${product.price.toFixed(2)}</p>
          <p className="detail-description">{product.description}</p>
          <div className="detail-stock">
            <span
              className={`stock-badge ${product.inStock ? "in-stock" : "out-of-stock"}`}
            >
              {product.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="section">
          <h2 className="section-title">Related Products</h2>
          <div className="product-grid">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
