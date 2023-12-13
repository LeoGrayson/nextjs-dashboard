import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
//import { Inter, Roboto_Mono } from 'next/font/google';

/*const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap', ${roboto_mono.variable}
})*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
