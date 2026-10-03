// ✅ PROVIDED: part of the starter. Use it as a reference. (You will only change it for the cache test in COMPARISON.md.)
import { useState } from "react";
import { Header } from "./components/Header";
import { CategoryList } from "./components/CategoryList";
import { AddProductForm } from "./components/AddProductForm";
import { ProductGrid } from "./components/ProductGrid";

export default function App() {
  // The selected category lives here, so both CategoryList and ProductGrid can use it
  const [category, setCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <AddProductForm />
      <CategoryList selected={category} onSelect={setCategory} />
      <ProductGrid category={category} />
    </div>
  );
}
