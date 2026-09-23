import type { MouseEvent } from "react";
import type { MenuCardProps } from "../types";
import { getStockLabel, toneClasses } from "../utils/getStockLabel";

export default function MenuCard({
  item,
  isLoggedIn,
  isSelected,
  onSelect,
  onAdd,
}: MenuCardProps) {
  
  const isSoldOut = item.stock === 0;
  const stockLabel = getStockLabel(item.stock);

  const handleCardClick = (_e: MouseEvent<HTMLDivElement>): void => {
    onSelect(item.id);
  };

  const handleAdd = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    onAdd(item);
  };

  const addLabel = isSoldOut
    ? "Sold out"
    : !isLoggedIn
      ? "Log in to order"
      : "Add to order";
 
      const addDisabled = isSoldOut || !isLoggedIn;

  return (
    <div
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") onSelect(item.id);
      }}
      className={`glass-panel cursor-pointer p-4 transition-colors ${
        isSoldOut ? "sold-out border-danger/20" : "hover:border-black/25"
      } ${isSelected ? "border-black ring-2 ring-black/15" : ""}`}
      style={isSoldOut ? { opacity: 0.55 } : { opacity: 1 }}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-cream text-lg">{item.name}</h3>
          <p className="text-muted mt-0.5 text-sm">${item.price.toFixed(2)}</p>
        </div>
        <span className={`text-xs font-medium ${toneClasses[stockLabel.tone]}`}>
          {stockLabel.text}
        </span>
      </div>

      <button
        type="button"
        onClick={handleAdd}
        disabled={addDisabled}
        className="btn-glass-accent mt-4 w-full"
      >
        {addLabel}
      </button>
    </div>
  );
}
