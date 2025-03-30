"use client";
import "./globals.css";
import Header from "./layout/header";
import Footer from "./layout/footer";

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
