import './globals.css';

export const metadata = {
  title: 'Polinema Student Finder',
  description: 'Find Polinema students easily',
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
