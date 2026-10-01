// 📝 ASSIGNMENT: fill in TODO 7, TODO 8 and TODO 9 in this file
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { toggleTheme } from "../store/themeSlice";
import { clearCart } from "../store/cartSlice";
// TODO 7: import login and logout from "../store/userSlice"
import { login, logout } from "../store/userSlice";

export function Header() {
  const [name, setName] = useState("");
  const count = useSelector((state: RootState) => state.cart.items.length);
  const mode = useSelector((state: RootState) => state.theme.mode);

  // TODO 8: read the user from the store
  const user = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch<AppDispatch>();

  return (
    <header
      className={`flex items-center justify-between p-4 ${
        mode === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="font-bold">ShopLite</h1>

      <div className="flex items-center gap-4">
        {/*
          TODO 9: show different things depending on whether the user is logged in

          IF logged in (user.isLoggedIn is true):
            - show:   Welcome, {user.name}
            - show a  "Log out" button that dispatches logout()

          ELSE:
            - show a  "Log in" button that dispatches login("Ada")
              (you can use your own name!)
        */}
        {user.isLoggedIn ? (
          <>
            <span>Welcome, {user.name}</span>
            <button onClick={() => dispatch(logout())}>Log out</button>
          </>
        ) : (
          <>
            <input
              aria-label="Your name"
              placeholder="Your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <button onClick={() => dispatch(login(name))}>Log in</button>
          </>
        )}

        <span>🛒 {count}</span>
        <button onClick={() => dispatch(clearCart())}>Clear cart</button>

        <button onClick={() => dispatch(toggleTheme())}>
          {mode === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
    </header>
  );
}
