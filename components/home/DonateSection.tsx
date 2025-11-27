// app/components/DonateSection.jsx
import Image from "next/image";
import Reveal from "../motion/Reveal";
export default function DonateSection() {
  return (
    <section
      className="relative w-full bg-cover bg-center py-20"
      style={{
        backgroundImage: "url('/images/homepage/donate/bg.png')",
      }}
    >
      {/* TOP SHADOW */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div>

      {/* BOTTOM SHADOW */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>

      <div className="relative container mx-auto px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="text-white max-w-lg">
          <Reveal y={-100} duration={2}>
            <h2 className="text-4xl md:text-6xl mb-6 text-stroke-black drop-shadow-[6px_6px_0px_#000] tracking-wider">
              DONATE
            </h2>
            </Reveal>
            <Reveal y={-100} duration={3}>
            <p className="text-sm md:text-base mb-8 drop-shadow-md text-white">
              Your generosity fills empty bowls, funds medical care, and keeps
              tails wagging. Every dollar brings us closer to saving another
              life.
            </p>
            </Reveal>
            <Reveal y={100} x={100} duration={2}>
            <a href="https://app.giveffect.com/charities/27544-polk-county-bully-project">
            <button className="flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition">
              <span>🐾</span> Give Hope — Donate Now
            </button>
            </a>
            </Reveal>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="bg-white p-2 rounded-xl shadow-xl max-w-md w-full">
            <Reveal y={100} x={100} duration={3}>
              <Image
                src="/images/homepage/donate/image.png"
                width={900}
                height={900}
                alt="Donation group photo"
                className="rounded-lg"
              />
            </Reveal>
            </div>
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
