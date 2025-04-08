"use client";

import { Analytics } from "@vercel/analytics/react";
import FeedbackButton from "@/app/component/FeedbackButton/page";
import Header from "@/app/layout/Header";
import Footer from "@/app/layout/Footer";
import Head from "next/head";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Head>
          <link rel="icon" href="/images/logo1.png" />
        </Head>

        <Header />

        <main className="flex-grow">{children}</main>

        <FeedbackButton />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
