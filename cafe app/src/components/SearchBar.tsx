import type { ChangeEvent, KeyboardEvent } from "react";
import type { SearchBarProps } from "../types";



export default function SearchBar({ value, onChange }: SearchBarProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange(e.currentTarget.value);
  };

  const handleSearchKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      e.currentTarget.blur();
    } else if (e.key === "Escape") {
      onChange("");
      e.currentTarget.blur();
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      onKeyDown={handleSearchKeyDown}
      placeholder="Search the menu…"
      className="field"
      aria-label="Search the menu"
    />
  );
}
