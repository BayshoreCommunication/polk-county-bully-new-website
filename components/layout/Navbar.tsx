"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const adoptionLink =
    "https://petstablished.com/adoptions/personal-information?application_type=Adopt&donation_section=false&form_id=24575&form_type=generic&generic_form_id=24575&pet_id=715879&section=1&selected_pets=false";

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // Close mobile menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        open &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleEscapeKey = (e: KeyboardEvent) => {
      if (open && e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [open]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/40 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/homepage/navbar/logo.webp"
              width={1000}
              height={800}
              alt="Logo"
              className="rounded w-16 h-auto transition-all duration-300 cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex gap-6 tracking-wide text-xl transition-all duration-300 ${
            scrolled
              ? "text-black drop-shadow-[3px_3px_0px_#fff]"
              : "text-white drop-shadow-[4px_4px_0px_#000]"
          }`}
        >
          {["Home", "Adoption", "Learn", "About", "Contact"].map((item, i) => (
            <li key={i} className="cursor-pointer hover:text-primary">
              <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button
            className={`px-6 py-2 transition-all duration-300 ${
              scrolled ? "bg-primary text-white" : "bg-white text-primary"
            }`}
            onClick={() => window.open(adoptionLink, "_blank")}
          >
            Adopt Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <div
          className={`md:hidden text-3xl cursor-pointer transition-all duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
        >
          {open ? "" : "☰"}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-[60] h-screen flex flex-col"
          >
            {/* Blurred Background */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

            {/* Menu Content */}
            <div className="relative z-50 flex flex-col h-full text-white">
              {/* Top Bar: Logo + Close */}
              <div className="flex items-center justify-between px-6 py-4">
                <Link href="/">
                  <Image
                    src="/images/homepage/navbar/logo.webp"
                    width={1000}
                    height={800}
                    alt="Logo"
                    className="w-20 h-auto rounded cursor-pointer"
                    onClick={() => setOpen(false)} // close menu on click
                  />
                </Link>
                <div
                  className="text-white text-3xl cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  ✕
                </div>
              </div>

              {/* Menu Items */}
              <ul className="flex flex-col items-center mt-10 space-y-6 text-xl">
                {["Home", "Adoption", "Learn", "About", "Contact"].map(
                  (item, i) => (
                    <li key={i}>
                      <Link
                        href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                        onClick={() => setOpen(false)}
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>

              {/* Button */}
              <div className="flex justify-center mt-10">
                <button
                  className="bg-white text-primary text-xl px-6 py-3 rounded-full font-semibold"
                  onClick={() => window.open(adoptionLink, "_blank")}
                >
                  Adopt Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
