import { ProductDetail, ProductCard } from "./product-card";
import { fetchProducts } from "@/app/lib/data";

export default async function ListOfProducts() {
  const products = await fetchProducts();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product, index) => (
        <ProductDetail key={index} product={product} />
      ))}
    </div>
  );
}

export const ProductList = async () => {
  const products = await fetchProducts();
  return (
    <div className="w-3/4 px-4">
      <div className="grid grid-cols-3 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};
