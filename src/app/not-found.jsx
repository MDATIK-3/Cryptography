"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function NotFound() {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer =
      countdown > 0 && setInterval(() => setCountdown(countdown - 1), 1000);

    if (countdown === 0) {
      window.location.href = "/";
    }

    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <div className="min-h-screen-minus-header bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 flex flex-col items-center justify-center p-4 transition-colors duration-300">
      <div className="container mx-auto max-w-md">
        <div className="rounded-xl overflow-hidden shadow-xl bg-white">
          <div className="h-48 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-8xl font-bold text-gray-800">404</h1>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
          </div>

          <div className="p-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-3 text-gray-800">
                Page Not Found
              </h2>
              <p className="text-gray-600 mb-6">
                The cryptographic algorithm you're looking for has been
                encrypted, moved, or never existed.
              </p>

              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="w-full px-4 py-2 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white font-medium rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                >
                  Return to Dashboard
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </Link>

                <button
                  onClick={() => window.history.back()}
                  className="w-full px-4 py-2 bg-gray-100 text-gray-800 font-medium rounded-lg flex items-center justify-center hover:bg-gray-200 transition-all duration-300"
                >
                  Go Back
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-6 text-sm text-gray-600">
                CipherAlgo home page in {countdown} seconds...
              </div>
            </div>
          </div>

          <div className="p-4 text-center border-t border-gray-200">
            <p className="text-sm text-cyan-600">
              Cryptography Explorer | Secure Communications
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
