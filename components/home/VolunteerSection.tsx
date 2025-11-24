import Image from "next/image";

export default function VolunteerSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 px-6"
      style={{ backgroundImage: "url('/images/homepage/volunteer/bg.png')" }}
    >
      {/* TOP SHADOW */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div>

      {/* BOTTOM SHADOW */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>

      <div className="container mx-auto">
        {/* Heading + Description */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 gap-6">
          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-extrabold text-white text-stroke-black">
            Volunteer
          </h2>

          {/* Description */}
          <p className="text-white max-w-2xl text-sm md:text-base leading-relaxed">
            Every helping hand creates a ripple of change. Whether it’s
            transport, events, or sharing a post — your time can be the reason a
            dog finds their forever home.
          </p>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative w-full rounded-md overflow-hidden border-8 border-white shadow-lg">
            <Image
              src="images/homepage/volunteer/left.png"
              alt="Volunteer Image 1"
              width={1000}
              height={800}
              className="object-cover w-full h-auto"
            />
          </div>

          <div className="relative w-full rounded-md overflow-hidden border-8 border-white shadow-lg">
            <Image
              src="images/homepage/volunteer/right.png"
              alt="Volunteer Image 2"
              width={1000}
              height={800}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-white text-primary font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition flex items-center gap-2">
            🐾 Join Our Volunteer Family
          </button>
        </div>
      </div>
    </section>
  );
}
