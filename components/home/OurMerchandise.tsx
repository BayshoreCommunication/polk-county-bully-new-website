"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "../motion/Reveal";
import Link from "next/link";

export default function OurMerchandise() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[80vh] py-12 md:py-20 overflow-hidden"
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
        <div className="md:hidden">
          <div className="flex flex-col gap-5 mb-5">
            <Image
              src="/images/homepage/OurMerchandise/Merchandise-1.png"
              width={230}
              height={310}
              alt=""
              className="w-full"
            />
            <Image
              src="/images/homepage/OurMerchandise/Merchandise-2.png"
              width={480}
              height={310}
              alt=""
              className="w-full"
            />
            <Image
              src="/images/homepage/OurMerchandise/Merchandise-3.png"
              width={290}
              height={310}
              alt=""
              className="w-full"
            />
            <Image
              src="/images/homepage/OurMerchandise/Merchandise-4.png"
              width={230}
              height={310}
              alt=""
              className="w-full"
            />
          </div>
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
              Sponsor A Rescue Dog
            </div>
          </button>
        </div>
      </div>

      {/* ---------------- MODAL ---------------- */}
      {openModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-8 relative animate-fadeIn">
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
              {/* Name */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Name</label>
                <input
                  type="text"
                  className="border rounded-lg px-4 py-2"
                  placeholder="Name"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Email</label>
                <input
                  type="email"
                  className="border rounded-lg px-4 py-2"
                  placeholder="Email"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Phone</label>
                <input
                  type="text"
                  className="border rounded-lg px-4 py-2"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Size */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">
                  Size (If Applicable)
                </label>
                <select className="border rounded-lg px-4 py-2">
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                  <option>XL</option>
                </select>
              </div>

              {/* Merchandise */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">
                  Select Merchandise
                </label>
                <select className="border rounded-lg px-4 py-2">
                  <option>T-Shirt</option>
                  <option>Mug</option>
                  <option>Tote Bag</option>
                </select>
              </div>

              {/* Quantity */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Quantity</label>
                <input
                  type="number"
                  className="border rounded-lg px-4 py-2"
                  defaultValue={1}
                />
              </div>

              {/* Shipping Address - full width */}
              <div className="md:col-span-2 flex flex-col">
                <label className="text-sm font-semibold mb-1">
                  Shipping Address
                </label>
                <textarea
                  className="border rounded-lg px-4 py-2 h-20"
                  placeholder="Here..."
                />
              </div>
            </form>

            {/* Submit Button */}
            <div className="flex justify-center mt-8">
              <button className="bg-white text-primary px-8 py-3 rounded-full shadow hover:scale-105 transition flex items-center gap-2">
              <div className="flex justify-center items-center gap-4">
                    <Image
                      src="/images/homepage/button/icon.png"
                      alt="Dog standing"
                      width={1000}
                      height={800}
                      className="w-6 h-auto object-cover"
                    />
                    Send
                  </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TOP gradient */}
      <div className="absolute top-0 w-full h-32 left-0 right-0 bg-gradient-to-t from-transparent to-white"></div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 w-full left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white"></div>
    </section>
  );
}
