"use client";

import Image from "next/image";

export default function EmbeddedSite() {
  return (
    <section className="relative w-full lg:pt-[100px] pb-12 overflow-hidden">

      {/* Background Image using Next.js */}
      <Image
        src="/images/homepage/embedded/bg.webp"
        alt="Embedded section background"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Optional overlay for text visibility */}
      {/* <div className="absolute inset-0 bg-black/20"></div> */}

      <div className="relative container mx-auto px-6 md:px-8 py-12">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <iframe
            loading="lazy"
            src="https://www.wagtopia.com/search/org?id=1233589&iframe=normal"
            className="
              w-full
              rounded-3xl
              border-none
              bg-white
            "
            style={{
              height: "80vh", // Responsive height
              minHeight: 600,
            }}
          />
        </div>
      </div>
    </section>
  );
}
