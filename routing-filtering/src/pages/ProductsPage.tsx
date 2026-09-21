import { useState, useMemo } from "react";
import { useSearchParams } from "react-router";
import { products } from "../data/mockProducts";
import { ProductCard } from "../components/ProductCard";
import { SearchBar } from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";

type SortOption =
  | "title-asc"
  | "title-desc"
  | "name-asc"
  | "name-desc"
  | "price-asc"
  | "price-desc"
  | "rating-desc";

export const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("searchParams", searchParams.toString());

  // Read initial filter state from URL search params
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [inStockOnly, setInStockOnly] = useState(
    searchParams.get("inStock") === "true",
  );
  const [minPrice, setMinPrice] = useState(
    Number(searchParams.get("minPrice")) || 0,
  );
  const [maxPrice, setMaxPrice] = useState(
    Number(searchParams.get("maxPrice")) || 0,
  );
  const [sortBy, setSortBy] = useState<SortOption>(
    (searchParams.get("sort") as SortOption) || "name-asc",
  );

  // Sync state to URL params
  const updateParams = (
    key: string,
    value: string,
    currentSearch = search,
    currentCategory = category,
    currentInStock = inStockOnly,
    currentMin = minPrice,
    currentMax = maxPrice,
    currentSort = sortBy,
  ) => {
    const params: Record<string, string> = {};
    const values: Record<string, string> = {
      search: currentSearch,
      category: currentCategory,
      inStock: String(currentInStock),
      minPrice: String(currentMin),
      maxPrice: String(currentMax),
      sort: currentSort,
      [key]: value,
    };
    for (const [k, v] of Object.entries(values)) {
      if (v && v !== "0" && v !== "false" && v !== "name-asc") {
        params[k] = v;
      }
    }
    setSearchParams(params, { replace: true });
  };

  const filteredProducts = useMemo(() => {
    let result = products;

    if (search) {
      const query = search.toLowerCase();
      result = result.filter((p) => p.title.toLowerCase().includes(query));
    }

    if (category) {
      result = result.filter((p) => p.category === category);
    }

    if (inStockOnly) {
      result = result.filter((p) => p.inStock);
    }

    if (minPrice > 0) {
      result = result.filter((p) => p.price >= minPrice);
    }

    if (maxPrice > 0) {
      result = result.filter((p) => p.price <= maxPrice);
    }

    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case "title-asc":
        case "name-asc":
          return a.title.localeCompare(b.title);
        case "title-desc":
        case "name-desc":
          return b.title.localeCompare(a.title);
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating-desc":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    return result;
  }, [search, category, inStockOnly, minPrice, maxPrice, sortBy]);

  const allFilteredInStock = filteredProducts.every((p) => p.inStock);

  const hasPremium = filteredProducts.some((p) => p.price > 500);

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>All Products</h1>
        <SearchBar
          value={search}
          onChange={(v) => {
            setSearch(v);
            updateParams("search", v);
          }}
        />
      </div>

      <div className="products-layout">
        <FilterPanel
          selectedCategory={category}
          onCategoryChange={(v) => {
            setCategory(v);
            updateParams("category", v);
          }}
          inStockOnly={inStockOnly}
          onStockChange={(v) => {
            setInStockOnly(v);
            updateParams("inStock", String(v));
          }}
          minPrice={minPrice}
          maxPrice={maxPrice}
          onMinPriceChange={(v) => {
            setMinPrice(v);
            updateParams("minPrice", String(v));
          }}
          onMaxPriceChange={(v) => {
            setMaxPrice(v);
            updateParams("maxPrice", String(v));
          }}
        />

        <div className="products-main">
          {/* Result info bar */}
          <div className="results-bar">
            <span className="results-count">
              {filteredProducts.length} product
              {filteredProducts.length !== 1 && "s"} found
            </span>
            <div className="results-badges">
              {allFilteredInStock && filteredProducts.length > 0 && (
                <span className="badge badge-success">All In Stock</span>
              )}
              {hasPremium && (
                <span className="badge badge-warning">Has Premium Items</span>
              )}
              <select
                className="filter-select"
                style={{ width: "auto", padding: "0.25rem 0.5rem" }}
                value={sortBy}
                onChange={(e) => {
                  const val = e.target.value as SortOption;
                  setSortBy(val);
                  updateParams("sort", val);
                }}
              >
                <option value="name-asc">Title (A → Z)</option>
                <option value="name-desc">Title (Z → A)</option>
                <option value="price-asc">Price (Low → High)</option>
                <option value="price-desc">Price (High → Low)</option>
                <option value="rating-desc">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <span className="empty-icon">🔍</span>
              <h3>No products found</h3>
              <p>Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
