// ✅ PROVIDED: part of the starter. You don't need to change this file, but use it as a reference.
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { addItem } from "../store/cartSlice";

const backpack = {
  id: 1,
  title: "Backpack",
  price: 15000,
  description: "",
  category: "bags",
  image: "",
};

export function CartButton() {
  const count = useSelector((state: RootState) => state.cart.items.length);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <button
      onClick={() => dispatch(addItem(backpack))}
      className="rounded bg-blue-600 px-4 py-2 text-white"
    >
      Add backpack ({count})
    </button>
  );
}
