"use client";
import Image from "next/image";


export default function BullyProjectSection() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-16"
      style={{ backgroundImage: "url('/images/aboutpage/bullyproject/bg.png')" }}
    >
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* IMAGES */}
          
            <div className=" overflow-hidden ">
              <Image
                src="/images/aboutpage/bullyproject/founder.png"
                alt="Founder Left"
                width={1000}
                height={800}
                className="w-full max-w-2xl h-auto object-cover"
              />
              <p className="text-xs text-gray-200 mt-2">
                Bully Project Rescue Founder: Shannon Medina (Left)
              </p>
              <p className="text-xs text-gray-200 mt-2">
                Angie Lorio (Right)
              </p>
            </div>

          {/* TEXT CONTENT */}
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-[6px_6px_0px_#000] tracking-wider">
              <span className="text-[#1F1F1F] px-2">POLK</span> <span className="bg-gradient-to-r from-[#F97316] to-[#FACC15] text-transparent bg-clip-text px-2">COUNTRY</span> <span className="bg-gradient-to-r from-[#F44B80] to-[#F7734E] text-transparent bg-clip-text px-2">BULLY PROJECT</span>
            </h2>

            <p className="text-gray-100 leading-relaxed mb-4">
              We are a non-profit 501c3 rescue organization with a small shelter
              that works to find forever homes for this misunderstood breed.
              Through local adoption and rescue partnerships we are giving these
              dogs their chance at a happily ever after. We’re dedicated to our
              goal of reducing euthanasia rates of these dogs in Polk County.
              We pulled half of the dogs pulled in the county by rescues in 2022.
            </p>
          </div>

        </div>
        <div className="">
      <div className="max-w-[1640px] px-8 my-8 md:my-16 mx-auto">
        

       
      </div>
    </div>
      </div>
    </section>
  );
}
