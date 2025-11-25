// app/components/SponsorSection.jsx
import Image from "next/image";

export default function SponsorSection() {
  return (
    <section
      className="py-48 bg-cover bg-center /* Mobile background */
        bg-[url('/images/homepage/sponsor/bg-mobile.png')]

        /* Tablet & Desktop background */
        sm:bg-[url('/images/homepage/sponsor/bg.png')]"
      //   style={{
      //     backgroundImage:
      //       "url('/images/homepage/sponsor/bg.png')"
      //   }}
    >
      {/* TOP SHADOW */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div>

      {/* BOTTOM SHADOW */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>

      {/* Center text block */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white  mb-4 text-stroke-black drop-shadow-[6px_6px_0px_#000]">
          Sponsor A Dog
        </h2>

        <p className="text-white text-sm md:text-base mb-8 drop-shadow-lg leading-relaxed px-4">
          While they wait for their forever home, you can be their guardian
          angel. Your sponsorship covers food, vet visits, and care for a dog
          who's still dreaming of a family.
        </p>

        <button className="flex items-center gap-2 mx-auto bg-white text-primary px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition">
          <span>🐾</span> Sponsor A Rescue Dog
        </button>
      </div>
    </section>
  );
}
