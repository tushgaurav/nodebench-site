import type { Metadata } from "next";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

export const metadata: Metadata = {
  title: {
    default: "nodebench.com",
    template: "%s | nodebench",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="bg-brand_orange text-white">
        <Navbar />
      </header>
      {children}
      <footer className="bg-brand_orange text-white px-6 py-12 pb-2">
        <Footer />
      </footer>
    </>
  );
}
