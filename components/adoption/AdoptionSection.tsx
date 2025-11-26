"use client";
import Image from "next/image";
import Link from "next/link";

export default function AdoptionSection() {
  return (
    <section
      className="relative w-full bg-cover bg-center py-16"
      style={{
        backgroundImage: `url('/images/adoptionpage/adoption/bg.png')`,
      }}
    >
      {" "}
      <div className="container mx-auto px-8 text-center text-white">
        {/* Heading */}
        <h2 className="text-3xl md:text-7xl  font-extrabold mb-8 drop-shadow-lg  tracking-wider">
            <span className=" text-[#FFFFFF] drop-shadow-[6px_6px_0px_#000]" >ARE YOU READY</span><span className="bg-gradient-to-r from-[#F7734E] to-[#F44B80] text-transparent bg-clip-text drop-shadow-[6px_6px_0px_#000]"> TO GIVE ONE OF OUR BEAUTIFUL  <br />BULLIES</span><span className="bg-gradient-to-r from-[#FACC15] to-[#2BFD27] text-transparent bg-clip-text drop-shadow-[6px_6px_0px_#000]"> A FOREVER HOME?</span>
        </h2>
        {/* Image */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/adoptionpage/adoption/dog.png"
            alt="Adoptable Dog"
            width={600}
            height={400}
            className="rounded-xl shadow-lg object-cover w-full max-w-7xl"
          />
        </div>

        {/* Text */}
        <p className="text-sm md:text-base  mb-6">
          Here's how to start the process!
        </p>
        <p className="text-sm md:text-base  mb-6 max-w-7xl mx-auto text-start">
          If you haven’t fallen in love with one of our pit bulls yet, you can
          see all of the dogs who are ready for a forever home here. Once you've
          chosen the dog you’d like to adopt, you can submit your application
          for adoption{" "}
          <Link href="/adoption" className="underline font-semibold">
            here
          </Link>
          .
        </p>
        <p className="text-sm md:text-base mb-8 max-w-7xl mx-auto text-start">
          All of our adult dogs are spayed/neutered and up to date on vaccines.
          Your application for adoption will be processed, and you should hear
          back from us within a week. Once you are approved to adopt we will put
          you in contact with the foster to set up a meet and greet.
        </p>

        {/* Button */}
        <button
          className=" bg-white text-primary font-bold py-3 px-6 rounded-full shadow-lg transition duration-300"
        >
          Adopt Today
        </button>
      </div>
    </section>
  );
}
