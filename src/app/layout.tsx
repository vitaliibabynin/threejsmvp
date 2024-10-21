import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from './components/Navbar'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "3D Industrial Modeling Solutions",
  description: "Expert 3D modeling services for industrial installations and upgrades",
};

const menuItems = [
  { label: 'Benefits', href: '#benefits' },
  { label: '3D Model', href: '#model' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#cta' },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-purple-300`}
      >
        <Navbar menuItems={menuItems} currentSection="#home" />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
