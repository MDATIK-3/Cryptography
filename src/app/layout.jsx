"use client";

import { Analytics } from "@vercel/analytics/react";
import FeedbackButton from "@/app/component/FeedbackButton/page";
import Header from "@/app/layout/Header";
import Footer from "@/app/layout/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        {children}
        <FeedbackButton />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
