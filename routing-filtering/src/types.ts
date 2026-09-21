export type Product = {
  id: number;
  title: string;
  price: number;
  category: "Electronics" | "Clothing" | "Books" | "Home" | "Sports";
  rating: number;
  inStock: boolean;
  image: string;
  description: string;
};

export const categories = [
  "Electronics",
  "Clothing",
  "Books",
  "Home",
  "Sports",
] as const;