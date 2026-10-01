# 🛒 ShopLite: Week 4 · Day 1 Assignment Starter

This project is provided as a **starter** and a **reference**. It already has a working cart, a light/dark theme, and middleware set up with Redux Toolkit.

- **As a starter:** your job is to add a **`user` slice** so people can log in and out.
- **As a reference:** the finished files show you how slices, the store, `useSelector`, `useDispatch` and middleware fit together. Read them and copy their patterns.

---

## 1. What you need

- **Node.js 20 or newer.** Check with:
  ```bash
  node -v
  ```
  If it says `v18` or lower (or "command not found"), install the **LTS** version from https://nodejs.org
- **VS Code** (or any code editor)

---

## 2. How to run it

1. **Unzip** the folder somewhere easy to find (for example, your Desktop).
2. Open the folder in **VS Code**: *File → Open Folder… → `shoplite-starter`*
3. Open the terminal in VS Code: *Terminal → New Terminal*
4. Install the packages (only needed **once**):
   ```bash
   npm install
   ```
5. Start the app:
   ```bash
   npm run dev
   ```
6. Open the link it prints (usually **http://localhost:5173**) in your browser.

You should see the **ShopLite** header and an **Add backpack** button. Click it and the 🛒 count goes up. 🎉

---

## 3. Your task

Add a `user` slice and show the user in the Header.

**Logged out:**
```
ShopLite                         [ Log in ]   🛒 2   🌙 Dark
```

**Logged in:**
```
ShopLite           Welcome, Ada  [ Log out ]  🛒 2   🌙 Dark
```

You'll be working in these files. Each one has `// TODO` comments showing where your code goes:

- `src/store/userSlice.ts`
- `src/store/index.ts`
- `src/components/Header.tsx`

The other files are provided as a reference. You don't need to change them.

> 💡 In `userSlice.ts`, `state` and `action` may look faded (or show an "unused" warning if you run `npm run lint`). That's expected. It goes away once you fill in TODO 1 and 2.

---

## 4. Test your work

- The app loads with no red errors in the browser console (**F12 → Console**)
- At first, the Header shows a **Log in** button
- Clicking **Log in** shows **"Welcome, Ada"** and a **Log out** button
- Clicking **Log out** goes back to showing **Log in**
- The 🛒 count still works when you're logged in **and** logged out
- In the browser **Console**, the logger shows `user/login` and `user/logout` actions, with `user` inside the state

> 💡 The console gets busy because the **logger middleware** prints every action. That's normal. It's how you can see your actions working.

Also run this in the terminal. It should finish with **no errors**:
```bash
npm run build
```

---

## 5. Stuck? Common problems

| Problem | Likely cause |
|---------|--------------|
| `npm: command not found` | Node.js isn't installed. See step 1 |
| `npm run dev` says *"Missing script"* | You're in the wrong folder. Make sure the terminal is **inside** `shoplite-starter` (run `ls` and you should see `package.json`) |
| `Cannot read properties of undefined (reading 'isLoggedIn')` | You forgot **TODO 6**: `user` isn't in the store yet |
| Clicking **Log out** does nothing | You wrote `state = initialState` instead of `return initialState` (**TODO 3**) |
| `does not provide an export named 'login'` | You forgot **TODO 4**: exporting the actions |
| Clicking **Log in** does nothing | Check you wrote `dispatch(login("Ada"))`, not `dispatch(login)` |
| The cart still has items from before | That's the `saveCart` middleware doing its job! To reset it, open **F12 → Application → Local Storage** and delete `cart` |

---

## 6. ⭐ Stretch goals (optional)

1. Add a **Clear cart** button to the Header. The `clearCart` action already exists in `cartSlice.ts`.
2. Replace `login("Ada")` with a small text input, so the user can type their own name before clicking **Log in**.
   *(Hint: use `useState` for the input, then `dispatch(login(name))`.)*

---

## 7. Optional: Redux DevTools

This is **not required** for the assignment, but it's a nice way to see what's happening inside your store.

1. Install the **Redux DevTools** extension for Chrome or Edge from your browser's extension store.
2. Open your app, press **F12**, and click the **Redux** tab.
3. You'll see every action (`cart/addItem`, `user/login`, …) and the whole state tree (`cart`, `theme`, `user`).

---

## 8. Submitting

1. Make sure everything in **Test your work** passes.
2. Take a screenshot of the app **logged in**.
3. Submit these 3 files: `userSlice.ts`, `store/index.ts` and `Header.tsx`, plus your screenshot.

> ⚠️ **Don't** submit the `node_modules` folder. It's huge, and anyone can recreate it with `npm install`.

Good luck! 🚀
