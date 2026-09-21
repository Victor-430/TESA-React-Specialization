import type { ReactNode } from "react";
import { Link } from "react-router";
import { FaLaptop, FaShirt, FaBook, FaHouse, FaFutbol } from "react-icons/fa6";
import { products} from "../data/mockProducts";
import { ProductCard } from "../components/ProductCard";
import { categories } from "../types";

const categoryIcons: Record<string, ReactNode> = {
  Electronics: <FaLaptop />,
  Clothing: <FaShirt />,
  Books: <FaBook />,
  Home: <FaHouse />,
  Sports: <FaFutbol />,
};

export const HomePage = () => {
  const featured = products.filter((p) => p.rating >= 4.5).slice(0, 4);

  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hero">
        <h1>Welcome to Vacci</h1>
        <Link to="/products" className="btn btn-primary btn-lg">
          Shop All Products
        </Link>
      </section>

      {/* Featured Products */}
      <section className="section">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Category Cards */}
      <section className="section">
        <h2 className="section-title">Browse by Category</h2>
        <div className="category-grid">
          {categories.map((cat) => {
            // filter — count products per category
            const count = products.filter((p) => p.category === cat).length;
            return (
              <Link
                key={cat}
                to={`/products?category=${cat}`}
                className="category-card"
              >
                <span className="category-icon">{categoryIcons[cat]}</span>
                <span className="category-name">{cat}</span>
                <span className="category-count">{count} items</span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};
