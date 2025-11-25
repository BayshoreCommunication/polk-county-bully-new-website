"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
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
          <li className="cursor-pointer hover:text-primary">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-primary">
            <Link href="/adoption">Adoption</Link>
          </li>
          <li className="cursor-pointer hover:text-primary">
            <Link href="/learn">Learn</Link>
          </li>
          <li className="cursor-pointer hover:text-primary">
            <Link href="/about">About</Link>
          </li>
          <li className="cursor-pointer hover:text-primary">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="bg-white text-primary px-6 py-2">Adopt Now</button>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden text-white text-3xl transition-transform cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? "✕" : "☰"}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-black/70 text-white text-center py-4 space-y-3">
          <li className="cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/adoption">Adoption</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/learn">Learn</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/about">About</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/contact">Contact</Link>
          </li>

          <button className="bg-white text-primary text-xl px-6 py-3 rounded-full font-semibold">
            Adopt Now
          </button>
        </ul>
      )}
    </nav>
  );
}
