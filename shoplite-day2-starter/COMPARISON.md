# 📝 Comparison: Custom Hook vs RTK Query

<!-- TODO 5: answer each question below in your own words -->

## 1. Lines of code

How many lines did it take to load products with the `useProducts` hook (count `src/hooks/useProducts.ts`)?
How many lines did the RTK Query version take (your new endpoint in `shopApi.ts` plus the hook call)?

**Answer:**

`src/hooks/useProducts.ts` contains **33 physical lines**, including blank lines and the provided header comment. Excluding blank lines, it contains **27 lines**. 

The RTK Query count is **4 lines**: the `getProducts` endpoint occupies 3 lines in `shopApi.ts`, and the `useGetProductsQuery()` call occupies 1 line in `ProductGrid.tsx`. These define a `Product[]` response, request `/products`, and read the result with `data = []`, `isLoading`, and `error`. The count excludes imports, the generated-hook export, existing API/store setup.


## 2. What RTK Query did for you

List at least three things you had to write by hand in `useProducts` that RTK Query handles for you.

**Answer:**

- **Response state:** the old hook creates `data` with `useState` and calls `setData(products)`. RTK Query stores the response in the existing Redux API cache and returns it as `data`.

- **Loading state:** the old hook initializes `loading` to `true` and calls `setLoading(false)` in `finally`. RTK Query exposes `isLoading`, which the product grid aliases to `loading`.

- **Error state:** the old hook uses `try/catch`, `setError`, and a separate error state variable. RTK Query supplies a structured `error`. This implementation still converts that object into readable text for the existing error paragraph.

- **Starting the request:** the old hook defines `load()` and invokes it inside `useEffect`. Calling `useGetProductsQuery()` subscribes the product grid to the endpoint and starts a request when needed.

- **Unmount bookkeeping:** the old hook sets an `ignore` flag during cleanup to prevent late responses from updating an unmounted component. RTK Query manages the component's subscription and updates the shared cache without those manual component-state setters. This does not mean every unmount cancels the HTTP request.

## 3. The cache test

Render `<ProductGrid />` twice in `App.tsx` and open the Network tab. How many `products` requests are sent? Now do the same with the old `useProducts` version. What's the difference, and why?

**Answer:**

For two freshly mounted product grids sharing this project's Redux store, with an empty products cache and the current default query options, **RTK Query sends 1 `GET /products` request through request deduplication**. Both grids call the same `getProducts` endpoint with no arguments, so RTK Query shares one in-flight request and one cache entry between them instead of fetching twice. The in-memory check verified that two simultaneous endpoint subscriptions produced exactly one fetch call. If the products are already cached and no refetch is requested, another grid can reuse them without a new request; that is cache reuse.

With the old `useProducts`, **two grids send 2 requests in production**: each instance owns its own state and runs its own `useEffect`, which calls `getProducts()`. There is no shared response cache or request deduplication in that hook.

Due to **development build, there was 4 requests from the old hook** on a fresh mount of two grids because `src/main.tsx` wraps the app in React `StrictMode`. React runs each effect's setup, cleanup, and setup again during initial development mounting. The `ignore` cleanup only suppresses late state updates; it does not abort either fetch. RTK Query still shares the products request across subscriptions with this setup.


## 4. Your choice

If you were building a real shop, which approach would you use to load products, and why? Is there any case where you'd still write a custom hook?

**Answer:**

I would use **RTK Query for this shop's product catalog**. ShopLite already has a Redux store with `shopApi.reducer` and `shopApi.middleware`, and categories already use RTK Query. Loading products through the same API layer gives components a shared cached catalog, avoids duplicate requests when two product grids need the same products, and removes the hook's manual request lifecycle and state management. 

I would still write a custom hook for reusable UI behavior, such as form input state or deriving a display list from already-loaded products. For an isolated fetch in a small application without Redux or any need to share/cache the result, a hook like `useProducts` could also be sufficient. In that case, I would accept responsibility for its loading/error state and cleanup; although the hook (useProducts) does not provide shared caching or request deduplication.
