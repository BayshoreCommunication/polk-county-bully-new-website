"use client";

import Image from "next/image";

export default function EmbeddedSite() {
  return (
    <section className="relative w-full lg:pt-[60px] pb-4 md:pb-8 overflow-hidden min-h-[90vh]"> {/* Reduced mobile bottom padding */}
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

      <div className="relative container mx-auto px-4 md:px-8 py-6 md:py-8 "> {/* Reduced mobile padding */}
        <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl"> {/* Smaller on mobile */}
          <iframe
            loading="lazy"
            src="https://www.wagtopia.com/search/org?id=1233589&iframe=normal"
            className="
              w-full
              rounded-xl md:rounded-2xl
              border-none
              bg-white
            "
            style={{
              height: "90vh", // Smaller on mobile
              minHeight: 400, // Smaller min-height on mobile
            }}
          />
        </div>
      </div>
    </section>
  );
}