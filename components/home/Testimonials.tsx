"use client";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[70vh] overflow-hidden"
      style={{ backgroundImage: "url('/images/homepage/testimonials/bg.png')" }}
    >
      {/* BOTTOM BLUR */}
      <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-white/40 to-transparent backdrop-blur-sm pointer-events-none" />
      <div className="container mx-auto mt-[100px]">
        <h2 className="text-center text-4xl  md:text-7xl text-white  mb-3 drop-shadow-[6px_6px_0px_#000] tracking-wider">
          Our{" "}
          <span className="bg-gradient-to-r from-[#F7734E] to-[#F44B80] text-transparent bg-clip-text  ">
            {" "}
            Client{" "}
          </span>{" "}
          <span className="bg-gradient-to-r from-[#FACC15] to-[#2BFD27] text-transparent bg-clip-text  ">
            Testimonial
          </span>
        </h2>
        <p className="text-center text-white/90 max-w-xl mx-auto mb-10">
          Hear from families who've found their perfect furry companions.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {[
            {
              name: "Charlie Smith",
              avatar: "/images/homepage/testimonials/avatar3.png",
              review:
                "Adopting through Bully Project Rescue was seamless and heartwarming. Our new pup feels like part of the family already!",
            },
            {
              name: "Dany Monson",
              avatar: "/images/homepage/testimonials/avatar2.png",
              review:
                "The team was so supportive and caring. They matched us with the perfect dog, and the entire process felt personal and safe.",
            },
            {
              name: "Sacha Dubois",
              avatar: "/images/homepage/testimonials/avatar1.png",
              review:
                "Fostering with Bully Project Rescue was a life‑changing experience. I got to help dogs in need while preparing them for forever homes.",
            },
          ].map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-xl text-center z-50 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                backgroundImage:
                  "url('/images/homepage/testimonials/card-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                <Image
                  src={client.avatar}
                  alt={client.name}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 font-inter">{client.name}</h3>
              <p className="text-gray-700 text-sm mb-4">{client.review}</p>
              <p className="text-yellow-500 text-lg">★★★★★</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
