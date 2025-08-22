import React from "react";
import Image from "next/image"; // if using Next.js
import Link from "next/link";

export default function HeroSection() {
  return (
   <section className="relative h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src="https://cdn.pixabay.com/photo/2014/08/26/21/49/shirts-428627_960_720.jpg"
          alt="E-commerce Hero"
          layout="fill"
          objectFit="cover"
          priority
          className="absolute inset-0 z-0"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 gradient z-10" />

        {/* Text Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent drop-shadow-lg">
            Shop the Latest Trends
          </h1>
          <p className="mt-4 text-lg sm:text-2xl max-w-2xl text-gray-200">
            Discover amazing deals on fashion, electronics, and more!
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <Link
              href="/products"
              className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 hover:shadow-blue-500/40 hover:scale-105 transition transform"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
