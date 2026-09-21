import { categories } from "../types";

type FilterPanelProps = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  inStockOnly: boolean;
  onStockChange: (inStock: boolean) => void;
  minPrice: number;
  maxPrice: number;
  onMinPriceChange: (price: number) => void;
  onMaxPriceChange: (price: number) => void;
};

export default function FilterPanel({
  selectedCategory,
  onCategoryChange,
  inStockOnly,
  onStockChange,
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
}: FilterPanelProps) {
  return (
    <aside className="filter-panel">
      <h3 className="filter-title">Filters</h3>

      {/* Category Filter */}
      <div className="filter-group">
        <label className="filter-label">Category</label>
        <select
          className="filter-select"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option
              key={cat}
              value={cat}
            >
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div className="filter-group">
        <label className="filter-label">Price Range</label>
        <div className="price-inputs">
          <input
            type="number"
            className="price-input"
            placeholder="Min"
            value={minPrice || ""}
            onChange={(e) => onMinPriceChange(Number(e.target.value))}
            min={0}
          />
          <span className="price-separator">—</span>
          <input
            type="number"
            className="price-input"
            placeholder="Max"
            value={maxPrice || ""}
            onChange={(e) => onMaxPriceChange(Number(e.target.value))}
            min={0}
          />
        </div>
      </div>

      {/* In Stock Toggle */}
      <div className="filter-group">
        <label className="filter-checkbox">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => onStockChange(e.target.checked)}
          />
          In Stock Only
        </label>
      </div>
    </aside>
  );
}
