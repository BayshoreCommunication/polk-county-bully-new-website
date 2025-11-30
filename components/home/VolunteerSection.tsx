import Image from "next/image";
import Reveal from "../motion/Reveal";

export default function VolunteerSection() {
  return (
    <section
      className="relative 
    w-full 
    bg-cover 
    bg-center 
    bg-no-repeat py-20 px-6"
      style={{ backgroundImage: "url('/images/homepage/volunteer/bg.webp')" }}
    >
      {/* TOP SHADOW */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div>

      {/* BOTTOM SHADOW */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>

      {/* Content */}
      <div className="relative container mx-auto z-10">
        {/* Heading + Description */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 gap-6">
          {/* Title */}
          <Reveal y={-100} duration={2}>
            <h2 className="text-4xl md:text-6xl text-white drop-shadow-[6px_6px_0px_#000] mb-4 tracking-wider">
              Volunteer
            </h2>
          </Reveal>
          <Reveal y={-100} duration={2}>
            {/* Description */}
            <p className="text-white max-w-2xl text-sm md:text-base leading-relaxed">
              Every helping hand creates a ripple of change. Whether it’s
              transport, events, or sharing a post — your time can be the reason
              a dog finds their forever home.
            </p>
          </Reveal>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative w-full rounded-md overflow-hidden">
            <Reveal y={100} x={100} duration={3}>
              <Image
                src="/images/homepage/volunteer/left.webp"
                alt="Volunteer Image 1"
                width={1000}
                height={800}
                className="object-cover w-full h-auto"
              />
            </Reveal>
          </div>

          <div className="relative w-full rounded-md overflow-hidden ">
            <Reveal y={100} x={100} duration={3}>
              <Image
                src="/images/homepage/volunteer/right.webp"
                alt="Volunteer Image 2"
                width={1000}
                height={800}
                className="object-cover w-full h-auto"
              />
            </Reveal>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <Reveal y={100} x={100} duration={3}>
            <a href="https://www.giveffect.com/charities/27544-polk-county-bully-project/volunteer_application">
              <button className="bg-white text-primary font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition flex items-center gap-2">
                <div className="flex justify-center items-center gap-4">
                  <Image
                    src="/images/homepage/button/icon.png"
                    alt="Dog standing"
                    width={1000}
                    height={800}
                    className="w-6 h-auto object-cover"
                  />
                  Join Our Volunteer Family
                </div>
              </button>
            </a>
          </Reveal>
        </div>
      </div>
      {/* Optional gradient overlay at the top to match first section */}
      <div className="absolute top-0 w-full h-32 left-0 right-0 bg-gradient-to-t from-transparent to-white -z-10"></div>
      <div className="absolute bottom-0 w-full left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white -z-10"></div>
    </section>
  );
}
