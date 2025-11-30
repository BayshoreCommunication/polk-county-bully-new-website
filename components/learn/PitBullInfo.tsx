"use client";
import Reveal from "../motion/Reveal";
import Image from "next/image";

export default function PitBullInfo() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage:
          "url('/images/learnpage/pitbullinfo/bg.webp')",
      }}
    >
      <div className="container mx-auto px-8 text-white">
        {/* Title */}
        <Reveal y={-100} duration={2}>
        <h1 className="text-4xl md:text-7xl font-extrabold mb-8 drop-shadow-[6px_6px_0px_#000]  tracking-wider">
          <span  className="bg-gradient-to-r from-[#F44B80] to-[#F5724B] text-transparent bg-clip-text ">Here Is Some Basic Information</span><span  className="bg-gradient-to-r from-[#FACC15] to-[#F97316] text-transparent bg-clip-text ">To Help You Think Twice About</span>   
          <span  className="text-white ">This Breed & Their Stereotypes</span>
        </h1>
        </Reveal>
        {/* Bullet Points */}
        <Reveal y={100} duration={3}>
        <ol className="list-decimal ml-6 space-y-4  text-xs md:text-base opacity-95 leading-relaxed mb-16 max-w-4xl ">
          <li className="font-inter">
            Let's start with the fact that Pit Bulls are not actually a breed of dog. The term
            refers to a variety of breeds of about 10 dogs, like the American Staffordshire terrier,
            Staffordshire bull terrier, bulldog, and other such mixes of dogs. It is a generic term
            often used to describe all dogs with similar traits and characteristics often known in
            general public as “Pit Bulls”. While there is an American Pit Bull Terrier breed, they
            only make up a very small percentage of dogs.
          </li>

          <li className="font-inter">
            In the early part of the last century, Pit Bulls were known as “Nanny Dogs”. It may be
            hard to believe now with all of the bad press they receive, but Pit Bulls were the breed
            of choice among parents with young children. If you left your kid with a Pit Bull, they
            were safe!
          </li>

          <li className="font-inter">
            They were originally bred to drive and catch livestock and to serve as the ideal family
            companions.
          </li>

          <li className="font-inter">
            Pit Bulls were not bred as guard dogs because they were too friendly.
          </li>

          <li className="font-inter">
            They do not have locking jaws. This is a myth!
          </li>

          <li className="font-inter">
            To piggyback on fact number five: Pit Bulls also don’t have the strongest bite among all
            dog breeds. German Shepherds and Rottweilers actually have a more powerful bite.
          </li>

          <li className="font-inter">
            As many as 75% of mixed breed dogs in animal shelters, including Pit Bulls and Pit Bull
            mixes, are misidentified as the wrong breed.
          </li>

          <li className="font-inter">
            They are not inherently aggressive dogs. In fact, in temperament tests, Pit Bulls were
            the second most tolerant breed behind Golden Retrievers.
          </li>
        </ol>
        </Reveal>
        {/* Characteristics Title */}

        <Reveal y={-100} duration={2}>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#F97316] to-[#FACC15] text-transparent bg-clip-text drop-shadow-[6px_6px_0px_#000]  tracking-wider">
          Characteristics
        </h2>
        </Reveal>
        {/* Characteristics Text */}

              <Reveal y={-100} duration={3}>
        <div className="space-y-6 text-xs md:text-base opacity-95 max-w-4xl leading-relaxed">
          <p className="font-inter">
            Pit Bulls are intelligent, agile, loving, faithful, and extremely trainable. They love
            snuggling up to you to give you tons of kisses, they will be your most faithful
            companion. Pits put their all into whatever they start!
          </p>

          <p className="font-inter">
            One of the most endearing traits of Pit Bulls is their love of people and need for
            affection. They love cuddling, showering kisses, and spending time with their people. A
            lot of Pit Bulls think they’re lap dogs, despite their bulky frames! In fact, the
            American Pit Bull Terrier has a passing score of 82.3% on the American Temperament Test
            Society’s tests.
          </p>
        </div>

        </Reveal>
      </div>
      {/* Optional gradient overlay at the top to match first section */}
      <div className="absolute top-0 w-full h-32 left-0 right-0 bg-gradient-to-t from-transparent to-white"></div>
      {/* Gradient overlay at the bottom for blending */}
      <div className="absolute bottom-0 w-full left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white "></div>
    </section>
  );
}
