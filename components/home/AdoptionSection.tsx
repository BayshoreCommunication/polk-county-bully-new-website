"use client";

import Image from "next/image";
import React from "react";

export default function AdoptionSection() {
  return (
    <main
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/homepage/adoption/bg.png')" }}
    >
      <section className="container mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Images */}
          <div className="flex  gap-4 mt-20">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/images/homepage/adoption/dog1.png"
                alt="Dog in fall sweater"
                width={1000}
                height={800}
                className="w-[300px] h-auto object-cover"
              />
              <p className="max-w-[300px] text-xs">
                Trusted by shelters and families across the country
              </p>
              <p className="max-w-[300px] mt-3 text-white text-xs">
                Building hope and lasting bonds through rescue, care, and
                compassion.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/images/homepage/adoption/dog2.png"
                alt="Dog standing"
                width={1000}
                height={800}
                className="w-[300px] h-auto object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-gray-900 font-poppins">
            <h2 className="text-4xl md:text-7xl font-bold mb-4 drop-shadow-[6px_6px_0px_#000]">
              <span className="text-white">Why </span>
              <span className="text-orange-500">Adoption Matters </span>
              <span className="text-pink-500">More Than Ever</span>
            </h2>
            <p className="text-orange-400 font-semibold mb-6">
              Every Pet Deserves A Second Chance
            </p>
            <p className="mb-6 text-white">
              Every pet deserves love, safety, and a fresh start. At Bully
              Project Rescue, we provide medical care, compassion, and dedicated
              foster homes—helping each rescued dog heal, trust again, and find
              their forever family.
            </p>

            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-2">
                <span className="text-black-500 font-bold">✔</span>
                <div className="font-poppins">
                  <span className="font-semibold">
                    Save a Life <br />
                  </span>
                  <span className="text-white italic">
                    {" "}
                    Give a loving animal a second chance to live happily
                  </span>
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-black-500 font-bold">✔</span>
                <div className="font-poppins">
                  <span className="font-semibold">
                    Health Checked & Vaccinated <br />
                  </span>{" "}
                  <span className="text-white italic">
                    All pets go through thorough vetting before adoption
                  </span>
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-black-500 font-bold">✔</span>
                <div className="font-poppins">
                  <span className="font-semibold">
                    Already Trained & Socialized <br />
                  </span>{" "}
                  <span className="text-white italic">
                    Most adopted pets come with basic training and house
                    behavior
                  </span>
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-black-500 font-bold">✔</span>
                <div className="font-poppins">
                  <span className="font-semibold">
                    Affordable & Ethical Choice <br />
                  </span>{" "}
                  <span className="text-white italic">
                    {" "}
                    Adoption fees are lower than breeder prices and support
                    local
                  </span>
                  shelters
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
