"use client";
import Image from "next/image";
import Reveal from "../motion/Reveal";
import { motion } from "framer-motion";
export default function BullyProjectSection() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage: "url('/images/aboutpage/bullyproject/bg.webp')",
      }}
    >
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* IMAGES */}

          <div className=" overflow-hidden ">
            <Reveal y={100} x={100} duration={3}>
              <Image
                src="/images/aboutpage/bullyproject/founder.png"
                alt="Founder Left"
                width={1000}
                height={800}
                className="w-full max-w-2xl h-auto object-cover"
              />
            </Reveal>
            <p className="text-xs text-gray-200 md:mt-[-30px] mt-[-0px]">
              Bully Project Rescue Founder: Shannon Medina (Left)
            </p>
            <p className="text-xs text-gray-200 mt-2">Angie Lorio (Right)</p>
          </div>

          {/* TEXT CONTENT */}
          <div>
            <Reveal y={-100} duration={2}>
            <h2 
            
            
            className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-[6px_6px_0px_#000] tracking-wider">
              <span className="text-[#1F1F1F] px-2">POLK</span>{" "}
              <span className="bg-gradient-to-r from-[#F97316] to-[#FACC15] text-transparent bg-clip-text px-2">
                COUNTRY
              </span>{" "}
              <span className="bg-gradient-to-r from-[#F44B80] to-[#F7734E] text-transparent bg-clip-text px-2">
                BULLY PROJECT
              </span>
            </h2>
            </Reveal>
            <Reveal y={100} duration={3}>
            <p className="text-gray-100 leading-relaxed mb-4">
              We are a non-profit 501c3 rescue organization with a small shelter
              that works to find forever homes for this misunderstood breed.
              Through local adoption and rescue partnerships we are giving these
              dogs their chance at a happily ever after. We’re dedicated to our
              goal of reducing euthanasia rates of these dogs in Polk County. We
              pulled half of the dogs pulled in the county by rescues in 2022.
            </p>
            </Reveal>
          </div>
        </div>
        <div className="">
          <div className="max-w-[1640px] px-8 my-8 md:my-16 mx-auto"></div>
        </div>
      </div>
      {/* Optional gradient overlay at the top to match first section */}
      <div className="absolute top-0 w-full h-32 left-0 right-0 bg-gradient-to-t from-transparent to-white"></div>
      {/* Gradient overlay at the bottom for blending */}
      <div className="absolute bottom-0 w-full left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white "></div>
    </section>
  );
}
