import Image from "next/image";
import Reveal from "../motion/Reveal";
import Link from "next/link";

export default function SupportSection() {
  return (
    <section
      className="relative 
    w-full 
    bg-cover 
    bg-center 
    bg-no-repeat py-20 px-8"
      style={{ backgroundImage: "url('/images/homepage/support/bg.webp')" }}
    >
      <div className="flex flex-col justify-center items-center text-center">
        <Reveal y={-100} duration={2}>
          <h2 className="text-4xl md:text-7xl mb-4 text-center text-stroke-white drop-shadow-[6px_6px_0px_#000]">
            <span className="bg-white text-transparent bg-clip-text  ">
              HOW{" "}
            </span>
            <span className="bg-gradient-to-r from-[#F7734E] to-[#F44B80] text-transparent bg-clip-text  ">
              YOU CAN
            </span>
            <span className="bg-gradient-to-r from-[#FACC15] to-[#2BFD27] text-transparent bg-clip-text  ">
              {" "}
              SUPPORT US
            </span>
          </h2>
        </Reveal>

        <Reveal y={-100} duration={3}>
          <p className="text-sm md:text-base opacity-90 mb-12 text-center w-full max-w-2xl text-white">
            Every wagging tail, every second chance, every life saved — it all
            begins with someone like you. Your kindness keeps our mission alive.
            Here's how you can be part of their story:
          </p>
        </Reveal>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* LEFT CONTENT */}
        <div className="text-white max-w-xl">
          <div className="max-w-xl">
            <Reveal y={-100} duration={2}>
              <h3 className="text-4xl md:text-6xl font-extrabold mb-4 text-stroke-black drop-shadow-[6px_6px_0px_#000]">
                ADOPT
              </h3>
            </Reveal>

            <Reveal y={-100} duration={3}>
              <p className="text-white text-opacity-90 mb-6 text-sm md:text-base">
                When you adopt, you're not just rescuing a dog — you're giving
                them the life they've always deserved. A warm bed, a gentle
                touch, and a family to call their own.
              </p>
            </Reveal>
            <Reveal y={100} x={100} duration={2}>
              <a href="https://petstablished.com/adoptions/personal-information?application_type=Adopt&donation_section=false&form_id=24575&form_type=generic&generic_form_id=24575&pet_id=715879&section=1&selected_pets=false">
                <button className="bg-white text-primary font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
                  <div className="flex justify-center items-center gap-4">
                    <Image
                      src="/images/homepage/button/icon.png"
                      alt="Dog standing"
                      width={1000}
                      height={800}
                      className="w-6 h-auto object-cover"
                    />
                    Adopt Today
                  </div>
                </button>
              </a>
            </Reveal>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full max-w-xl">
          <Reveal y={100} x={100} duration={3}>
            <Image
              src="/images/homepage/support/dogs.png"
              alt="Dog"
              width={700}
              height={700}
              className="object-contain w-full"
            />
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
