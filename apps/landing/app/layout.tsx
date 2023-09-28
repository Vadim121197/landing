import 'ui/styles/globals.css';
import { Footer } from './footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='min-h-screen'>
        <div className='relative flex min-h-screen flex-col'>
          <main className='flex-1'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
