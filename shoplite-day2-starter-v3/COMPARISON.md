# 📝 Comparison: Custom Hook vs RTK Query

<!-- TODO (Part 6): answer each question below in your own words -->

## 1. Lines of code

How many lines did it take to load products with the `useProducts` hook (count `src/hooks/useProducts.ts`)?
How many lines did the RTK Query version take (your `getProducts` endpoint in `shopApi.ts` plus the hook call)?

**Answer:**
`src/hooks/useProducts.ts` contains **33 lines**, including its imports, header comment, and 6 blank lines. Excluding blank lines, it contains **27 lines**.

The RTK Query count is **5 lines**: `getProducts` occupies 4 lines in `shopApi.ts` (the endpoint declaration, `query`, `providesTags`, and closing line), and `useGetProductsQuery() hook` occupies 1 line in `ProductGrid.tsx`.


## 2. What RTK Query did for you

List at least three things you had to write by hand in `useProducts` that RTK Query handles for you.

**Answer:**

- **Response state:** `useProducts` creates `data` with `useState` and calls `setData(products)`. RTK Query stores each response in the Redux API cache. The grid reads `currentData` so it shows data for the currently selected query argument.

- **Loading state:** the old hook initializes `loading` to `true` and clears it in `finally`. RTK Query supplies `isLoading` and `isFetching`. The product grid derives its initial loading message from those flags and whether `currentData` exists, and uses `isFetching` for the later "Refreshing…" message.

- **Error state:** the old hook writes `try/catch`, a separate error state variable, and `setError`. RTK Query supplies the request's structured `error`; this grid still formats it into readable text, such as `Failed to load products (status 503)`.

- **Starting the request:** the old hook defines `load()` and invokes it inside `useEffect`. The RTK Query hook subscribes the grid to its endpoint and requests data when needed. Here, `skip` ensures that only the all-products query or the selected-category query runs.

- **Unmount bookkeeping:** the old hook sets an `ignore` flag during cleanup to suppress late state updates. RTK Query manages subscriptions and shared cache updates without those manual setters. Unsubscribing does not necessarily abort an in-flight request.

## 3. The cache test

Render `<ProductGrid category={category} />` twice in `App.tsx` and open the Network tab. How many `products` requests are sent? Now do the same with the old `useProducts` version. What's the difference, and why?

**Answer:**

With `category === null`, an empty cache, and two product grids sharing this project's Redux store, **RTK Query sends 1 `GET /products` request**. Both grids subscribe to `getProducts` with the same `undefined` argument, so they share one in-flight request and one cache entry. Two simultaneous endpoint subscriptions verified this count in memory (deduplication). If that response is already cached and no refetch is requested, mounting another grid sends **0 additional requests**.

With the old `useProducts`, **two grids send 2 requests in production**: each hook instance has separate state and runs its own effect, which calls the fetch helper. The hook has no shared cache or request deduplication.

The RTK Query grids share one category request instead of requesting `/products`; the old hook (useProducts) always requests all products.

## 4. Lazy vs normal queries

Why did `ProductDetails` use a **lazy** query instead of a normal one? What would the Network tab show when the page loads if every card used a normal `useGetProductByIdQuery`?

**Answer:**

`ProductDetails` uses `useLazyGetProductByIdQuery()` because details should load only after **View details** is clicked. Mounting a card does not start its detail request. Clicking calls `loadProduct(productId, true)`, `isFetching` displays "Loading…", and the returned `data.description` is then displayed.

The click handler checks `!data && !isFetching`, so clicking while the request is pending or after it succeeds does not start another request. The trigger's second argument, `true`, also prefers an existing cached response for that product ID. A failed request can be retried because it has no successful `data`.

With an empty cache and the original **20-product**, normal `useGetProductByIdQuery(productId)` hooks on every card would start **20 additional detail requests**, `/products/1` through `/products/20`, once the grid mounts its cards. There would be one detail request per distinct displayed product ID whose details are not cached.

## 5. Tags

In Part 4 (before tags), what happened to the product grid after you added a product? What changed after you added tags in Part 5? Explain what `providesTags` and `invalidatesTags` each do.

**Answer:**

Before Part 5, a successful `POST /products` saved the product and cleared the form, but **the grid kept its old cached list**. The mutation response did not automatically append the product to `getProducts`. Reloading the page created a fresh in-memory Redux cache and fetched the updated list from the API.

After Part 5, `tagTypes: ["Products"]` declares the tag, and both `getProducts` and `getProductsByCategory` use `providesTags: ["Products"]` to associate their cached query results with it. Providing a tag labels a cache entry; it does not itself change the server's data.

`addProduct` uses `invalidatesTags: (_result, error) => error ? [] : ["Products"]`. A successful save invalidates that tag, so queries providing it with active subscriptions automatically fetch again. Inactive entries are removed instead of immediately refetched. A failed save returns no tags and does not invalidate the list.

With **All** selected, the request sequence is `POST /products`, then an automatic `GET /products`. While that GET runs, the grid keeps its existing products visible and shows "Refreshing…". When it completes, the new product appears. With a category selected, the active category endpoint refetches instead; the new product appears there only if it belongs to that category. No manual `refetch()` or page refresh is used.


## 6. Your choice

If you were building a real shop, which approach would you use to load products, and why? Is there any case where you'd still write a custom hook?

**Answer:**
I would use **RTK Query** because Product queries can share cached results across product grids, cache each category separately, and fetch details only when requested. The add-product mutation can invalidate the list tags so the catalog updates after a save. Wwhile a normal `useProducts` hook provides none of that shared caching or automatic mutation-driven refresh.

I would use a custom hooks for reusable UI behavior, such as the add-product form's input state, or a hook that wraps RTK Query and derives display values from its results. For a small app without Redux and with one isolated request that does not need a shared cache, a fetch hook could be sufficient. I would then need to implement its loading/error handling and cleanup, and add caching or deduplication myself if those requirements appeared.
