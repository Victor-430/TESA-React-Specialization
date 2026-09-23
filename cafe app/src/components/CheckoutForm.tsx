import type { ChangeEvent, SubmitEvent } from "react";
import type { CheckoutDetails, CheckoutFormProps, OrderStatus } from "../types";

export default function CheckoutForm({
  details,
  onDetailsChange,
  status,
  disabled,
  onSubmit,
}: CheckoutFormProps) {
  const handleSubmit = (e: SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSubmit();
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onDetailsChange({ ...details, name: e.currentTarget.value });
  };

  const handleSizeChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    onDetailsChange({
      ...details,
      size: e.currentTarget.value as CheckoutDetails["size"],
    });
  };

  const handleNotesChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    onDetailsChange({ ...details, notes: e.currentTarget.value });
  };

  const nameIsEmpty = details.name.trim().length === 0;

  // 1. Easier to read and maintain than a ternary operator, especially when there are multiple cases to handle.
  // 2. Can be reused in multiple places if needed, promoting code reusability and reducing duplication.
  const getStatusMessage = (status: OrderStatus): string | null => {
    switch (status) {
      case "loading":
        return "Placing order...";
      case "error":
        return "Order failed, try again";
      case "success":
        return "Order placed";
      default:
        return null;
    }
  };

  const statusTone =
    status === "loading"
      ? "text-muted"
      : status === "error"
        ? "text-danger"
        : "text-success";

  return (
    <form
      onSubmit={handleSubmit}
      className="border-border mt-5 space-y-3 border-t pt-5"
    >
      <div>
        <label htmlFor="name" className="text-muted mb-1 block text-xs">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={details.name}
          onChange={handleNameChange}
          placeholder="Your name"
          className="field"
        />
      </div>

      <div>
        <label htmlFor="size" className="text-muted mb-1 block text-xs">
          Size
        </label>
        <select
          id="size"
          name="size"
          value={details.size}
          onChange={handleSizeChange}
          className="field appearance-none"
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>

      <div>
        <label htmlFor="notes" className="text-muted mb-1 block text-xs">
          Notes for barista
        </label>
        <textarea
          id="notes"
          name="notes"
          value={details.notes}
          onChange={handleNotesChange}
          placeholder="Oat milk, extra hot, etc."
          rows={2}
          className="field resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={disabled || nameIsEmpty || status === "loading"}
        className="btn-glass-accent w-full"
      >
        {nameIsEmpty ? "Enter your name" : "Place order"}
      </button>

      {status !== "idle" ? (
        <p className={`text-center text-sm ${statusTone}`}>
          {getStatusMessage(status)}
        </p>
      ) : null}
    </form>
  );
}
