import Image from 'next/image';
import { auth } from '@/auth';
import { IconLogin } from './buttons';
import Link from 'next/link';
import { Linden_Hill } from 'next/font/google';

export const UserIconLogin = async () => {
  const session = await auth();

  if (session?.user) {
    return (
      <Link href='/account'>
        <Image
          src={session?.user?.image as string}
          alt={session?.user?.name as string}
          width={32}
          height={32}
          className='rounded-full'
        />
      </Link>
    );
  }

  return <IconLogin />;
};
