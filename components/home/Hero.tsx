"use client";
import Reveal from "../motion/Reveal";


import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [pets, setPets] = useState(0);
  const [partners, setPartners] = useState(0);

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
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/images/homepage/hero/bg.png')",
        backgroundPosition: "top center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative container mx-auto px-8 z-10 pt-24 md:pt-32">
        <div className="grid md:grid-cols-[2fr_1fr] gap-10 items-center w-full">

          {/* LEFT SIDE */}
          <div className="text-white w-full max-w-7xl">
          <Reveal y={-100} duration={2}>
            <h1 className="text-4xl md:text-8xl font-extrabold leading-normal md:leading-relaxed drop-shadow-[6px_6px_0px_#000]">
              <span className="text-white">EVERY</span>
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
            </h1>
          </Reveal>
            <div>
            <Reveal y={100} duration={2}>
              <p className="my-5 text-xl">Adopting a pet changes their life</p>
             </Reveal>
             <Reveal y={100} duration={2}>
              <p>
                At the Bully Project Rescue in Polk county, we believe that we
                can end breed discrimination and cruelty by working together
                through education and community support. Whether you’re ready to
                adopt, foster, donate or volunteer, you can make a difference
                for Pit Bulls and all Bully Breed dogs in Polk County, Florida.
              </p>
              </Reveal>
            </div>

            {/* COUNTERS */}
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
                    alt="Partners icon"
                  />
                  Partner Shelters
                </p>
              </div>
            </div>

            {/* BUTTONS */}
            <Reveal y={100} x={100} duration={1}>
            <div className="mt-6 flex items-center gap-6 flex-wrap">
              <button className="bg-white text-black font-semibold px-6 py-3 rounded-full shadow">
                Contact Us
              </button>

              <div className="flex items-center gap-3 px-6 py-3 bg-transparent rounded-full group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-orange-500 ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                <span className="text-white font-bold text-lg">Explore More</span>
              </div>
            </div>
            </Reveal>
          </div>

          {/* RIGHT SIDE — Add image later if needed */}
          <div></div>

        </div>
      </div>
    </section>
  );
}
