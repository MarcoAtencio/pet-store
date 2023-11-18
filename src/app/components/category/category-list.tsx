export default function CategoryList() {
  const categories = [
    "Accesorios",
    "Bandanas",
    "Blusas",
    "Camisas",
    "Casacas & Abrigos",
    "Chalecos",
    "Disfraces para Perros",
    "Gorros & Pelucas",
    "Lentes",
    "Medias",
    "Pijamas",
    "Poleras",
    "Polos",
    "Raincoats",
    "Sueters",
    "Vestidos",
  ];

  // Additional filtering options

  return (
    <div className="w-72">
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li
            key={index}
            className="cursor-pointer text-gray-800 hover:text-indigo-600 transition duration-300 ease-in-out"
          >
            <span className="text-base">{category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
