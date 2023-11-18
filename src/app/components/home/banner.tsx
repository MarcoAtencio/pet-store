'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

export const MainBanner = () => {
  const images = [
    'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1581888227599-779811939961?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1554456854-55a089fd4cb2?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <section className='relative h-[60rem] overflow-hidden shadow-md'>
      <div className='relative h-full'>
        {images.map((imageUrl, index) => (
          <Image
            key={index}
            src={imageUrl}
            alt={`Slide ${index}`}
            height={1000}
            width={2000}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='absolute inset-0 flex items-center justify-between'>
          <button
            onClick={prevSlide}
            className='text-white absolute top-1/2 left-4 transform -translate-y-1/2 focus:outline-none text-4xl'
          >
            {'<'}
          </button>
          <button
            onClick={nextSlide}
            className='text-white absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none text-4xl '
          >
            {'>'}
          </button>
        </div>
      </div>
      <div className='absolute bottom-20 left-10 text-white'>
        <h2 className='text-4xl md:text-5xl font-bold leading-tight'>
          Nueva colección
        </h2>
        <p className='text-lg md:text-xl mt-3'>
          Descubre las mejores prendas para tu consentido
        </p>
        <Link
          href='/products'
          className='text-base md:text-lg text-blue-400 underline mt-2 block'
        >
          Ver todos los productos
        </Link>
      </div>
    </section>
  );
};

export const DeliveryBanner = () => {
  return (
    <div className='bg-neutral-500 shadow-sm flex flex-col md:flex-row justify-center items-center gap-8 py-10 mb-20'>
      <div className='text-center sm:text-left'>
        <span className='text-4xl sm:text-5xl text-white font-bold'>
          Envíos a todo el Perú
        </span>
        <p className='text-lg sm:text-xl text-white'>
          Delivery gratis por compras mayores a S/ 100
        </p>
      </div>
      <svg
        className='h-24 sm:h-32 w-24 sm:w-32 text-slate-100'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        strokeWidth='2'
        stroke='currentColor'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' />
        <circle cx='7' cy='17' r='2' />
        <circle cx='17' cy='17' r='2' />
        <path d='M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5' />
        <line x1='3' y1='9' x2='7' y2='9' />
      </svg>
    </div>
  );
};
