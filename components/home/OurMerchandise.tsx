"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Reveal from "../motion/Reveal";

export default function OurMerchandise() {
  const [openModal, setOpenModal] = useState(false);

  // 🔥 Disable background scrolling when modal is open
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalStyle;
    }
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [openModal]);

  return (
    <>
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat min-h-[70vh] py-12 md:py-20"
        style={{
          backgroundImage:
            "url('/images/homepage/OurMerchandise/OurMerchandiseBg.webp')",
        }}
      >
        <div className="container mx-auto">
          <Reveal y={-100} duration={2}>
            <h2 className="text-center text-4xl md:text-7xl text-white mb-3 drop-shadow-[6px_6px_0px_#000] tracking-wider">
              Buy Our Merchandise
            </h2>
          </Reveal>

          <Reveal y={-100} duration={3}>
            <p className="text-center text-white/90 max-w-xl mx-auto mb-10">
              Wear your heart on your sleeve. Every shirt, mug, or tote you buy
              helps rescue more dogs — and spreads love everywhere you go.
            </p>
          </Reveal>

          {/* Desktop image */}
          <div className="hidden md:block">
            <Image
              src="/images/homepage/OurMerchandise/Merchandise-main.png"
              width={1000}
              height={1000}
              alt="Merch"
              className="w-full"
            />
          </div>

          {/* Mobile images */}
          <div className="md:hidden flex flex-col gap-5 mb-5">
            {["Merchandise-1.png", "Merchandise-2.png", "Merchandise-3.png", "Merchandise-4.png"].map((img, i) => (
              <Image
                key={i}
                src={`/images/homepage/OurMerchandise/${img}`}
                width={1000}
                height={800}
                alt=""
                className="w-full"
              />
            ))}
          </div>

          {/* Open Modal Button */}
          <div className="flex justify-center items-center mt-16">
            <button
              onClick={() => setOpenModal(true)}
              className="bg-white px-6 py-3 rounded-full text-primary font-semibold shadow hover:scale-105 transition"
            >
              <div className="flex justify-center items-center gap-4">
                <Image
                  src="/images/homepage/button/icon.png"
                  alt="Dog standing"
                  width={1000}
                  height={800}
                  className="w-6 h-auto object-cover"
                />
                Buy our Merchandise
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ---------------- MODAL ---------------- */}
      {openModal && (
        <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex justify-center items-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-6 relative animate-fadeIn max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-4 right-4 text-2xl font-bold text-gray-700 hover:text-black bg-white rounded-full p-2 border-none"
            >
              ×
            </button>

            {/* Modal Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
              Buy Our Merchandise
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-lg mx-auto">
              Wear your heart on your sleeve. Every shirt, mug, or tote you buy
              helps rescue more dogs — and spreads love everywhere you go.
            </p>

            {/* FORM */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="border p-2 rounded-lg w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded-lg w-full"
              />
              <input
                type="text"
                placeholder="Phone"
                className="border p-2 rounded-lg w-full"
              />
              <select className="border p-2 rounded-lg w-full">
                <option>Size (If Applicable)</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>XL</option>
              </select>
              <select className="border p-2 rounded-lg w-full">
                <option>Select Merchandise</option>
                <option>T-Shirt</option>
                <option>Mug</option>
                <option>Tote Bag</option>
              </select>
              <input
                type="number"
                placeholder="Quantity"
                defaultValue={1}
                className="border p-2 rounded-lg w-full"
              />
              <textarea
                placeholder="Shipping Address"
                className="border p-2 rounded-lg w-full md:col-span-2 h-24"
              />
            </form>

            {/* Submit Button */}
            <div className="flex justify-center mt-8">
              <button className="bg-white text-primary px-8 py-3 rounded-full shadow hover:scale-105 transition flex items-center gap-2">
                <Image
                  src="/images/homepage/button/icon.png"
                  alt="Dog standing"
                  width={1000}
                  height={800}
                  className="w-6 h-auto object-cover"
                />
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 🔥 Fade-in animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
      `}</style>
    </>
  );
}
