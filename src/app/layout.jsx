"use client";
import "./globals.css";
import Header from "@/app/layout/Header";
import Footer from "@/app/layout/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
          {children}
        <Footer/>
      </body>
    </html>
  );
}
