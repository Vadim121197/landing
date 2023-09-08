'use client';
import Image from 'next/image';
import React, { useMemo } from 'react';
import { tokens } from '../../utils';
import { useParams } from 'next/navigation';

export const AssetName = () => {
  const { slug } = useParams() as { slug: string };

  const token = useMemo(() => {
    return tokens.find(i => i.id === slug);
  }, [slug]);

  return (
    <div className='flex items-center  gap-4'>
      <Image src={token?.icon ?? ''} alt='' width={40} height={40} />
      <div className='ml-2 flex flex-col justify-between'>
        <p className='subtitle2'>{token?.token}</p>
        <p className='subtitle1'>{token?.name}</p>
      </div>
      <div className='flex items-start gap-2 self-end'>
        {/* go to contract icon - replace */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
        >
          <path
            d='M9.99992 0.833333L6.66659 4.16667H9.16659V11.6667H10.8333V4.16667H13.3333M14.9999 19.1667H4.99992C4.07492 19.1667 3.33325 18.4167 3.33325 17.5V7.5C3.33325 7.05797 3.50885 6.63405 3.82141 6.32149C4.13397 6.00893 4.55789 5.83333 4.99992 5.83333H7.49992V7.5H4.99992V17.5H14.9999V7.5H12.4999V5.83333H14.9999C15.4419 5.83333 15.8659 6.00893 16.1784 6.32149C16.491 6.63405 16.6666 7.05797 16.6666 7.5V17.5C16.6666 17.942 16.491 18.366 16.1784 18.6785C15.8659 18.9911 15.4419 19.1667 14.9999 19.1667Z'
            fill='#B0A8A8'
          />
        </svg>
        {/* add to wallet icon - replace */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='22'
          height='22'
          viewBox='0 0 20 20'
          fill='none'
        >
          <path
            d='M12.9167 12.9167C13.6083 12.9167 14.1667 12.3583 14.1667 11.6667C14.1667 10.975 13.6083 10.4167 12.9167 10.4167C12.225 10.4167 11.6667 10.975 11.6667 11.6667C11.6667 12.3583 12.225 12.9167 12.9167 12.9167ZM5.83333 2.5H14.1667C15.0917 2.5 15.8333 3.25 15.8333 4.16667V5.83333C16.7583 5.83333 17.5 6.58333 17.5 7.5V15.8333C17.5 16.7583 16.7583 17.5 15.8333 17.5H5.83333C3.99167 17.5 2.5 16.0083 2.5 14.1667V5.83333C2.5 3.99167 3.99167 2.5 5.83333 2.5ZM14.1667 5.83333V4.16667H5.83333C4.91667 4.16667 4.16667 4.91667 4.16667 5.83333V6.28333C4.65833 6 5.225 5.83333 5.83333 5.83333H14.1667ZM4.16667 14.1667C4.16667 15.0917 4.91667 15.8333 5.83333 15.8333H15.8333V7.5H5.83333C4.91667 7.5 4.16667 8.25 4.16667 9.16667V14.1667Z'
            fill='#B0A8A8'
          />
        </svg>
      </div>
    </div>
  );
};
