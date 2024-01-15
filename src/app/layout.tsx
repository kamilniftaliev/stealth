import './globals.css';
import { Sidebar } from './Sidebar';
import { inter } from '@/constants';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} md:text-sm bg-gray-50`}>
        <div className="flex flex-col sm:flex-row sm:pl-sidebar overflow-hidden sm:overflow-auto">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}

export { metadata } from '@/constants';
