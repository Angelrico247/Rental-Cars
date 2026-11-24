import { Navbar } from '../components/layout/Navbar/Navbar';
import './globals.css';
import { DemoNotice } from '../components/DemoNotice';

export const metadata = {
  robots: { index: false, follow: false },
  title: 'Rental Cars | Premium Experience',
  description: 'Renta de autos de lujo con la mejor experiencia del mercado',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <DemoNotice />
      </body>
    </html>
  );
}