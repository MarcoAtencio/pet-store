import { unstable_noStore as noStore } from "next/cache";
import { db } from "@/app/services/db";
import { redirect } from "next/navigation";
import type { Products, Product } from "@/app/lib/models";

export async function fetchProducts(): Promise<Products> {
  noStore();
  try {
    const products: Products = await db.product.findMany();
    console.log("Products", { products });
    return products;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function fetchProductById(id: string): Promise<Product> {
  noStore();
  try {
    const product = await db.product.findUnique({
      where: { id },
    });
    console.log("Product", { product });
    if (!product) throw new Error("Product not found");
    return product;
  } catch (error) {
    console.error("Database Error:", error);
    redirect("/");
  }
}
