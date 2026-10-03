// 📝 ASSIGNMENT: Part 4
import { useState, type FormEvent } from "react";
import { useAddProductMutation, useGetCategoriesQuery } from "../api/shopApi";

export function AddProductForm() {
  const { data: categories } = useGetCategoriesQuery();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("electronics");
  const [description, setDescription] = useState("");

  // TODO (Part 4): get the function that adds a product, and whether it's still saving
  const [addProduct, { isLoading: isSaving, error }] = useAddProductMutation();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO (Part 4): send the new product to the API
    //   - the price must be a number, not text
    //   - use "/images/placeholder.svg" as the image
    // TODO (Part 4): clear the form once the product is saved
    if (isSaving) return;
    try {
      await addProduct({
        title,
        price: Number(price),
        category,
        description,
        image: "/images/placeholder.svg",
      }).unwrap();
      setTitle("");
      setPrice("");
      setCategory("electronics");
      setDescription("");
    } catch {
      // The mutation's error state displays the failure; keep the inputs for retry.
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-6 mt-6 grid gap-2 rounded border border-gray-200 bg-white p-4 md:grid-cols-5">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Product name"
        required
        className="rounded border px-2 py-1"
      />
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        type="number"
        step="0.01"
        min="0"
        required
        className="rounded border px-2 py-1"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="rounded border px-2 py-1 capitalize"
      >
        {categories?.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="rounded border px-2 py-1"
      />
      <button type="submit" disabled={isSaving} className="rounded bg-green-600 px-3 py-1 text-white">
        {isSaving ? "Saving…" : "Add product"}
      </button>
      {error && <p className="text-red-600 md:col-span-5" role="alert">Could not save product. Please try again.</p>}
    </form>
  );
}
