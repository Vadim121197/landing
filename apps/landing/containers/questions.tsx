import Link from 'next/link';
import React from 'react';

export const Questions = () => {
  return (
    <div className='container flex flex-col py-[190px]'>
      <div className='bg-gradient ml-1 h-[10px] w-[64px]'></div>
      <p className='font-headline text-[80px] uppercase leading-[1]'>Get your questions answered</p>
      <p className='bg-foreground mb-[118px] mt-[10px] h-[5px] w-full'></p>
      <div className='grid grid-cols-2 gap-5'>
        <div className='relative border-[2px] pb-7 pl-[50px] pt-[64px]'>
          <div className='bg-gradient text-muted-foreground font-headline absolute top-[-31px] flex h-[62px] w-[416px] items-center px-[26px] text-[34px] uppercase leading-10'>
            learn
          </div>
          <div className='flex flex-col gap-8'>
            <p>
              Deep dive into summer.
              <br /> Functionalities and glossary
            </p>
            <div className='flex flex-col gap-5'>
              {['get started', 'tutorials', 'key concepts'].map((i, index) => (
                <Link key={index} href='https://www.google.com/'>
                  <div className='font-headline flex gap-1 uppercase transition-transform duration-200 hover:scale-110'>
                    <p>{i}</p>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='9'
                      height='9'
                      viewBox='0 0 9 9'
                      fill='none'
                      className='mt-2'
                    >
                      <path d='M1 1H8V8' stroke='black' strokeWidth='2' />
                      <path d='M8 1L1 8' stroke='black' strokeWidth='2' />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className='relative border-[2px] pb-7 pl-[50px] pt-[64px]'>
          <div className='bg-gradient text-muted-foreground font-headline absolute top-[-31px] flex h-[62px] w-[416px] items-center px-[26px] text-[34px] uppercase leading-10'>
            support
          </div>
          <div className='flex flex-col gap-8'>
            <p>
              Contact summer.
              <br /> Team whenever you need
            </p>
            <div className='flex flex-col gap-5'>
              {['faq', 'discord', 'twitter'].map((i, index) => (
                <Link key={index} href='https://www.google.com/'>
                  <div className='font-headline flex gap-1 uppercase transition-transform duration-200 hover:scale-110'>
                    <p>{i}</p>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='9'
                      height='9'
                      viewBox='0 0 9 9'
                      fill='none'
                      className='mt-2'
                    >
                      <path d='M1 1H8V8' stroke='black' strokeWidth='2' />
                      <path d='M8 1L1 8' stroke='black' strokeWidth='2' />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
