import Image from 'next/image';
import Link from 'next/link';
import { LandingPath, headerRoutes } from '../utils';
import { Button } from 'ui';

export const Header = () => {
  return (
    <header className='container top-0'>
      <div className='flex items-center justify-between md:pt-[86px]'>
        <Link
          href={LandingPath.INDEX}
          className='relative h-[25px] w-[45px] md:h-[37px] md:w-[184px]'
        >
          <Image src='/logo.svg' alt='Logo' layout='fill' objectFit='cover' />
        </Link>
        <div className='hidden md:flex md:items-center md:justify-end md:gap-[124px]'>
          <nav className='flex items-center gap-20'>
            {headerRoutes.map(i => (
              <Button key={i.href} variant='ghost' size='sm'>
                <Link key={i.href} href={i.href}>
                  {i.title}
                </Link>
              </Button>
            ))}
          </nav>
          <Button>Connect Wallet</Button>
        </div>
      </div>
    </header>
  );
};
