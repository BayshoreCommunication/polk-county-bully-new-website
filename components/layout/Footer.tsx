import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaFacebookF,
  FaGoogle,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-12 md:py-20  overflow-hidden"
      style={{
        backgroundImage: "url('/images/homepage/footer/footer-bg.png')",
      }}
    >
      <div className="container mx-auto  ">
        <div className="relative">
          <div className="">
            <div className="flex gap-6 items-center px-16 py-12  rounded-full bg-[linear-gradient(97.54deg,#00A0CC_0%,#FACC15_100%)]">
              <h2 className="text-start text-4xl  md:text-[56px] leading-none font-medium text-black   drop-shadow-[6px_6px_0px_#fff]">
                Be the First to Meet New Pets Right in Your Inbox
              </h2>
              <div className="max-w-xs w-full ">
                <input
                  type="email"
                  placeholder="Insert your E-mail Address"
                  className="px-4 mb-3 py-2 rounded-full border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white w-full"
                />
                <button className="bg-primary w-full text-white font-semibold px-6 py-2 rounded-r-full shadow-lg hover:bg-blue-700 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-5 py-6">
            <div className="col-span-2">
              <Image
                src="/images/homepage/footer/footer-logo.png"
                width={150}
                height={150}
                alt=""
              ></Image>
              <p className="text-white/90 text-sm md:text-base pt-4 max-w-72 w-full">
                Helping bully breed dogs find loving homes. Adopt, foster, or
                donate to save a life today.
              </p>
            </div>
            <div>
              <h3 className="text-white text-2xl font-semibold mb-4 font-sans">
                Quick Links
              </h3>
              <div>
                <Link href={"#"} className="block text-white/90 mb-2 text-sm">
                  <span className="text-xl">›</span> Home
                </Link>
                <Link href={"#"} className="block text-white/90 mb-2 text-sm">
                  <span className="text-xl">›</span> Adoption
                </Link>
                <Link href={"#"} className="block text-white/90 mb-2 text-sm">
                  <span className="text-xl">›</span> Learn
                </Link>
                <Link href={"#"} className="block text-white/90 mb-2 text-sm">
                  <span className="text-xl">›</span> About Us
                </Link>
                <Link href={"#"} className="block text-white/90 mb-2 text-sm">
                  <span className="text-xl">›</span> Contact Us
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-white text-2xl font-semibold mb-4 font-sans">
                Resources
              </h3>
              <div>
                <Link href={"#"} className="block text-white/90 mb-2 text-sm">
                  <span className="text-xl">›</span> Adoption Guide
                </Link>
                <Link href={"#"} className="block text-white/90 mb-2 text-sm">
                  <span className="text-xl">›</span> Pet Care Tips
                </Link>
                <Link href={"#"} className="block text-white/90 mb-2 text-sm">
                  <span className="text-xl">›</span> Shelter Partners
                </Link>
                <Link href={"#"} className="block text-white/90 mb-2 text-sm">
                  <span className="text-xl">›</span>Volunteer Opportunities
                </Link>
                <Link href={"#"} className="block text-white/90 mb-2 text-sm">
                  <span className="text-xl">›</span> Help Center
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-white text-2xl font-semibold mb-4 font-sans">
                Contact Us
              </h3>
              <div className="flex gap-2">
                <Link href={"#"} className="block text-white/90 mb-2 text-sm">
                  <FaGoogle size={24} />
                </Link>
                <Link href={"#"} className="block text-white/90 mb-2 text-sm">
                  <FaFacebook size={24} />
                </Link>
                <Link href={"#"} className="block text-white/90 mb-2 text-sm">
                  <FaTwitter size={24} />
                </Link>
                <Link href={"#"} className="block text-white/90 mb-2 text-sm">
                  <FaLinkedin size={24} />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/20 pt-2">
            <p className="text-center text-white/90 text-sm mt-6">
              © Copyrights{" "}
              <Link href="" className="text-orange-400 font-medium">
                Polk County Bully Project
              </Link>{" "}
              All rights reserved
            </p>
            <p className="text-center text-white/90 text-sm mt-6">
              Design & Developed by{" "}
              <Link href="" className="text-orange-400 font-medium">
                BayShore Communication
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
