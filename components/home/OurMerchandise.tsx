import Image from "next/image";
import Reveal from "../motion/Reveal";
export default function OurMerchandise() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[80vh]  py-12 md:py-20  overflow-hidden"
      style={{
        backgroundImage:
          "url('/images/homepage/OurMerchandise/OurMerchandiseBg.png')",
      }}
    >
      {/* TOP BLUR */}
      {/* <div className="absolute top-0 left-0 right-0 h-[120px] bg-gradient-to-b from-white/40 to-transparent backdrop-blur-sm pointer-events-none" /> */}

      {/* BOTTOM BLUR */}

      <div className="container mx-auto">
      <Reveal y={-100} duration={2}>
        <h2 className="text-center text-4xl  md:text-7xl text-white  mb-3 drop-shadow-[6px_6px_0px_#000] tracking-wider">
          Buy Our Merchandise
        </h2>

        </Reveal>
        <Reveal y={-100} duration={3}>
        <p className="text-center text-white/90 max-w-xl mx-auto mb-10">
          Wear your heart on your sleeve. Every shirt, mug, or tote you buy
          helps rescue more dogs — and spreads love everywhere you go.{" "}
        </p>
        </Reveal>
        <div>
          {/* show from md */}
          <div className="hidden md:block">
            <div className="flex gap-6 mb-6">
              {/* Card 1 */}
              <Image
                src={"/images/homepage/OurMerchandise/Merchandise-main.png"}
                width={1000}
                height={1000}
                alt=""
                className="w-full"
              ></Image>
            </div>
          </div>
          <div className="md:hidden">
            <div className="flex flex-col gap-5 mb-5">
              {/* Card 1 */}
              <Image
                src={"/images/homepage/OurMerchandise/Merchandise-1.png"}
                width={230}
                height={310}
                alt=""
                className="w-full"
              ></Image>
              <Image
                src={"/images/homepage/OurMerchandise/Merchandise-2.png"}
                width={480}
                height={310}
                alt=""
                className="w-full"
              ></Image>
              <Image
                src={"/images/homepage/OurMerchandise/Merchandise-3.png"}
                width={290}
                height={310}
                alt=""
                className="w-full"
              ></Image>
              <Image
                src={"/images/homepage/OurMerchandise/Merchandise-4.png"}
                width={230}
                height={310}
                alt=""
                className="w-full"
              ></Image>
            </div>

            <div className="flex flex-col gap-5">
              <Image
                src={"/images/homepage/OurMerchandise/Merchandise-5.png"}
                width={460}
                height={310}
                alt=""
                className="w-full"
              ></Image>
              <Image
                src={"/images/homepage/OurMerchandise/Merchandise-6.png"}
                width={230}
                height={310}
                alt=""
                className="w-full"
              ></Image>
              <Image
                src={"/images/homepage/OurMerchandise/Merchandise-7.png"}
                width={560}
                height={310}
                alt=""
                className="w-full"
              ></Image>
            </div>
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
