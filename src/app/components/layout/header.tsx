import Link from 'next/link';
import { UserIconLogin } from '../auth/userIcon';

export default function Header() {
  return (
    <header className='shadow-lg items-center bg-white'>
      <div className='bg-neutral-700 text-center py-3'>
        <span className='text-slate-50 text-base'>Pagina en construcción</span>
      </div>
      <nav className='flex items-center justify-between py-10 px-10'>
        <div className='text-3xl text-gray-700 font-bold'>
          <Link href='/'>Cachorros</Link>
        </div>
        <div className='sm:hidden'>
          <button className='text-gray-700 hover:text-gray-800 transition-colors duration-300 focus:outline-none'>
            <svg
              className='h-8 w-8 ml-2 text-gray-700'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </button>
        </div>
        <ul className='hidden sm:flex space-x-4' id='menu'>
          <li>
            <UserIconLogin />
          </li>
          <li>
            <Link href='/about'>
              <svg
                className='h-8 w-8 ml-2 text-gray-700'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
``;
