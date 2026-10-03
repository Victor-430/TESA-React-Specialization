// 📝 ASSIGNMENT: Parts 1, 2 and 5
import { useGetProductsQuery, useGetProductsByCategoryQuery } from "../api/shopApi";
import { ProductCard } from "./ProductCard";

type Props = {
  category: string | null; // null means "show every product"
};

export function ProductGrid({ category }: Props) {
  // TODO (Part 1): load the products with RTK Query instead of useProducts
  // TODO (Part 2): when a category is selected, show only that category's products
  // TODO (Part 5): show a small "Refreshing…" message while the products are being fetched again
  
  const allProducts = useGetProductsQuery(undefined, { skip: category !== null });
  
  const categoryProducts = useGetProductsByCategoryQuery(category ?? "", { skip: category === null });
  
  const products = category === null ? allProducts : categoryProducts;
 
  const { currentData: data = [], isFetching , error:productError} = products;
  
  const loading = products.isLoading || (isFetching && !products.currentData);
  
  const error = productError && (
    "status" in productError
      ? typeof productError.status === "number"
        ? `Failed to load products (status ${productError.status})`
        : productError.error
      : productError.message ?? "Could not load products"
  );

  if (loading) return <p className="p-6">Loading products…</p>;
  if (error) return <p className="p-6 text-red-600">Error: {error}</p>;

  return (
    <div className="grid grid-cols-2 gap-4 p-6 md:grid-cols-4">
      {isFetching && <p className="col-span-full text-sm" role="status">Refreshing…</p>}
      {data.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
