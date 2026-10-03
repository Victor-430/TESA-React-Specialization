// ✅ PROVIDED: part of the starter. You don't need to change this file, but use it as a reference.
import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import type { Product } from "../types";

export function useProducts() {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false; // becomes true if the component goes away

    async function load() {
      try {
        const products = await getProducts();
        if (!ignore) setData(products);
      } catch (err) {
        if (!ignore) setError((err as Error).message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    load();

    return () => {
      ignore = true; // cleanup: ignore any late answer
    };
  }, []);

  return { data, loading, error };
}
