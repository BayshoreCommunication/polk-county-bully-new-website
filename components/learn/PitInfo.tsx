"use client";
import Reveal from "../motion/Reveal";
import Image from "next/image";

export default function PitInfo() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage: "url('images/learnpage/learn/bg.webp')",
      }}
    >
      <div className="container mx-auto px-8 text-white">
        {/* Top Title */}
        <Reveal y={-100} duration={2}>
        <h1 className="text-center text-4xl md:text-7xl font-extrabold mb-4 drop-shadow-[6px_6px_0px_#000]  tracking-wider">
          <span className="text-[#FFFFFF]">Learn</span> <span className="bg-gradient-to-r from-[#F7734E] to-[#F44B80] text-transparent bg-clip-text ">About Our</span> <span className="bg-gradient-to-r from-[#FACC15] to-[#2BFD27] text-transparent bg-clip-text ">Pits And Other Breeds</span>
        </h1>
        </Reveal>

        <Reveal y={100} duration={2}>
        <p className="text-center max-w-3xl mx-auto text-xs md:text-base opacity-90 mb-12">
          Pit Bulls make wonderful companions and can be a great addition to families in the right
          living situation. They require responsible, dedicated, and informed ownership, and many
          times, rescue Pit Bulls require an extra dose of love.
        </p>
        </Reveal>
        {/* Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Images */}
          <div className="flex flex-col gap-6">
          <Reveal y={100} x={100} duration={3}>
            <Image
              src="/images/learnpage/learn/dog.png"
              width={1000}
              height={800}
              alt="Pitbull"
              className="rounded-xl"
            />
            </Reveal>
          </div>

          {/* Right Text */}
          <div>

          <Reveal y={-100} duration={2}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-[6px_6px_0px_#000]">
              <span className="bg-gradient-to-r from-[#F44B80] to-[#F7734E] text-transparent bg-clip-text ">About</span> <span className="bg-gradient-to-r from-[#F97316] to-[#FACC15] text-transparent bg-clip-text ">Pit Bulls</span>
            </h2>

            </Reveal>
            <Reveal y={100} duration={2}>
            <div className="space-y-5  opacity-95 leading-relaxed text-xs md:text-base">
              <p>
                We love all bully breeds and especially Pit Bulls! We have seen too many of them
                wind up in shelters or abandoned because they have a bad rap. However, we know them
                for what they really are: lovable, loyal companions who just want your affection and
                attention — just like every other dog!
              </p>

              <p>
                Pit bulls often carry an undeserved reputation rooted in misunderstanding and media
                exaggeration. These dogs were originally bred for their strength and determination,
                traits that have sadly been exploited for negative purposes like dogfighting.
              </p>

              <p>
                When incidents involving neglected or poorly trained pit bulls make headlines, the
                breed as a whole is unfairly judged, even though the real issue often lies in how
                the dog was raised. In reality, behavior is shaped far more by environment and
                training than by breed alone.
              </p>

              <p>
                Many pit bulls, when given proper care and love, prove to be affectionate, loyal,
                and gentle companions.
              </p>

              <p>
                Unfortunately, this unjust stigma has led to an overrepresentation of pit bulls in
                shelters and laws that unfairly target them, making it harder for these dogs to find
                loving homes.
              </p>

              <p>
                Despite the challenges they face, pit bulls make wonderful pets and deserve a second
                chance. They are intelligent, devoted, and playful animals that thrive in homes
                where they receive structure and positive reinforcement.
              </p>

              <p>
                Adopting a pit bull does more than provide a home to a deserving dog; it also helps
                to challenge harmful stereotypes surrounding the breed. For those who open their
                hearts, the reward is a deeply loyal and loving companion.
              </p>
            </div>

            </Reveal>
          </div>
        </div>
      </div>

      {/* Optional gradient overlay at the top to match first section */}
      <div className="absolute top-0 w-full h-32 left-0 right-0 bg-gradient-to-t from-transparent to-white"></div>
      {/* Gradient overlay at the bottom for blending */}
      <div className="absolute bottom-0 w-full left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white "></div>
    </section>
  );
}
