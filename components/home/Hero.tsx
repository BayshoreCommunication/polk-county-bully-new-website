"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Reveal from "../motion/Reveal";

export default function Hero() {
  const [pets, setPets] = useState(0);
  const [partners, setPartners] = useState(0);

  // Counter animation for 5 seconds
  useEffect(() => {
    let duration = 3000; // 3 seconds
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
    // Hero
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/images/homepage/hero/bg.png')",
        backgroundPosition: "top center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative container mx-auto px-8 flex items-center z-10 pt-24 md:pt-32">
        <div className="grid md:grid-cols-2 gap-10 items-center justify-center w-full">
          {/* LEFT SIDE */}
          <div className="text-white drop-shadow-lg ">

          <Reveal y={-100} duration={2}>
            <h1 className="text-4xl md:text-7xl font-extrabold leading-normal md:leading-relaxed drop-shadow-[6px_6px_0px_#000] ">
              <span className="text-white  ">EVERY</span>
              <span className="text-[#FACC15]  "> DOG </span>{" "}
              <span className="bg-gradient-to-r from-[#FACC15] to-[#F97316] text-transparent bg-clip-text ">
                DESERVES
              </span>{" "}
              <br />{" "}
              <span className="  bg-gradient-to-r from-[#F7734E] to-[#F44B80] text-transparent bg-clip-text">
                TO BE IN A LOVING
              </span>{" "}
              <br /> <span className="text-[#35FA25] ">HOME</span>
            </h1>
            </Reveal>
            <div>
              <p className="my-5   text-xl">
                Adopting a pet changes their life
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
                    alt="Pets icon"
                  />
                  Partner Shelters
                </p>
              </div>
            </div>

            {/* BUTTONS */} <Reveal y={100} x={100} duration={2}>
            <div className="mt-6 flex items-center gap-6 flex-wrap">

           
              <button className="bg-white text-primary font-semibold px-6 py-3 rounded-full shadow">
              <div className="flex justify-center items-center gap-4">
              <Image
                src="/images/homepage/button/icon.png"
                alt="Dog standing"
                width={1000}
                height={800}
                className="w-6 h-auto object-cover"
              />
              Contact Us
            </div>
              </button>
              <div
                className="
  flex items-center gap-3
  px-6 py-3
  bg-transparent  
  rounded-full
  transition-all
  group
"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-orange-500 ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                <span className="text-white font-bold text-lg">
                  Explore More
                </span>
              </div>
              
            </div>
            </Reveal>
          </div>

          {/* RIGHT SIDE */}
          {/* Add image or illustration here */}
        </div>
      </div>
    </section>
  );
}
