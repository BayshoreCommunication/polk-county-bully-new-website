"use client";

import Image from "next/image";
import React from "react";
import Reveal from "../motion/Reveal";

export default function AdoptionSection() {
  return (
    <main className="relative w-full min-h-[70vh] overflow-x-hidden">

      {/* Background image using NEXT IMAGE */}
      <Image
        src="/images/homepage/adoption/bg.webp"
        alt="Adoption background"
        fill
        priority
        className="object-cover object-center"
        
      />

      {/* Optional overlay */}
      {/* <div className="absolute inset-0 bg-black/40"></div> */}

      <section className="relative container mx-auto px-6 md:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Images */}
          <div className="flex gap-4 mt-10 md:mt-0 flex-wrap justify-center">
            <div className="overflow-hidden rounded-lg max-w-[280px]">
              <Image
                src="/images/homepage/adoption/dog1.png"
                alt="Dog in sweater"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />

              <p className="text-xs text-black mt-2">
                Trusted by shelters and families across the country
              </p>

              <p className="text-xs text-white mt-3">
                Building hope and lasting bonds through rescue, care, and
                compassion.
              </p>
            </div>

            <div className="overflow-hidden rounded-lg max-w-[280px]">
              <Image
                src="/images/homepage/adoption/dog2.png"
                alt="Standing dog"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-white font-inter">
            <Reveal y={-100} duration={2}>
              <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-[4px_4px_0px_#000]">
                <span className="text-white">Why </span>
                <span className="text-orange-500">Adoption Matters </span>
                <span className="text-pink-400">More Than Ever</span>
              </h2>
            </Reveal>

            <p className="text-orange-300 font-semibold mb-6">
              Every Pet Deserves A Second Chance
            </p>

            <Reveal y={100} duration={2}>
              <p className="mb-6 text-white/90">
                Every pet deserves love, safety, and a fresh start. At Bully
                Project Rescue, we provide medical care, compassion, and
                dedicated foster homes—helping each rescued dog heal, trust
                again, and find their forever family.
              </p>
            </Reveal>

            <Reveal y={100} x={100} duration={2}>
              <ul className="space-y-4">
                {[
                  {
                    title: "Save a Life",
                    text: "Give a loving animal a second chance to live happily",
                  },
                  {
                    title: "Health Checked & Vaccinated",
                    text: "Every pet receives full vetting and medical care",
                  },
                  {
                    title: "Already Trained & Socialized",
                    text: "Most pets come with basic training and good manners",
                  },
                  {
                    title: "Affordable & Ethical Choice",
                    text: "Adoption fees support rescue operations and shelters",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-orange-400 font-bold">✔</span>
                    <div>
                      <span className="font-semibold block font-inter text-black">{item.title}</span>
                      <span className="text-white/80 font-inter">{item.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
