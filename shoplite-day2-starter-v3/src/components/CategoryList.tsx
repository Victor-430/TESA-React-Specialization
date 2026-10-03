// 📝 ASSIGNMENT: Part 2
import { useGetCategoriesQuery } from "../api/shopApi";

type Props = {
  selected: string | null;                       // the category that's chosen (null = all)
  onSelect: (category: string | null) => void;   // call this to change the category
};

export function CategoryList({ selected, onSelect }: Props) {
  const { data, isLoading, isError } = useGetCategoriesQuery();

  if (isLoading) return <p className="px-6">Loading categories…</p>;
  if (isError) return <p className="px-6 text-red-600">Could not load categories</p>;

  // TODO (Part 2): make each chip clickable so it selects its category
  // TODO (Part 2): add an "All" chip that shows every product again
  // TODO (Part 2): make the selected chip look different from the others
  return (
    <div className="flex flex-wrap gap-2 px-6 pt-6">
      <button
        type="button"
        onClick={() => onSelect(null)}
        aria-pressed={selected === null}
        className={`rounded-full px-3 py-1 text-sm ${selected === null ? "bg-blue-600 text-white" : "bg-gray-200"}`}
      >
        All
      </button>
      {data?.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onSelect(category)}
          aria-pressed={selected === category}
          className={`rounded-full px-3 py-1 text-sm capitalize ${selected === category ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
