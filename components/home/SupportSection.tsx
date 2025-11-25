import Image from "next/image";

export default function SupportSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 px-8"
      style={{ backgroundImage: "url('/images/homepage/support/bg.png')" }}
    >
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl md:text-7xl font-extrabold mb-4 text-center text-stroke-white drop-shadow-[6px_6px_0px_#000]">
          <span className="bg-white text-transparent bg-clip-text  ">HOW </span>
          <span className="bg-gradient-to-r from-[#F7734E] to-[#F44B80] text-transparent bg-clip-text  ">
            YOU CAN
          </span>
          <span className="bg-gradient-to-r from-[#FACC15] to-[#2BFD27] text-transparent bg-clip-text  ">
            {" "}
            SUPPORT US
          </span>
        </h2>
        <p className="text-sm md:text-base opacity-90 mb-12 text-center w-full max-w-2xl text-white">
          Every wagging tail, every second chance, every life saved — it all
          begins with someone like you. Your kindness keeps our mission alive.
          Here's how you can be part of their story:
        </p>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* LEFT CONTENT */}
        <div className="text-white max-w-xl">
          <div className="max-w-xl">
            <h3 className="text-4xl md:text-6xl font-extrabold mb-4 text-stroke-black drop-shadow-[6px_6px_0px_#000]">
              ADOPT
            </h3>
            <p className="text-white text-opacity-90 mb-6 text-sm md:text-base">
              When you adopt, you're not just rescuing a dog — you're giving
              them the life they've always deserved. A warm bed, a gentle touch,
              and a family to call their own.
            </p>
            <button className="bg-white text-primary font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
              Adopt Today
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full max-w-xl">
          <Image
            src="/images/homepage/support/dogs.png"
            alt="Dog"
            width={700}
            height={700}
            className="object-contain w-full"
          />
        </div>
      </div>
    </section>
  );
}
