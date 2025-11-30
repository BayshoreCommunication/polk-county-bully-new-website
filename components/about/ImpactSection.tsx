"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import CountUp from "react-countup";


export default function ImpactSection() {
const [inView, setInView] = useState(false);
const [isVideoPlaying, setIsVideoPlaying] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const section = document.getElementById("counter-section");
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setInView(true);
      }
    }
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage: "url('/images/aboutpage/impact/bg.webp')"
      }}
    >
      <div className="container mx-auto px-8">

        {/* TEXT CONTENT */}
        <div className="max-w-8xl text-white space-y-4 mb-12 text-center">
          <p>
            Our local shelter was deemed per 2022 statistics as the #1 Kill shelter in
            the state of Florida. We are working closely with Animal Control to change
            these statistics, ultimately PBCP is working towards a NoKill shelter in
            Polk County. Currently, dogs deemed Pit Bull are rescue only.
          </p>
          <p>
            Through education and practical care, we're changing the stigma that
            surrounds pit bulls and providing care. Spay and neuter is a huge part of
            stemming the flow of dogs that come in from the county to the shelter.
          </p>
        </div>

        {/* Counter Section */}
        <div
          id="counter-section"
          className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center mt-12 bg-primary py-8 px-8 max-w-4xl w-full mx-auto rounded-tl-3xl rounded-tr-3xl justify-between"
        >
          <div>
            <h3 className="text-3xl md:text-5xl font-bold text-[#FFFFFF] font-inter">
              {inView && <CountUp end={26} duration={3} separator="," />}K+
            </h3>
            <p className="text-gray-600">Dog Adopted</p>
          </div>

          <div className="hidden lg:block w-[1px] h-full bg-[#D1D3D8] mx-auto"></div>
          <div>
            <h3 className="text-3xl md:text-5xl font-bold text-[#FFFFFF] font-inter">
              {inView && <CountUp end={15} duration={3} separator="," />}K+
            </h3>
            <p className="text-gray-600">Shelters & Rescues</p>
          </div>
          <div className="hidden lg:block w-[1px] h-full bg-[#D1D3D8] mx-auto"></div>
          <div>
            <h3 className="text-3xl md:text-5xl font-bold text-[#FFFFFF] font-inter">
              {inView && <CountUp end={18} duration={3} separator="," />}+
            </h3>
            <p className="text-gray-600">Years of Impact</p>
          </div>
        </div>

        {/* Video Section */}
        <div className="flex justify-center items-center">
          <div className="relative  rounded-2xl overflow-hidden">
            {!isVideoPlaying ? (
              <>
                <Image
                  src="/images/aboutpage/impact/container.png"
                  alt="Video Thumbnail"
                  width={1000}
                  height={563}
                  className="h-auto w-[1000px]"
                />
                <button
                  type="button"
                  onClick={() => setIsVideoPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center outline-none border-none hover:border-none"
                  aria-label="Play video"
                >
                  <div className="bg-white p-4 rounded-full shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-10 h-10 text-primary"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>
              </>
            ) : (
              <iframe
                className="h-[563px] w-[1000px] "
                src="https://www.youtube.com/embed/BCqJCOWUc-Q?autoplay=1&mute=1&rel=0&playsinline=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>
        </div>

      </div>

      {/* Optional gradient overlay at the top to match first section */}
      <div className="absolute top-0 w-full h-32 left-0 right-0 bg-gradient-to-t from-transparent to-white"></div>
      {/* Gradient overlay at the bottom for blending */}
      <div className="absolute bottom-0 w-full left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white "></div>
    </section>
  );
}
