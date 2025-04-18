"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function NotFound() {
  const [countdown, setCountdown] = useState(310);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(intervalRef.current);
          window.location.href = "/";
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="flex items-center min-h-screen-minus-header flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
      <div className="w-full lg:w-1/2">
        <img src="/images/notfound.png" alt="404 Not Found" />
      </div>
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-gray-800">
          Looks like you've found the doorway to the great nothing
        </h1>
        <p className="py-4 text-base text-gray-800">
          The content you’re looking for doesn’t exist. Either it was removed,
          or you mistyped the link.
        </p>
        <p className="py-2 text-base text-gray-800">
          Redirecting to the homepage in <span className="font-bold">{countdown}</span> second{countdown !== 1 && "s"}...
        </p>
        <Link href="/" passHref>
          <span className="inline-block w-full lg:w-auto my-4 border rounded-lg px-6 py-3 bg-cyan-600 text-white hover:bg-cyan-700 cursor-pointer focus:outline-none ">
            Go back to Homepage now
          </span>
        </Link>
      </div>
    </div>
  );
}
