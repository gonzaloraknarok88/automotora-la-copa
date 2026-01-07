import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Parque Automotriz La Copa - Autos usados Santiago',
  description: 'Más de 30 años de experiencia. Compra y venta de autos usados con financiamiento. Ubicado en San Ramón, Santiago.',
  keywords: 'autos usados, vehículos, financiamiento, Santiago, La Copa',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}
