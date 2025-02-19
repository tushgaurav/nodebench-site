import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { CSPostHogProvider } from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "nodebench",
  description: "Real Performance, Real Results",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CSPostHogProvider>
        <body className={`${poppins.variable} antialiased`}>{children}</body>
      </CSPostHogProvider>
    </html>
  );
}
