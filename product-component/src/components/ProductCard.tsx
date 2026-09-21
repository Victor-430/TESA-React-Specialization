import type { ProductCardProps } from "../types";

export const ProductCard = (props: ProductCardProps) => {
  return (
    <div className={`grid-card ${!props.inStock ? "out-of-stock" : "in-stock"}`}>
      <h3 className="product-title">{props.title}</h3>
      <p className="product-price">${props.price}</p>
      {!props.inStock && <p className="stock-status out-of-stock-badge">Out of stock</p>}
    </div>
  );
};
