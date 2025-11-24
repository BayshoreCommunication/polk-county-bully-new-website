import Image from "next/image";

export default function FosterSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 px-6"
      style={{ backgroundImage: "url('/images/homepage/foster/bg.png')" }}
    >
      {/* TOP SHADOW */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"></div>

      {/* BOTTOM SHADOW */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="relative flex flex-col items-start gap-4">
          {/* Big Image */}
          <div className="relative rounded-md overflow-hidden ">
            <Image
              src="/images/homepage/foster/dog.png"
              alt="Foster Dog"
              width={1000}
              height={800}
              className="w-full max-w-2xl h-auto object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-white max-w-lg">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-stroke-black">FOSTER</h2>

          <p className="text-sm md:text-base opacity-90 mb-8">
            Fostering saves lives. One open home means one more dog pulled from
            danger. We take care of the supplies; you give them love, patience,
            and hope.
          </p>

          <button className="bg-white text-primary font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition flex items-center gap-2">
            Become A Foster Hero
          </button>
        </div>
      </div>
    </section>
  );
}
