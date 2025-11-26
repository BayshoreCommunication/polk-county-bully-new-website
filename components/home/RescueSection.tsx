"use client";

import Image from "next/image";

export default function RescueSection() {
  return (
    <section
      className="
        relative w-full 
        bg-cover bg-center bg-no-repeat 
        py-12 md:py-20 
        px-8
      "
      style={{
        backgroundImage: "url('/images/homepage/rescue/bg-main.png')",
      }}
    >
      {/* TOP SHADOW */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div>

      {/* BOTTOM SHADOW */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/70 via-pink-600/60 to-yellow-500/70"></div>

      <div className="relative max-w-[1640px] mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* LEFT - Dogs Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[700px]">
            <Image
              src="/images/homepage/rescue/dogs.png"
              alt="Rescue Dogs"
              width={1000}
              height={800}
              className="w-full h-auto drop-shadow-xl"
            />
          </div>
        </div>

        {/* RIGHT - TEXT AREA */}
        <div className="w-full md:w-1/2 text-white">
          <h2 className="text-3xl md:text-7xl leading-tight mb-6  text-stroke-black drop-shadow-[6px_6px_0px_#000] tracking-wider">
            <span className="bg-gradient-to-r from-[#F44B80] to-[#F5724B] text-transparent bg-clip-text  ">
              Rescue, Care And{" "}
            </span>{" "}
            <span className="bg-gradient-to-r from-[#F97316] to-[#FACC15] text-transparent bg-clip-text  ">
              Hope
              <br /> For Polk County’s
            </span>{" "}
            <span className="bg-white text-transparent bg-clip-text">
              Pit Bulls
            </span>
          </h2>

          {/* Feature Item 1 */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 text-black flex items-center justify-center rounded-full font-bold">
              <Image
                src="/images/homepage/rescue/icon1.png"
                alt="Rescue Dogs"
                width={1000}
                height={800}
                className="w-full h-auto drop-shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1 font-inter">
                Promoting “Adopt, Don’t Shop”
              </h3>
              <p className="text-white/90 text-sm md:text-base">
                We lead by example by showing how adoption gives loving dogs a
                second chance, we encourage families to skip breeders and pet
                stores.
              </p>
            </div>
          </div>

          {/* Feature Item 2 */}
          <div className="flex items-start gap-4">
            <div className="w-16 text-black flex items-center justify-center rounded-full font-bold">
              <Image
                src="/images/homepage/rescue/icon2.png"
                alt="Rescue Dogs"
                width={1000}
                height={800}
                className="w-full h-auto drop-shadow-xl"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-1 font-inter">
                Advocating for Stronger Laws
              </h3>
              <p className="text-white/90 text-sm md:text-base">
                We support legislation that limits irresponsible breeding and
                requires proper care, registration, and accountability for
                breeders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
