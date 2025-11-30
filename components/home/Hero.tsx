"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Reveal from "../motion/Reveal";

import { motion } from "framer-motion";

export default function Hero() {
  const [pets, setPets] = useState(0);
  const [partners, setPartners] = useState(0);

  // Counter animation
  useEffect(() => {
    let duration = 3000;
    let startTime = performance.now();

    const animate = (currentTime: number) => {
      let progress = Math.min((currentTime - startTime) / duration, 1);

      setPets(Math.floor(progress * 8));
      setPartners(Math.floor(progress * 5));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-x-hidden">
      {/* Background Image Using NEXT IMAGE */}
      <Image
        src="/images/homepage/hero/bg.webp"
        alt="Hero background"
        fill
        priority
        className="object-cover object-top"
        sizes="100vw"
      />

      {/* Black Overlay (optional) */}
      {/* <div className="absolute inset-0 bg-black/20"></div> */}

      {/* Content */}
      <div className="relative container mx-auto px-6 md:px-8 pt-24 md:pt-32">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT SIDE */}
          <div className="text-white drop-shadow-lg">
            {/* <HeroTitle /> */}
            {/* <Reveal y={-100} duration={2}> */}
            <motion.h1
              initial={{ clipPath: "inset(0 100% 0 0)" }} // Hidden: right to left
              animate={{ clipPath: "inset(0 0 0 0)" }}     // Fully visible
              transition={{ duration: 3, ease: [0.4, 0, 0.2, 1] }}
              className="text-4xl md:text-7xl font-extrabold leading-normal md:leading-relaxed drop-shadow-[6px_6px_0px_#000] typewriter-text"
            >
              <span>EVERY</span>
              <span className="text-[#FACC15]"> DOG </span>
              <span className="bg-gradient-to-r from-[#FACC15] to-[#F97316] text-transparent bg-clip-text">
                DESERVES
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#F7734E] to-[#F44B80] text-transparent bg-clip-text">
                TO BE IN A LOVING
              </span>
              <br />
              <span className="text-[#35FA25]">HOME</span>
            </motion.h1>
            {/* </Reveal> */}

            <p className="my-5 text-xl text-outline">
              Adopting A Pet Changes Their Life
            </p>

            <Reveal y={100} x={100} duration={2}>
              <p>
                At the Bully Project Rescue in Polk county, we believe that we
                can end breed discrimination and cruelty by working together
                through education and community support. Whether you’re ready to
                adopt, foster, donate or volunteer, you can make a difference
                for Pit Bulls and all Bully Breed dogs in Polk County, Florida.
              </p>
            </Reveal>

            {/* Counters */}
            <div className="flex gap-10 mt-6">
              <div>
                <p className="text-4xl font-bold bg-gradient-to-r from-[#F97316] to-[#FACC15] text-transparent bg-clip-text">
                  {pets}k+
                </p>
                <p className="text-sm flex items-center gap-2">
                  <Image
                    src="/images/homepage/hero/icon1.png"
                    width={20}
                    height={20}
                    alt="Pets icon"
                  />
                  Pets Adopted
                </p>
              </div>

              <div>
                <p className="text-4xl font-bold bg-gradient-to-r from-[#F97316] to-[#FACC15] text-transparent bg-clip-text">
                  {partners}K+
                </p>
                <p className="text-sm flex items-center gap-2">
                  <Image
                    src="/images/homepage/hero/icon2.png"
                    width={20}
                    height={20}
                    alt="Partner icon"
                  />
                  Partner Shelters
                </p>
              </div>
            </div>

            {/* Buttons */}
            <Reveal y={100} x={100} duration={2}>
              <div className="mt-6 flex items-center gap-6 flex-wrap">
                <button className="bg-white text-primary font-semibold px-6 py-3 rounded-full shadow">
                  <div className="flex justify-center items-center gap-4">
                    <Image
                      src="/images/homepage/button/icon.png"
                      alt="Dog icon"
                      width={1000}
                      height={800}
                      className="w-6 h-auto object-cover"
                    />
                    Contact Us
                  </div>
                </button>

                <div className="flex items-center gap-3 px-6 py-3 bg-transparent rounded-full group">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-orange-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="text-white font-bold text-lg text-outline">
                    Explore More
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
