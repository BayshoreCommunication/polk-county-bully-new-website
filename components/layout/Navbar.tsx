"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Listen for scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${scrolled ? "bg-white/40 backdrop-blur-lg shadow-md" : "bg-transparent"}
    `}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/homepage/navbar/logo.png"
            width={1000}
            height={800}
            alt="Logo"
            className="rounded w-16 h-auto transition-all duration-300"
          />
        </div>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex gap-6 tracking-wide text-xl transition-all duration-300
          ${
            scrolled
              ? "text-black drop-shadow-[3px_3px_0px_#fff]"
              : "text-white drop-shadow-[4px_4px_0px_#000]"
          }
        `}
        >
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
          <button
            className={`px-6 py-2 transition-all duration-300
            ${scrolled ? "bg-primary text-white" : "bg-white text-primary"}
          `}
          >
            Adopt Now
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div
          className={`md:hidden text-3xl cursor-pointer transition-all duration-300
          ${scrolled ? "text-black" : "text-white"}
        `}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 flex flex-col"
          >
            {/* Top Bar: Logo + X */}
            <div className="flex items-center justify-between px-6 py-4">
              <Image
                src="/images/homepage/navbar/logo.png"
                width={1000}
                height={800}
                alt="Logo"
                className="w-20 h-auto rounded"
              />
              <div
                className="text-white text-3xl cursor-pointer"
                onClick={() => setOpen(false)}
              >
                ✕
              </div>
            </div>

            {/* Menu Items */}
            <ul className="flex flex-col items-center mt-10 space-y-6 text-xl text-white">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/adoption">Adoption</Link>
              </li>
              <li>
                <Link href="/learn">Learn</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>

            {/* Button */}
            <div className="flex justify-center mt-10">
              <button className="bg-white text-primary text-xl px-6 py-3 rounded-full font-semibold">
                Adopt Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
