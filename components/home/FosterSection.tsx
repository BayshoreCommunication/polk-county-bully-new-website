import Image from "next/image";
import Link from "next/link";
import Reveal from "../motion/Reveal";

export default function FosterSection() {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat py-20 px-6"
      style={{
        backgroundImage: "url('/images/homepage/foster/bg.webp')",
      }}
    >
      {/* TOP SHADOW */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div>

      {/* BOTTOM SHADOW */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>

      {/* Content */}
      <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
        {/* Left Image */}
        <div className="relative flex flex-col items-start gap-4">
          <div className="relative rounded-md overflow-hidden w-full max-w-2xl">
            <Reveal y={100} x={100} duration={2}>
              <Image
                src="/images/homepage/foster/dog.png"
                alt="Foster Dog"
                width={1000}
                height={800}
                className="w-full h-auto object-cover rounded-md"
              />
            </Reveal>
          </div>
        </div>

        {/* Right Content */}
        <div className="text-white max-w-lg">
          <Reveal y={-100} duration={2}>
            <h2 className="text-4xl md:text-6xl mb-4 drop-shadow-[6px_6px_0px_#000] tracking-wider">
              FOSTER
            </h2>
          </Reveal>
          <Reveal y={-100} duration={3}>
            <p className="text-sm md:text-base opacity-90 mb-8 leading-relaxed">
              Fostering saves lives. One open home means one more dog pulled
              from danger. We take care of the supplies; you give them love,
              patience, and hope.
            </p>
          </Reveal>
          <Reveal y={100} x={100} duration={2}>
            <a href="https://petstablished.com/adoptions/personal-information?application_type=Foster&donation_section=false&form_id=24574&form_type=generic&generic_form_id=24574&pet_id=715879&section=1&selected_pets=false">
              <button className="bg-white text-primary font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition flex items-center gap-2">
                <div className="flex justify-center items-center gap-4">
                  <Image
                    src="/images/homepage/button/icon.png"
                    alt="Dog standing"
                    width={1000}
                    height={800}
                    className="w-6 h-auto object-cover"
                  />
                  Become A Foster Hero
                </div>
              </button>
            </a>
          </Reveal>
        </div>
      </div>
      {/* Optional gradient overlay at the top to match first section */}
      <div className="absolute top-0 w-full h-32 left-0 right-0 bg-gradient-to-t from-transparent to-white"></div>
      {/* Gradient overlay at the bottom for blending */}
      <div className="absolute bottom-0 w-full left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white "></div>
    </section>
  );
}
