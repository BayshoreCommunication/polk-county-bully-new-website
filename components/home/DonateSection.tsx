// app/components/DonateSection.jsx
import Image from "next/image";
import Reveal from "../motion/Reveal";
export default function DonateSection() {
  return (
    <section
      className="relative 
    w-full
    bg-cover 
    bg-center 
    bg-no-repeat py-12" // Reduced padding
      style={{
        backgroundImage: "url('/images/homepage/donate/bg.webp')",
      }}
    >
      {/* TOP SHADOW */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div> {/* Reduced height */}

      {/* BOTTOM SHADOW */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div> {/* Reduced height */}

      <div className="relative container mx-auto px-6 z-10"> {/* Reduced padding */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"> {/* Reduced gap */}
          {/* Left Content */}
          <div className="text-white max-w-lg">
          <Reveal y={-100} duration={2}>
            <h2 className="text-3xl md:text-5xl mb-4 text-stroke-black drop-shadow-[6px_6px_0px_#000] tracking-wider"> {/* Reduced text size and margin */}
              DONATE
            </h2>
            </Reveal>
            <Reveal y={-100} duration={3}>
            <p className="text-sm md:text-base mb-6 drop-shadow-md text-white"> {/* Reduced margin */}
              Your generosity fills empty bowls, funds medical care, and keeps
              tails wagging. Every dollar brings us closer to saving another
              life.
            </p>
            </Reveal>
            <Reveal y={100} x={100} duration={2}>
            <a href="https://app.giveffect.com/charities/27544-polk-county-bully-project">
            <button className="flex items-center gap-2 bg-white text-primary font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg transition"> {/* Reduced padding */}
            <div className="flex justify-center items-center gap-3"> {/* Reduced gap */}
                    <Image
                      src="/images/homepage/button/icon.png"
                      alt="Dog standing"
                      width={1000}
                      height={800}
                      className="w-5 h-auto object-cover" // Smaller icon
                    />
                    Give Hope — Donate Now
                  </div>
            </button>
            </a>
            </Reveal>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="bg-white p-1 rounded-lg shadow-lg max-w-md w-full"> {/* Reduced padding, border radius, and shadow */}
            <Reveal y={100} x={100} duration={3}>
              <Image
                src="/images/homepage/donate/image.png"
                width={900}
                height={900}
                alt="Donation group photo"
                className="rounded-md" // Smaller border radius
              />
            </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* Optional gradient overlay at the top to match first section */}
      <div className="absolute top-0 w-full h-16 left-0 right-0 bg-gradient-to-t from-transparent to-white"></div> {/* Reduced height */}
      {/* Gradient overlay at the bottom for blending */}
      <div className="absolute bottom-0 w-full left-0 right-0 h-12 bg-gradient-to-b from-transparent to-white "></div> {/* Reduced height */}
    </section>
  );
}