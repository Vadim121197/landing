import Image from 'next/image';
import Link from 'next/link';
import { LandingPath, aboutRoutes, resourceRoutes } from '../utils';
import { Button, Checkbox, Input, Social } from 'ui';

export const Footer = () => {
  return (
    <footer className='bg-foreground text-muted-foreground pb-[124px] pt-[154px]'>
      <div className='container flex justify-between'>
        <div className='flex flex-col justify-between'>
          <div className='flex flex-col gap-12'>
            <Link
              href={LandingPath.INDEX}
              className='relative h-[25px] w-[45px] md:h-[37px] md:w-[184px]'
            >
              <Image src='/logo.svg' alt='Logo' layout='fill' objectFit='cover' />
            </Link>
            <Social />
          </div>
          <p className='text-dark-grey text-sm'>© 2020-2023 Edge Capital. All rights reserved</p>
        </div>
        <div className='gpa-[58px] flex flex-col gap-[58px]'>
          <p className='font-headline uppercase'>about</p>
          <div className='flex flex-col gap-4'>
            {aboutRoutes.map(i => (
              <Link href={i.href} key={i.href} className='text-dark-grey hover:opacity-50'>
                {i.title}
              </Link>
            ))}
          </div>
        </div>
        <div className='gpa-[58px] flex flex-col gap-[58px]'>
          <p className='font-headline uppercase'>Resources</p>
          <div className='flex flex-col gap-4'>
            {resourceRoutes.map(i => (
              <Link href={i.href} key={i.href} className='text-dark-grey hover:opacity-50'>
                {i.title}
              </Link>
            ))}
          </div>
        </div>
        <div className='gpa-[58px] flex w-[20%] flex-col'>
          <p className='font-headline uppercase'>Stay up to date with Edge capital</p>
          <p className='text-dark-grey mb-5 mt-8 w-[90%]'>
            Subscribe to the newsletter for Edge Capital updates
          </p>
          <Input placeholder='e-mail' className='mb-7' />
          <div className='flex items-center space-x-2'>
            <Checkbox id='terms' />
            <label htmlFor='terms' className='text-dark-grey text-sm'>
              I agree to the processing of personal data
            </label>
          </div>
          <Button size='md' className='mt-7'>
            Subscribe
          </Button>
        </div>
      </div>
    </footer>
  );
};
