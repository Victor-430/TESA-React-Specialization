// ✅ PROVIDED: part of the starter. Use it as a reference. (You will only change it for the cache test in COMPARISON.md.)
import { useState } from "react";
import { Header } from "./components/Header";
import { CategoryList } from "./components/CategoryList";
import { ProductGrid } from "./components/ProductGrid";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <CategoryList selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <ProductGrid category={selectedCategory} />
    </div>
  );
}
