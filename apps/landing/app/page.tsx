import { Metadata } from 'next';
import { generalMetadata } from '../utils';
import { Header } from './header';
import { About, Hero, Performance, Questions, Strategy } from '../containers';

export const metadata: Metadata = {
  title: 'Edge Capital | Landing',
  ...generalMetadata,
};

export default function Page() {
  return (
    <div className=''>
      <div className='h-screen max-h-[1080px] bg-[url("/top-bg.webp")] bg-cover bg-no-repeat'>
        <Header />
        <Hero />
      </div>
      <Strategy />
      <Performance />
      <About />
      <Questions />
    </div>
  );
}
