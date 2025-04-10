"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  const [ciphers, setCiphers] = useState([]);

  useEffect(() => {
    const handleFetchCiphers = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) throw new Error("Failed to fetch ciphers");

        const data = await response.json();
        setCiphers(data?.ciphers || []);
      } catch (error) {
        console.error("Error fetching ciphers:", error);
      }
    };

    handleFetchCiphers();
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 transition-colors duration-300">
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

        {ciphers.length > 0 ? (
          ciphers.map((category) => (
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
                                        >
                      <div className="h-56 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 animate-pulse"></div>
                        <Image
                          src={cipher.image}
                          alt={cipher.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                          <span className="px-3 py-1 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white text-xs font-medium rounded-full">
                            Explore
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-cyan-600 transition-colors">
                          {cipher.name}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {cipher.description}
                        </p>
                        <div className="flex items-center text-cyan-600 font-medium group-hover:text-cyan-400 transition-colors">
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
          ))
        ) : (
          <p className="text-center text-gray-600">
            Loading ciphers details...
          </p>
        )}
      </div>
    </div>
  );
}
