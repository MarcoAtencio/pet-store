import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-300 pt-8 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
        <div className="p-4">
          <Image
            src="https://inventario-petuniverse.s3.amazonaws.com/logo_pet_qakZNdk.png"
            alt="logo"
            width={200}
            height={200}
          />
          <p className="text-base text-gray-700">
            Cachorritos - Síguenos en redes sociales para mantenerte al día
            sobre las últimas tendencias y promociones para tu elegante perrito.
          </p>
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">Tienda</h2>
          <ul>
            <li className="mb-2">
              <Link
                href={""}
                className="text-blue-500 hover:underline transition-colors duration-300"
              >
                Suéteres Cómodos para Perros
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href={""}
                className="text-blue-500 hover:underline transition-colors duration-300"
              >
                Collares Elegantes para Perros
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href={""}
                className="text-blue-500 hover:underline transition-colors duration-300"
              >
                Vestidos Lindos para Perros
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href={""}
                className="text-blue-500 hover:underline transition-colors duration-300"
              >
                Accesorios de Moda para Perros
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">
            Acerca de Nosotros
          </h2>
          <p className="mb-2 text-gray-700">
            Somos una tienda de mascotas dedicada a proporcionar productos y
            servicios de alta calidad para el bienestar de tus amigos peludos.
          </p>
          <p className="mb-2 text-gray-700">
            Nuestro objetivo es ofrecerte una experiencia de compra única y
            satisfactoria, donde puedas encontrar todo lo que necesitas para la
            felicidad de tus mascotas.
          </p>
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">
            Contáctanos
          </h2>
          <p className="mb-2 text-gray-700">
            Correo electrónico:{" "}
            <a
              href="mailto:info@puppycouture.com"
              className="text-blue-500 hover:underline transition-colors duration-300"
            >
              info@puppycouture.com
            </a>
          </p>
          <p className="mb-2 text-gray-700">
            Teléfono:{" "}
            <a
              href="tel:+1234567890"
              className="text-blue-500 hover:underline transition-colors duration-300"
            >
              +1 (234) 567-890
            </a>
          </p>
          <p className="mb-2 text-gray-700">
            WhatsApp:{" "}
            <a
              href="https://wa.me/1234567890" // Reemplaza con el enlace de WhatsApp deseado
              className="text-green-500 hover:underline transition-colors duration-300"
            >
              +1 (234) 567-890
            </a>
          </p>
        </div>
      </div>
      <CopyrightSection />
    </footer>
  );
}

const CopyrightSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-neutral-500 py-4">
      <p className="text-base text-white text-center">
        &copy; {currentYear} Perritos - El Estilo Perfecto para Tu Mascota
      </p>
    </div>
  );
};
