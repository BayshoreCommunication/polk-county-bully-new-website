import Image from "next/image";

export default function Testimonials() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[70vh] overflow-hidden"
      style={{ backgroundImage: "url('/images/homepage/testimonials/bg.png')" }}
    >
      {/* TOP BLUR */}
      <div className="absolute top-0 left-0 right-0 h-[120px] bg-gradient-to-b from-white/40 to-transparent backdrop-blur-sm pointer-events-none" />

      {/* BOTTOM BLUR */}
      <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-white/40 to-transparent backdrop-blur-sm pointer-events-none" />
        <h2 className="text-center text-4xl  md:text-7xl font-extrabold text-white drop-shadow-lg mb-3">
          Our{" "}
          <span className="bg-gradient-to-r from-[#F7734E] to-[#F44B80] text-transparent bg-clip-text [filter:drop-shadow(0_2px_4px_rgba(0,0,0,5))]">
            {" "}
            Client{" "}
          </span>{" "}
          <span className="bg-gradient-to-r from-[#FACC15] to-[#2BFD27] text-transparent bg-clip-text [filter:drop-shadow(0_2px_4px_rgba(0,0,0,5))]">
            Testimonial
          </span>
        </h2>
        <p className="text-center text-white/90 max-w-xl mx-auto mb-10">
          Hear from families who've found their perfect furry companions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div
            className=" bg-cover bg-center bg-white bg-no-repeat rounded-2xl p-6 shadow-xl text-center z-50"
            style={{
              backgroundImage:
                "url('/images/homepage/testimonials/card-bg.png')",
            }}
          >
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
              <Image
                src="/images/homepage/testimonials/avatar3.png"
                alt="client photo"
                width={80}
                height={80}
              />
            </div>
            <h3 className="text-xl font-bold mb-2 font-poppins">
              Charlie Smith
            </h3>
            <p className="text-gray-700 text-sm mb-4">
              Adopting through Bully Project Rescue was seamless and
              heartwarming. Our new pup feels like part of the family already!
            </p>
            <p className="text-yellow-500 text-lg">★★★★★</p>
          </div>

          {/* Card 2 */}
          <div
            className=" bg-cover bg-center bg-white bg-no-repeat rounded-2xl p-6 shadow-xl text-center z-50"
            style={{
              backgroundImage:
                "url('/images/homepage/testimonials/card-bg.png')",
            }}
          >
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 ">
              <Image
                src="/images/homepage/testimonials/avatar2.png"
                alt="client photo"
                width={1000}
                height={800}
              />
            </div>
            <h3 className="text-xl font-bold mb-2 font-poppins">Dany Monson</h3>
            <p className="text-gray-700 text-sm mb-4">
              The team was so supportive and caring. They matched us with the
              perfect dog, and the entire process felt personal and safe.
            </p>
            <p className="text-yellow-500 text-lg">★★★★★</p>
          </div>

          {/* Card 3 */}
          <div
            className=" bg-cover bg-center bg-white bg-no-repeat rounded-2xl p-6 shadow-xl text-center z-50"
            style={{
              backgroundImage:
                "url('/images/homepage/testimonials/card-bg.png')",
            }}
          >
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
              <Image
                src="/images/homepage/testimonials/avatar1.png"
                alt="client photo"
                width={80}
                height={80}
              />
            </div>
            <h3 className="text-xl font-bold mb-2 font-poppins">
              Sacha Dubois
            </h3>
            <p className="text-gray-700 text-sm mb-4">
              Fostering with Bully Project Rescue was a life‑changing
              experience. I got to help dogs in need while preparing them for
              forever homes.
            </p>
            <p className="text-yellow-500 text-lg">★★★★★</p>
          </div>
        </div>
      </div>
    </section>
  );
}
