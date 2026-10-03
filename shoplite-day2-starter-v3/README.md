# 🛒 ShopLite: Week 4 · Day 2 Assignment (RTK Query)

This project is provided as a **starter** and a **reference**. It comes with its **own small API** that runs on your computer, so it doesn't depend on any outside website. The app already loads products from it using a custom hook (`useProducts`), and loads categories using **RTK Query**.

- **As a starter:** your job is to move the app's data loading to **RTK Query**, then use it to filter, load details on demand, add products, and keep the list up to date with tags.
- **As a reference:** the finished files show you how the Data Layer (`fetch`, a custom hook, RTK Query) connects to the store and the components.

---

## 1. What you need

- **Node.js 20 or newer.** Check with:
  ```bash
  node -v
  ```
  If it says `v18` or lower (or "command not found"), install the **LTS** version from https://nodejs.org
- **VS Code** (or any code editor)
- **Two terminals** in VS Code: one for the API, one for the app

---

## 2. How to run it

1. **Unzip** the folder somewhere easy to find (for example, your Desktop).
2. Open the folder in **VS Code**: *File → Open Folder… → `shoplite-day2-starter-v3`*
3. Open the terminal in VS Code: *Terminal → New Terminal*
4. Install the packages (only needed **once**):
   ```bash
   npm install
   ```
5. Start the **API** (leave this terminal running):
   ```bash
   npm run api
   ```
   It serves the shop's data at **http://localhost:3001**. Open http://localhost:3001/products in your browser to see the raw JSON.
6. Open a **second terminal** (*Terminal → New Terminal*, or the **+** button in the terminal panel) and start the **app**:
   ```bash
   npm run dev
   ```
7. Open the link it prints (usually **http://localhost:5173**) in your browser.

You should see the **ShopLite** header, an "Add product" form, a row of categories, and a grid of products.

> 💡 **Both must be running.** The app (port 5173) is the website. The API (port 3001) is the server it gets its data from. The API waits half a second before answering each request, so you can see the loading messages.

### The API

The API's data lives in `server/db.json`. It answers the same paths as Fake Store API:

| Endpoint | Returns |
|----------|---------|
| `GET /products` | All products |
| `GET /products/1` | One product |
| `GET /products/categories` | All category names |
| `GET /products/category/electronics` | Products in one category |
| `POST /products` | Saves a new product and sends it back with its new `id` |

New products are **really saved** into `server/db.json`. To put the shop back to its original 20 products, run:

```bash
npm run api:reset
```

---

## 3. Your task

Work through the five parts **in order**. Each part builds on the one before. Every file you need to change starts with **📝 ASSIGNMENT** and has `// TODO` comments marked with the part number.

You'll be working in these files:

- `src/api/shopApi.ts`
- `src/components/ProductGrid.tsx`
- `src/components/CategoryList.tsx`
- `src/components/ProductDetails.tsx`
- `src/components/AddProductForm.tsx`
- `COMPARISON.md`

The other files are provided as a reference. **Don't delete `src/hooks/useProducts.ts`**, because you need it for the comparison.

> 💡 Until you finish the TODOs, some props like `category` and `productId` look faded, or show an "unused" warning if you run `npm run lint`. That's expected.

### Part 1: Load the products with RTK Query

Add a `getProducts` endpoint and use its hook in `ProductGrid` instead of `useProducts`. The page should look and work **exactly the same** as before, including the loading and error messages.

### Part 2: Filter by category

Add a `getProductsByCategory` endpoint (`GET /products/category/{name}`).

- Clicking a category chip shows **only** the products in that category.
- An **All** chip shows every product again.
- The selected chip looks **different** from the others.

The selected category is already stored in `App.tsx` and passed to both `CategoryList` and `ProductGrid` as props.

> Category names contain spaces and apostrophes, like `men's clothing`.

### Part 3: Product details with a lazy query

Each product card has a **View details** button. Add a `getProductById` endpoint, and use its **lazy** hook in `ProductDetails` so that:

- **nothing is fetched** until the button is clicked
- "Loading…" shows while the details load
- the product's **description** appears once it arrives
- clicking the button **again** doesn't send another request

> A normal query hook fetches as soon as the component appears. With 20 cards, that would be 20 requests before anyone clicks anything. A **lazy** query hook gives you a function to call when *you* decide.

### Part 4: Add a product with a mutation

Add an `addProduct` endpoint that sends a `POST` to `/products`, and use it in `AddProductForm`:

- Submitting the form saves the new product to the API. The `price` must be a **number**, and the image should be `"/images/placeholder.svg"`.
- The button shows **"Saving…"** while the request is in progress.
- The form **clears** after the product is saved.

The `NewProduct` type in `src/types.ts` describes a product that hasn't been saved yet (no `id`).

**Before moving on:** add a product and look at the grid. **Does the new product appear?** Note what happens, then refresh the page. You'll need this for `COMPARISON.md`.

### Part 5: Keep the list up to date with tags

Use RTK Query's **tags** so that adding a product **automatically** refreshes the product list. No page refresh, and no manual `refetch()`.

- Declare a tag type on the API.
- Mark the product list endpoints as **providing** that tag.
- Mark `addProduct` as **invalidating** that tag.
- While the list is being fetched again, `ProductGrid` shows a small **"Refreshing…"** message above the products.

> **Tags in one sentence:** queries *provide* a tag ("my data is about Products"), and mutations *invalidate* it ("Products just changed"). When a tag is invalidated, every query that provides it fetches again.

### Part 6: `COMPARISON.md`

Answer every question in `COMPARISON.md` in your own words, using what you actually saw in the browser and the Network tab.

---

## 4. Test your work

**Part 1**
- The page shows the categories and the products, with no red errors in the browser console (**F12 → Console**)
- **Add to cart** still increases the 🛒 count
- While the products load, you see a loading message
- If the API isn't running, you see an error message instead of a blank page *(stop the API with **Ctrl + C**, refresh, then start it again with `npm run api`)*
- With two `<ProductGrid category={category} />`s in `App.tsx`, the **Network** tab shows **only one** `products` request

**Part 2**
- Clicking **jewelery** shows 5 products. Clicking **men's clothing** shows 5 products. **All** shows 20
- The selected chip is highlighted
- Going back to a category you opened less than a minute ago shows its products **instantly**, with no new request in the Network tab

**Part 3**
- The Network tab shows **no** `products/1`, `products/2`… requests until you click **View details**
- Clicking shows "Loading…", then the description
- Clicking the same card's button again sends **no** new request

**Part 4**
- Adding a product shows "Saving…", then clears the form
- The new product is in http://localhost:3001/products

**Part 5**
- After adding a product, it appears in the grid **by itself**, without refreshing the page
- "Refreshing…" shows briefly while the list reloads
- In the Network tab, you see the `POST /products` followed by a new `GET /products`

Also run this in the terminal. It should finish with **no errors**:
```bash
npm run build
```

> 💡 The console gets busy because the **logger middleware** prints every action, including RTK Query's own actions (they start with `shopApi/`). That's normal.

---

## 5. Optional: Redux DevTools

This is **not required** for the assignment, but it's a nice way to see what's happening inside your store.

1. Install the **Redux DevTools** extension for Chrome or Edge from your browser's extension store.
2. Open your app, press **F12**, and click the **Redux** tab.
3. You'll see RTK Query's actions, and the cache under `shopApi` in the state tree. Watch the cache entries appear as you click categories and **View details**.

---

## 6. Submitting

1. Make sure everything in **Test your work** passes.
2. Take two screenshots and save them in a new folder called `screenshots` inside the project:
   - the app with a **category selected** and one product's **details** showing
   - the **Network** tab right after adding a product, showing the `POST` followed by the automatic `GET`
3. Stop the app and the API (**Ctrl + C** in both terminals).
4. **Delete the `node_modules` folder.** It's huge, and anyone can recreate it with `npm install`. (Also delete the `dist` folder if you have one.)
5. **Zip the whole project folder:**
   - **Windows:** right-click the folder → **Compress to ZIP file** (or **Send to → Compressed (zipped) folder**)
   - **Mac:** right-click the folder → **Compress**
6. Submit the **zip file**.

Good luck! 🚀
