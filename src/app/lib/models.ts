export type Product = {
  id: string;
  name: string;
  description: string | null;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  categoryId: string | null;
  image: string | null;
} | null;

export type Products = Product[];
