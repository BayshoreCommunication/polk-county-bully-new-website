"use client";

import Image from "next/image";
import Reveal from "../motion/Reveal";

export default function RescueSection() {
  return (
    <section
      className="
        relative 
        w-full 
        bg-cover 
        bg-center 
        bg-no-repeat
        py-8 md:py-10  
        px-6  
        min-h-[30vh]
      "
      style={{
        backgroundImage: "url('/images/homepage/rescue/bg-main.webp')",
        backgroundSize: "cover", // Full background image
        backgroundPosition: "center", // Center position
      }}
    >
      <div className="relative container mx-auto flex flex-col md:flex-row items-center gap-5">
        {/* LEFT - Dogs Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[550px]">
          <Reveal y={100} x={100} duration={2}>
            <Image
              src="/images/homepage/rescue/dogs.png"
              alt="Rescue Dogs"
              width={1000}
              height={800}
              className="w-full h-auto "
            />
            </Reveal>
          </div>
        </div>

        {/* RIGHT - TEXT AREA */}
        <div className="w-full md:w-1/2 text-white">
        <Reveal y={-100} duration={2}>
          <h2 className="text-4xl md:text-6xl leading-tight mb-3 text-stroke-black drop-shadow-[6px_6px_0px_#000] tracking-wider">
            <span className="bg-gradient-to-r from-[#F44B80] to-[#F5724B] text-transparent bg-clip-text  ">
              Rescue, Care And{" "}
            </span>{" "}
            <span className="bg-gradient-to-r from-[#F97316] to-[#FACC15] text-transparent bg-clip-text  ">
              Hope
              <br /> For Polk County's
            </span>{" "}
            <span className="bg-white text-transparent bg-clip-text">
              Pit Bulls
            </span>
          </h2>
          </Reveal>
          {/* Feature Item 1 */}
          <Reveal y={100} duration={2}>
          <div className="flex items-start gap-2 mb-3">
            <div className=" text-black flex items-center justify-center rounded-full font-bold">
              <Image
                src="/images/homepage/rescue/icon1.png"
                alt="Rescue Dogs"
                width={1000}
                height={800}
                className="md:w-12 h-auto  w-[80px]"
              />
            </div>
            <div>
              <h3 className="text-base font-semibold mb-1 font-inter">
                Promoting "Adopt, Don't Shop"
              </h3>
              <p className="text-white/90 text-xs leading-relaxed">
                We lead by example by showing how adoption gives loving dogs a
                second chance, we encourage families to skip breeders and pet
                stores.
              </p>
            </div>
          </div>
          </Reveal>
          {/* Feature Item 2 */}
          <Reveal y={100} duration={3}>
          <div className="flex items-start gap-2">
            <div className=" text-black flex items-center justify-center rounded-full font-bold">
              <Image
                src="/images/homepage/rescue/icon2.png"
                alt="Rescue Dogs"
                width={1000}
                height={800}
                className="md:w-12 h-auto w-[80px]"
              />
            </div>
            <div>
              <h3 className="text-base font-semibold mb-1 font-inter">
                Advocating for Stronger Laws
              </h3>
              <p className="text-white/90 text-xs leading-relaxed">
                We support legislation that limits irresponsible breeding and
                requires proper care, registration, and accountability for
                breeders.
              </p>
            </div>
          </div>
          </Reveal>
        </div>
      </div>

      {/* Gradient overlay at the bottom for blending - Mobile specific */}
      <div className="absolute bottom-0 w-full left-0 right-0 h-4 md:h-6 bg-gradient-to-b from-transparent to-white "></div>
    </section>
  );
}