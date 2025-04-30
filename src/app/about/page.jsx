"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
            <div className="container mx-auto px-4 py-12">
                <div className="mb-16 text-center">
                    <h1 className="text-4xl font-bold mb-6 text-gray-800">
                        About CipherAlgo
                    </h1>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-xl text-gray-600 mb-8">
                            An educational platform dedicated to exploring the fascinating world of cryptography
                            through interactive cipher implementations.
                        </p>
                        <div className="flex justify-center">
                            <Image
                                src="/images/logo1.png"
                                alt="CipherAlgo Logo"
                                width={120}
                                height={120}
                                className="rounded-xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-8 mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h2>
                    <p className="text-gray-600 mb-6">
                        CipherAlgo aims to make cryptography accessible and engaging for everyone. We believe that understanding
                        encryption is increasingly important in our digital world, and learning through interactive examples
                        is the most effective approach.
                    </p>
                    <p className="text-gray-600">
                        Whether you&apos;re a student, educator, or encryption enthusiast, our platform offers a hands-on way
                        to explore both classical and modern cryptographic algorithms.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white rounded-xl shadow-md p-8">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Features</h2>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start">
                                <span className="text-cyan-500 mr-2">✓</span>
                                <span>Interactive encryption and decryption tools</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-500 mr-2">✓</span>
                                <span>Visual step-by-step encryption process</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-500 mr-2">✓</span>
                                <span>Mathematical background and historical context</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-500 mr-2">✓</span>
                                <span>Comprehensive collection of cipher algorithms</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-500 mr-2">✓</span>
                                <span>Mobile-friendly responsive design</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-8">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Cipher Categories</h2>
                        <div className="space-y-4">
                            <div className="border-l-4 border-cyan-500 pl-4">
                                <h3 className="font-semibold text-gray-800">Monoalphabetic Ciphers</h3>
                                <p className="text-gray-600">Single-substitution methods like Additive, Multiplicative, and Affine.</p>
                            </div>
                            <div className="border-l-4 border-cyan-500 pl-4">
                                <h3 className="font-semibold text-gray-800">Polyalphabetic Ciphers</h3>
                                <p className="text-gray-600">Advanced methods including Vigenère, Autokey, Playfair, and Hill</p>
                            </div>
                            <div className="border-l-4 border-cyan-500 pl-4">
                                <h3 className="font-semibold text-gray-800">Transposition Ciphers</h3>
                                <p className="text-gray-600">Methods that rearrange letters, like the Rail Fence cipher.</p>
                            </div>
                            <div className="border-l-4 border-cyan-500 pl-4">
                                <h3 className="font-semibold text-gray-800">Asymmetric Cryptography</h3>
                                <p className="text-gray-600">Modern cryptosystems including RSA.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-8 mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Technical Details</h2>
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div className="p-4">
                            <div className="text-4xl text-cyan-500 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Frontend</h3>
                            <p className="text-gray-600">Built with Next.js and React for a responsive, modern UI experience</p>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl text-cyan-500 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Styling</h3>
                            <p className="text-gray-600">Tailwind CSS for efficient, utility-first styling and responsive design</p>
                        </div>
                        <div className="p-4">
                            <div className="text-4xl text-cyan-500 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Implementation</h3>
                            <p className="text-gray-600">Pure JavaScript with mathematical algorithms for cipher implementations</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-8 mb-12">
                    <h2 className="text-2xl font-bold mb-8 text-gray-800 text-center">Our Team</h2>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                        <div className="text-center max-w-xs">
                            <div className="w-32 h-32 mx-auto mb-4 relative overflow-hidden rounded-full border-4 border-cyan-500">
                                <Image
                                    src="/images/profile.jpeg"
                                    alt="Team Member"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">MD. Atik</h3>
                            <p className="text-gray-600 mb-2">Lead Developer</p>
                            <div className="flex justify-center space-x-3">
                                <a href="https://github.com/MDATIK-3" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-cyan-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mb-12">
                    <Link
                        href="/"
                        className="inline-block py-3 px-8 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
                    >
                        Explore Ciphers
                    </Link>
                </div>

                <div className="text-center text-gray-600">
                    <p>Have questions or suggestions?</p>
                    <Link href="/component/contact" className="text-cyan-500 hover:underline">
                        Contact us
                    </Link>
                </div>
            </div>
        </div>
    );
}
