import Image from "next/image";
import { fetchProductById } from "@/app/lib/data";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const product = await fetchProductById(id);
  const imageUrl = product?.image
    ? product.image
    : "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="flex items-center justify-center bg-gray-100 py-10">
      <div className="max-w-screen-xl mx-auto bg-white p-10 rounded-lg shadow-lg md:flex space-x-10">
        <div className="md:w-3/5">
          <Image
            src={imageUrl}
            alt="Product Image"
            className="w-full h-80 object-contain rounded-lg"
            width={500}
            height={700}
          />
        </div>
        <div className="md:w-2/5 sm:mt-5">
          <h1 className="text-3xl font-extrabold mb-4 text-gray-900">
            Product Name
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Product description goes here.
          </p>
          <p className="text-blue-600 text-lg mb-4">Price: $99.99</p>
          <p className="text-green-600 text-lg mb-4">Availability: In Stock</p>
          <p className="text-gray-700 text-lg mb-4">Brand: ABC Brand</p>
          <div className="flex items-center mb-6">
            <label className="mr-4 text-gray-900">Quantity:</label>
            <input
              type="number"
              className="border rounded-lg p-2 w-20 shadow-sm"
              value="1"
            />
          </div>
          <div className="flex items-center mb-6">
            <label className="mr-4 text-gray-900">Size:</label>
            <select className="border rounded-lg p-2 w-32 shadow-sm">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
