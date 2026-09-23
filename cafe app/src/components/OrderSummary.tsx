import { useState } from "react";
import type { ChangeEvent, FocusEvent, MouseEvent } from "react";
import type { OrderSummaryProps } from "../types";
import CheckoutForm from "./CheckoutForm";


export default function OrderSummary({
  order,
  onQtyChange,
  onRemove,
  details,
  onDetailsChange,
  status,
  onSubmit,
}: OrderSummaryProps) {
  const [showCouponText, setShowCouponText] = useState(false);
  const [coupon, setCoupon] = useState("");

  const total = order.reduce((sum, line) => sum + line.price * line.qty, 0);

  const handleQtyChange = (id: number) => (delta: number) => {
    const line = order.find((l) => l.id === id);
    if (!line) return;
    onQtyChange(id, Math.max(1, line.qty + delta));
  };

  
  const handleRemove = (e: MouseEvent<HTMLButtonElement>, id: number): void => {
    e.stopPropagation();
    onRemove(id);
  };

  const handleCouponChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setCoupon(e.currentTarget.value);
  };

 
  const handleCouponFocus = (e: FocusEvent<HTMLInputElement>): void => {
    e.currentTarget.select();
  };

  return (
    <div className="glass-panel p-5">
      <h2 className="font-display text-lg text-cream">Your order</h2>

      {order.length === 0 ? (
        <p className="mt-6 text-center text-sm text-muted">Your order is empty</p>
      ) : (
        <>
          <ul className="mt-4 space-y-3">
            {order.map((line) => (
              <li key={line.id} className="flex items-center justify-between gap-3 text-sm">
                <div>
                  <p className="text-cream">{line.name}</p>
                  <p className="text-xs text-muted">
                    ${line.price.toFixed(2)} × {line.qty}
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => handleQtyChange(line.id)(-1)}
                    className="btn-glass h-8 w-8 p-0! text-xs"
                    aria-label={`Decrease ${line.name} quantity`}
                  >
                    −
                  </button>
                  <span className="w-5 text-center text-cream">{line.qty}</span>
                  <button
                    type="button"
                    onClick={() => handleQtyChange(line.id)(1)}
                    className="btn-glass h-8 w-8 p-0! text-xs"
                    aria-label={`Increase ${line.name} quantity`}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={(e) => handleRemove(e, line.id)}
                    className="btn-glass h-8 w-8 p-0! text-white"
                    aria-label={`Remove ${line.name}`}
                  >
                    ×
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-sm">
            <span className="text-muted">Total</span>
            <span className="font-display text-lg text-cream">${total.toFixed(2)}</span>
          </div>

          <div className="mt-4">
            <label htmlFor="coupon" className="mb-1 block text-xs text-muted">
              Coupon code
            </label>
            <div className="flex items-center gap-2">
              <input
                id="coupon"
                type={showCouponText ? "text" : "password"}
                value={coupon}
                onChange={handleCouponChange}
                onFocus={handleCouponFocus}
                placeholder="NIGHTOWL10"
                className="field"
              />
              <button
                type="button"
                onClick={() => setShowCouponText((v) => !v)}
                className="btn-glass shrink-0 text-xs"
              >
                {showCouponText ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <CheckoutForm
            details={details}
            onDetailsChange={onDetailsChange}
            status={status}
            disabled={order.length === 0}
            onSubmit={onSubmit}
          />
        </>
      )}
    </div>
  );
}
