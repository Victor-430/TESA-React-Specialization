import type { StockLabel } from "../types";

export function getStockLabel(stock: number): StockLabel {
  return stock === 0
    ? { text: "Sold out", tone: "danger" }
    : stock <= 3
      ? { text: `Only ${stock} left`, tone: "warn" }
      : { text: "In stock", tone: "success" };
}

export const toneClasses: Record<StockLabel["tone"], string> = {
  danger: "text-danger",
  warn: "text-warn",
  success: "text-success",
};
