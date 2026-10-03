// ✅ PROVIDED: part of the starter. You don't need to change this file, but use it as a reference.
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { toggleTheme } from "../store/themeSlice";

export function Header() {
  const count = useSelector((state: RootState) => state.cart.items.length);
  const mode = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <header
      className={`flex items-center justify-between p-4 ${
        mode === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="font-bold">ShopLite</h1>
      <div className="flex items-center gap-4">
        <span>🛒 {count}</span>
        <button onClick={() => dispatch(toggleTheme())}>
          {mode === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </header>
  );
}
