import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/app/lib/models';

export const ProductDetail = ({ product }: { product: Product }) => {
  const imageUrl = product?.image
    ? product.image
    : 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <Link href={`/products/${product?.id}`}>
      <div className='bg-white shadow-sm rounded-sm w-full overflow-hidden'>
        <div className='relative'>
          <Image
            src={imageUrl}
            alt={product?.name || ''}
            className='w-full h-full object-cover'
            width={500}
            height={700}
          />
          <div className='absolute inset-0 bg-black opacity-0 hover:opacity-80 transition-opacity flex items-center justify-center'>
            <div className='text-white text-center'>
              <h2 className='text-lg font-semibold'>{product?.name}</h2>
              <p className='text-sm text-red-500 line-through'>
                {product?.price}
              </p>
              <p className='text-sm text-green-500'>{product?.price}</p>
              <button className='mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg'>
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const ProductCard = ({ product }: { product: Product }) => {
  const imageUrl = product?.image
    ? product.image
    : 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  return (
    <div className='bg-white'>
      <div className='relative aspect-w-3 aspect-h-4'>
        <Image
          src={imageUrl}
          alt={product?.name || 'Product Image'}
          objectFit='cover'
          className='rounded-t-md'
          width={500}
          height={700}
        />
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-semibold mb-2'>{product?.name}</h3>
        <p className='text-gray-600 mb-4'>{product?.description}</p>
        {/* Otros detalles del producto si es necesario */}
      </div>
    </div>
  );
};
