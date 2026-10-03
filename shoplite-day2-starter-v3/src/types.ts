export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

// A product that hasn't been saved yet: the API gives it an id when it's created
export type NewProduct = Omit<Product, "id">;
