import Link from "next/link";

export const BreadCrumb = ({ items }: { items: string[] }) => {
  return (
    <div className="mt-7">
      <nav className="text-base" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <Link
                href="/" // Reemplaza con la URL correspondiente
                className="text-white hover:text-gray-700 transition duration-300"
              >
                {item}
              </Link>
              {index !== items.length - 1 && (
                <span className="text-gray-100">&nbsp;/&nbsp;</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};
