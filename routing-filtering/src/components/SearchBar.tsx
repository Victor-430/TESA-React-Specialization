type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const SearchBar = ({
  value,
  onChange,
  placeholder = "Search products...",
}: SearchBarProps) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      {value && (
        <button
          className="search-clear"
          onClick={() => onChange("")}
        >
          ✕
        </button>
      )}
    </div>
  );
}
