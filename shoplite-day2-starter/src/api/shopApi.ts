// 📝 ASSIGNMENT: fill in TODO 1 and TODO 2 in this file
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product } from "../types";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getCategories: builder.query<string[], void>({
      query: () => "/products/categories",
    }),

    // TODO 1: add a getProducts endpoint that returns all products
    getProducts: builder.query<Product[], void>({
      query: () => "/products",
    }),
    
    getProductsByCategory: builder.query<Product[], string>({
      query: (category) => `/products/category/${encodeURIComponent(category)}`,
    }),
  }),
});

// TODO 2: export the hook RTK Query generates for getProducts
export const { useGetProductsQuery } = shopApi;
export const { useGetProductsByCategoryQuery } = shopApi;
export const { useGetCategoriesQuery } = shopApi;
