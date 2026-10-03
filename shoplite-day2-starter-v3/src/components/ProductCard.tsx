// ✅ PROVIDED: part of the starter. You don't need to change this file, but use it as a reference.
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";
import type { Product } from "../types";
import { ProductDetails } from "./ProductDetails";

export function ProductCard({ product }: { product: Product }) {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col rounded border border-gray-200 bg-white p-3">
      <img src={product.image} alt={product.title} className="h-32 object-contain" />
      <h3 className="mt-2 line-clamp-2 text-sm font-medium">{product.title}</h3>
      <p className="mt-auto font-bold">${product.price?.toFixed(2)}</p>
      <ProductDetails productId={product.id} />
      <button
        onClick={() => dispatch(addItem(product))}
        className="mt-2 rounded bg-blue-600 px-3 py-1 text-white"
      >
        Add to cart
      </button>
    </div>
  );
}
