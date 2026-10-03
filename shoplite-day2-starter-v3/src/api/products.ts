// ✅ PROVIDED: part of the starter. You don't need to change this file, but use it as a reference.
import type { Product } from "../types";

const BASE_URL = "http://localhost:3001";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) {
    throw new Error(`Failed to load products (status ${res.status})`);
  }
  return res.json();
}

export async function getCategories(): Promise<string[]> {
  const res = await fetch(`${BASE_URL}/products/categories`);
  if (!res.ok) {
    throw new Error(`Failed to load categories (status ${res.status})`);
  }
  return res.json();
}
