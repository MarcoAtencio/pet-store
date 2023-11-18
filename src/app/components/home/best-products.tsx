import ListOfProducts from "../product/list-products";

export default function BestProducts() {
  return (
    <section className="h-full px-10 py-16">
      <h2 className="text-3xl font-bold mb-10">Productos destacados</h2>
      <ListOfProducts />
    </section>
  );
}
