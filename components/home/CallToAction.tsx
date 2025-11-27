import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import Reveal from "../motion/Reveal";


export default function CallToAction() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-12 md:py-20  overflow-hidden"
      style={{
        backgroundImage:
          "url('/images/homepage/CallToAction/CallToActionBg.png')",
      }}
    >
      <div className="container mx-auto ">
        <div className="">
          {/* Card 1 */}
          <div
            className=" bg-cover bg-center bg-white bg-no-repeat rounded-2xl p-6 lg:p-10 shadow-xl text-center z-50"
            style={{
              backgroundImage:
                "url('/images/homepage/CallToAction/CTACardBg.png')",
            }}
          >
            <Reveal y={-100} duration={2}>
            <h2 className="text-center text-4xl  md:text-6xl  text-black  mb-3 drop-shadow-[6px_6px_0px_#fff] tracking-wider">
              Spread the Word
            </h2>
            </Reveal>
            <Reveal y={-100} duration={3}>
            <p className="text-center text-black/90 max-w-xl mx-auto mb-6">
              Share our mission, tell their stories, and help us reach the
              hearts of more people who care. One post can change a life.
            </p>
            </Reveal>
            <Reveal y={100} duration={2}>
            <div className="w-full flex justify-center gap-3">
              <Link
                href={"#"}
                className="w-9 lg:w-12 h-9 lg:h-12 rounded-full bg-white hover:text-[#009DCA] duration-300 drop-shadow-[0px_6px_0px_#000] flex justify-center items-center"
              >
                <FaFacebookF size={20} />
              </Link>
              <Link
                href={"#"}
                className="w-9 lg:w-12 h-9 lg:h-12 rounded-full bg-white hover:text-[#009DCA] duration-300 drop-shadow-[0px_6px_0px_#000] flex justify-center items-center"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                href={"#"}
                className="w-9 lg:w-12 h-9 lg:h-12 rounded-full bg-white hover:text-[#009DCA] duration-300 drop-shadow-[0px_6px_0px_#000] flex justify-center items-center"
              >
                <FaTiktok size={20} />
              </Link>
              <Link
                href={"#"}
                className="w-9 lg:w-12 h-9 lg:h-12 rounded-full bg-white hover:text-[#009DCA] duration-300 drop-shadow-[0px_6px_0px_#000] flex justify-center items-center"
              >
                <FaYoutube size={20} />
              </Link>
            </div>
            </Reveal>
            {/* Button */}
            
            <div className="flex justify-center mt-8">
            <Reveal y={100} x={100} duration={3}>
              <button className="bg-white text-primary font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition flex items-center gap-2">
                <span className="text-2xl">🐾</span> Contact Us
              </button>
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
