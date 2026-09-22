import { BadCounter } from "./components/BadCounter";
import { ProductCard } from "./components/ProductCard";

export const App = () => {
  const ProductList = [
    { title: "Watch", price: 19, inStock: true },
    { title: "Glasses", price: 29, inStock: false },
    { title: "Hat", price: 39, inStock: true },
  ];

  return (
    <>
      <nav>
        <img src="/Univaciti.png" alt="Univaciti logo" className="univaciti" />
      </nav>

      <BadCounter />

      <div className="grid">
        {ProductList.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            inStock={product.inStock}
          />
        ))}
      </div>
    </>
  );
};
