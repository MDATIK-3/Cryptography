"use client";

import { Analytics } from "@vercel/analytics/react";
import FeedbackButton from "@/app/component/FeedbackButton/page";
import Header from "@/app/layout/Header";
import Footer from "@/app/layout/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>CipherAlgo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/images/logo1.png" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5385144928798539"
          crossOrigin="anonymous"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            (adsbygoogle = window.adsbygoogle || []).push({
              google_ad_client: "ca-pub-5385144928798539",
              enable_page_level_ads: true
            });
          `
        }} />
      </head>

      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <FeedbackButton />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
