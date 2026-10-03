# 🛒 ShopLite: Week 4 · Day 2 Assignment Starter

This project is provided as a **starter** and a **reference**. It already loads real products from the [Fake Store API](https://fakestoreapi.com) using a custom hook (`useProducts`), and loads categories using **RTK Query**.

- **As a starter:** your job is to switch the product grid from the custom hook to **RTK Query**, then compare the two approaches.
- **As a reference:** the finished files show you how the Data Layer (`fetch`, a custom hook, RTK Query) connects to the store and the components.

---

## 1. What you need

- **Node.js 20 or newer.** Check with:
  ```bash
  node -v
  ```
  If it says `v18` or lower (or "command not found"), install the **LTS** version from https://nodejs.org
- **VS Code** (or any code editor)
- **An internet connection.** The app loads its data from https://fakestoreapi.com

---

## 2. How to run it

1. **Unzip** the folder somewhere easy to find (for example, your Desktop).
2. Open the folder in **VS Code**: *File → Open Folder… → `shoplite-day2-starter`*
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

You should see the **ShopLite** header, a row of categories, and a grid of products. Click **Add to cart** and the 🛒 count goes up.

---

## 3. Your task

Load the products with **RTK Query** instead of the `useProducts` custom hook. The page should look and work **exactly the same** when you're done.

You'll be working in these files. Each one has `// TODO` comments showing where your work goes:

- `src/api/shopApi.ts`
- `src/components/ProductGrid.tsx`
- `COMPARISON.md`

The other files are provided as a reference. **Don't delete `src/hooks/useProducts.ts`**, because you need it for the comparison.

---

## 4. Test your work

- The page shows the categories **and** the products, with no red errors in the browser console (**F12 → Console**)
- **Add to cart** still increases the 🛒 count
- While the products are loading, you see a loading message. *(Try it: F12 → Network → change **No throttling** to **Slow 4G**, then refresh.)*
- If the products URL is wrong, you see an error message instead of a blank page. *(Try it, then change it back.)*
- In the **Network** tab, the products now come from RTK Query: two `<ProductGrid />`s on the page send **only one** `products` request
- Every question in `COMPARISON.md` is answered

> 💡 The console gets busy because the **logger middleware** prints every action, including RTK Query's own actions (they start with `shopApi/`). That's normal.

Also run this in the terminal. It should finish with **no errors**:
```bash
npm run build
```

---

## 5. Stuck? Common problems

| Problem | Likely cause |
|---------|--------------|
| `npm: command not found` | Node.js isn't installed. See step 1 |
| `npm run dev` says *"Missing script"* | You're in the wrong folder. Make sure the terminal is **inside** `shoplite-day2-starter` (run `ls` and you should see `package.json`) |
| Products and categories never load | Check your internet connection, then open https://fakestoreapi.com/products in the browser |
| `does not provide an export named 'useGetProductsQuery'` | The hook isn't exported from `shopApi.ts` (**TODO 2**) |
| `Cannot find name 'Product'` | You used the `Product` type without importing it |
| `Cannot read properties of undefined (reading 'map')` | `data` is `undefined` until the answer arrives |
| The loading or error message never shows | RTK Query's hook doesn't use the same names as `useProducts`. Check what the hook returns |
| The cart still has items from before | That's the `saveCart` middleware doing its job! To reset it, open **F12 → Application → Local Storage** and delete `cart` |

---

## 6. ⭐ Stretch goals (optional)

1. Add a `getProductsByCategory` endpoint (`GET /products/category/{name}`). Make the category chips clickable so clicking one shows only the products in that category.
2. Show a small **"Refreshing…"** message while RTK Query is fetching in the background, even when products are already on screen.

---

## 7. Optional: Redux DevTools

This is **not required** for the assignment, but it's a nice way to see what's happening inside your store.

1. Install the **Redux DevTools** extension for Chrome or Edge from your browser's extension store.
2. Open your app, press **F12**, and click the **Redux** tab.
3. You'll see RTK Query's actions and the cache under `shopApi` in the state tree.

---

## 8. Submitting

1. Make sure everything in **Test your work** passes.
2. Take a screenshot of the app showing the products.
3. Submit these 3 files: `shopApi.ts`, `ProductGrid.tsx` and `COMPARISON.md`, plus your screenshot.

> ⚠️ **Don't** submit the `node_modules` folder. It's huge, and anyone can recreate it with `npm install`.

Good luck! 🚀
