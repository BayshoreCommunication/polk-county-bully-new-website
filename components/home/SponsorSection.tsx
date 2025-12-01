"use client";
import { useState } from "react";
import Image from "next/image";
import Reveal from "../motion/Reveal";

export default function SponsorSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MAIN SECTION */}
      <section
        className="py-32 relative 
    w-full
    bg-cover 
    bg-center 
    bg-no-repeat
        bg-[url('/images/homepage/sponsor/bg-mobile.png')]
        sm:bg-[url('/images/homepage/sponsor/bg.png')]"
      >
        {/* CENTER TEXT */}
        <div className="text-center max-w-2xl mx-auto md:mt-32 mt-[-60px] md:max-h-[30vh] max-h-[15vh]"> 
          <Reveal y={-100} duration={2}>
            <h2 className="text-3xl md:text-5xl text-white mb-3 text-stroke-black drop-shadow-[6px_6px_0px_#000] tracking-wider">
              Sponsor A Dog
            </h2>
          </Reveal>

          <Reveal y={-100} duration={3}>
            <p className="text-white text-sm md:text-base mb-6 drop-shadow-lg leading-relaxed px-4">
              While they wait for their forever home, you can be their guardian
              angel. Your sponsorship covers food, vet visits, and care for a dog
              who's still dreaming of a family.
            </p>
          </Reveal>

          <Reveal y={100} x={100} duration={2}>
            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 mx-auto bg-white text-primary px-5 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition" 
            >
              <div className="flex justify-center items-center gap-3">
                    <Image
                      src="/images/homepage/button/icon.png"
                      alt="Dog standing"
                      width={1000}
                      height={800}
                      className="w-5 h-auto object-cover" // Smaller icon
                    />
                    Sponsor A Rescue Dog
                  </div>
            </button>
          </Reveal>
        </div>
      </section>

      {/* =========================
          MODAL
      ========================== */}
      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
          {/* MODAL BOX */}
          <div className="bg-white w-full max-w-3xl rounded-xl shadow-xl p-6 relative animate-fadeIn"> 
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-gray-600 bg-none text-xl rounded-full p-1 border-none" 
            >
              ✕
            </button>

            {/* IMAGE HEADER */}
            <div className="w-full flex flex-col justify-center items-center mb-4">
              <h1 className="text-3xl my-4">SPONSOR A DOG</h1>
              <p className="text-center">While they wait for their forever home, you can be their guardian angel. Your sponsorship covers food, vet visits, and care for a dog who's still dreaming of a family.</p>
            </div>

            {/* FORM */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
              <input
                type="text"
                placeholder="Name"
                className="border p-2 rounded-lg w-full" 
              />

              <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded-lg w-full" 
              />

              <input
                type="text"
                placeholder="Phone"
                className="border p-2 rounded-lg w-full" 
              />

              <select className="border p-2 rounded-lg w-full"> 
                <option>Amount</option>
                <option>$10</option>
                <option>$25</option>
                <option>$50</option>
                <option>$100</option>
              </select>

              <textarea
                placeholder="Message..."
                className="border p-2 rounded-lg w-full md:col-span-2 h-24" 
              />

              {/* SUBMIT BUTTON */}
              <div className="flex justify-center items-center w-full col-span-2">
              <button
                type="submit"
                className="mx-auto mt-1 bg-white text-primary px-5 py-2 rounded-full shadow flex items-center justify-center gap-2 hover:shadow-lg transition" 
              >
                <div className="flex justify-center items-center gap-3"> 
                    <Image
                      src="/images/homepage/button/icon.png"
                      alt="Dog standing"
                      width={1000}
                      height={800}
                      className="w-5 h-auto object-cover" 
                    />
                    Send
                  </div>
              </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* fade animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
      `}</style>
    </>
  );
}