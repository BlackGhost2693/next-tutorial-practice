import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts'; 
import NavLinks from '@/app/ui/dashboard/nav-links';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NavLinks />
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
