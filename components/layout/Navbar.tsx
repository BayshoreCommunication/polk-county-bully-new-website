"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/homepage/navbar/logo.png"
            width={1000}
            height={800}
            alt="Logo"
            className="rounded w-16 h-auto"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-white tracking-wide text-xl">
          <li className="cursor-pointer hover:text-primary">Home</li>
          <li className="cursor-pointer hover:text-primary">Adoption</li>
          <li className="cursor-pointer hover:text-primary">Learn</li>
          <li className="cursor-pointer hover:text-primary">About</li>
          <li className="cursor-pointer hover:text-primary">Contact</li>
        </ul>

        <div className="hidden md:block">
          <button className="bg-white text-primary px-6 py-2">Adopt Now</button>
        </div>

        {/* Mobile Menu */}
        <div
          className="md:hidden text-black text-3xl transition-transform cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? "✕" : "☰"}
        </div>
      </div>

      {open && (
        <ul className="md:hidden bg-black/70 text-white text-center py-4 space-y-3">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Adoption</li>
          <li className="cursor-pointer">Learn</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>

          <button className="bg-white text-primary text-xl px-6 py-3 rounded-full font-semibold">
            Adopt Now
          </button>
        </ul>
      )}
    </nav>
  );
}
