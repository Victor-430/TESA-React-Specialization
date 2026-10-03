// 📝 ASSIGNMENT: Parts 1–5
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { NewProduct, Product } from "../types";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  // TODO (Part 5): list the tag types this API uses
  tagTypes: ["Products"],

  endpoints: (builder) => ({
    getCategories: builder.query<string[], void>({
      query: () => "/products/categories",
    }),

    // TODO (Part 1): getProducts: all products
     getProducts: builder.query<Product[], void>({
      query: () => "/products",
      providesTags: ["Products"],
    }),
    
    // TODO (Part 2): getProductsByCategory: the products in one category
       getProductsByCategory: builder.query<Product[], string>({
      query: (category) => `/products/category/${encodeURIComponent(category)}`,
      providesTags: ["Products"],
    }),
    // TODO (Part 3): getProductById: one product
    getProductById: builder.query<Product, number>({
      query: (id) => `/products/${id}` ,
  }),
    // TODO (Part 4): addProduct: create a new product
    addProduct: builder.mutation<Product, NewProduct>({
      query: (newProduct) => ({
        url: "/products",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: (_result, error) => error ? [] : ["Products"],
    })
  }),
});

// TODO: export the hooks RTK Query generates for your endpoints
export const { useGetCategoriesQuery, useGetProductsQuery, useGetProductsByCategoryQuery, useGetProductByIdQuery, useLazyGetProductByIdQuery, useAddProductMutation } = shopApi;
