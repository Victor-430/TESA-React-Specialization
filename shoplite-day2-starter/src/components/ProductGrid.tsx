// 📝 ASSIGNMENT: fill in TODO 3 and TODO 4 in this file
import { ProductCard } from "./ProductCard";
// TODO 3: import your new RTK Query hook
import { skipToken } from "@reduxjs/toolkit/query/react";
import { useGetProductsQuery, useGetProductsByCategoryQuery } from "../api/shopApi";

export function ProductGrid({ category = null }: { category?: string | null } = {}) {
  // TODO 4: load the products with RTK Query instead of useProducts
  const productsQuery = useGetProductsQuery(undefined, { skip: category !== null });
  const categoryQuery = useGetProductsByCategoryQuery(category ?? skipToken);
  const { currentData, isLoading, isFetching, error: queryError } =
    category === null ? productsQuery : categoryQuery;
  const data = currentData ?? [];
  const loading = isLoading || (isFetching && currentData === undefined);
  let error: string | null = null;

  if (queryError) {
    if ("status" in queryError && typeof queryError.status === "number") {
      error = `Failed to load products (status ${queryError.status})`;
    } else if ("error" in queryError && queryError.error) {
      error = queryError.error 
    } else {
      error = ("message" in queryError && queryError.message) || "Failed to load products";
    }
  }

  if (loading) return <p className="p-6">Loading products…</p>;
  if (error) return <p className="p-6 text-red-600">Error: {error}</p>;

  return (
    <>
      {isFetching && currentData !== undefined && (
        <p className="px-6 pt-6 text-sm text-gray-500" role="status">Refreshing…</p>
      )}
      <div className="grid grid-cols-2 gap-4 p-6 md:grid-cols-4">
        {data.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}
