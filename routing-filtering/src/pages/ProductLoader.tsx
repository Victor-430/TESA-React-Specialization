import type { LoaderFunctionArgs } from "react-router";
import { products } from "../data/mockProducts";

export const productLoader = ({ params }: LoaderFunctionArgs) => {
  const product = products.find((p) => p.id === Number(params.id));
  if (!product) {
    throw new Response("Product not found", { status: 404 });
  }
  return product;
}