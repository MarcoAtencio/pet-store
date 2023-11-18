import { ProductList } from "../ui/product/list-products";
import CategoryList from "../ui/category/category-list";

export default function Page() {
  return (
    <div className="px-10">
      <div className="w-full flex justify-between my-6">
        <h2 className="text-xl font-bold ">Filtrar por</h2>
        <div className="relative">
          <select
            name="Ordenar por los ultimos"
            id="ordenarPor"
            className="block appearance-none w-full border border-gray-300 py-2 pl-3 pr-10 rounded-md text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          >
            <option value="1">Ordenar por los ultimos</option>
            <option value="2">Ordenar por los ultimos</option>
            <option value="3">Ordenar por los ultimos</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M9.293 13.293a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L10 11.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 000 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex">
        <CategoryList />
        <ProductList />
      </div>
    </div>
  );
}
