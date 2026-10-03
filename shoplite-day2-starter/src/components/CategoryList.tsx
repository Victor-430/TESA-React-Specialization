// ✅ PROVIDED: part of the starter. You don't need to change this file, but use it as a reference.
import { useGetCategoriesQuery } from "../api/shopApi";

type CategoryListProps = {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
};

export function CategoryList({ selectedCategory, onSelectCategory }: CategoryListProps) {
  const { data, isLoading, isError } = useGetCategoriesQuery();

  if (isLoading) return <p className="px-6">Loading categories…</p>;
  if (isError) return <p className="px-6 text-red-600">Could not load categories</p>;

  return (
    <div className="flex flex-wrap gap-2 px-6 pt-6">
      <button
        type="button"
        aria-pressed={selectedCategory === null}
        onClick={() => onSelectCategory(null)}
        className={`rounded-full px-3 py-1 text-sm ${
          selectedCategory === null ? "bg-blue-600 text-white" : "bg-gray-200"
        }`}
      >
        All
      </button>
      {data?.map((category) => (
        <button
          key={category}
          type="button"
          aria-pressed={selectedCategory === category}
          onClick={() => onSelectCategory(category)}
          className={`rounded-full px-3 py-1 text-sm capitalize ${
            selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
