// app/layout.tsx
import "../styles/globals.css"; // or your main CSS

export const metadata = {
  title: 'Emotionally Aware Assistant',
  description: 'Built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
