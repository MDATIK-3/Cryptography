"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  const [hoveredCipher, setHoveredCipher] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const ciphers = [
    {
      category: "Monoalphabetic Ciphers",
      description:
        "Single-substitution methods where each letter is replaced consistently throughout the message.",
      items: [
        {
          id: "additive",
          name: "Additive Cipher",
          image: "/images/additive.png",
          description: "A cipher where each letter is shifted by a fixed value",
        },
        {
          id: "multiplicative",
          name: "Multiplicative Cipher",
          image: "/images/multiplicative.png",
          description:
            "A cipher where each letter is multiplied by a fixed value",
        },
        {
          id: "affine",
          name: "Affine Cipher",
          image: "/images/affine.png",
          description: "A combination of additive and multiplicative ciphers",
        },
      ],
    },
    {
      category: "Polyalphabetic Ciphers",
      description:
        "Advanced methods using multiple substitution alphabets for enhanced security.",
      items: [
        {
          id: "autokey",
          name: "Autokey Cipher",
          image: "/images/autokey.png",
          description:
            "A cipher that uses the plaintext itself as part of the key",
        },
        {
          id: "playfair",
          name: "Playfair Cipher",
          image: "/images/playfair.png",
          description:
            "A cipher that encrypts pairs of letters instead of single letters",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-3 text-gray-800">
            Cryptography Explorer
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover and learn about various cipher techniques used throughout
            history for secure communication.
          </p>
        </header>

        {ciphers.map((category) => (
          <div key={category.category} className="mb-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-3 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {category.category}
                </h2>
                <p className="text-gray-600 mt-1">{category.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((cipher) => (
                <Link
                  href={`/component/${cipher.id}`}
                  key={cipher.id}
                  className="block h-full"
                >
                  <div
                    className="group h-full rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white transform hover:-translate-y-1"
                    onMouseEnter={() => setHoveredCipher(cipher.id)}
                    onMouseLeave={() => setHoveredCipher(null)}
                  >
                    <div className="h-56 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 animate-pulse"></div>
                      <Image
                        src={cipher.image}
                        alt={cipher.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {}}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                          Explore
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                        {cipher.name}
                      </h3>
                      <p className="text-gray-600 mb-4">{cipher.description}</p>
                      <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                        Learn more
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
