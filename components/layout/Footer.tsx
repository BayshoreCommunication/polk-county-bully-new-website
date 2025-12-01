"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Reveal from "../motion/Reveal";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import Swal from "sweetalert2";
import { send } from "emailjs-com";

type ContactFormState = {
  email: string;
};

type ContactFormErrors = {
  email?: string;
};

export default function Footer() {
  const [emailForm, setEmailForm] = useState<ContactFormState>({
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<ContactFormErrors>({});

  const validate = (values: ContactFormState): ContactFormErrors => {
    const errors: ContactFormErrors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) errors.email = "Email is required!";
    else if (!regex.test(values.email)) errors.email = "Invalid email format!";
    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const errors = validate(emailForm);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      send(
        "service_78ezzng", // ✅ Your EmailJS service ID
        "template_nr1ckc4", // ✅ Your EmailJS template ID
        emailForm,
        "FAcMdTK-cDe5gXZaD" // ✅ Your EmailJS public key
      )
        .then(() => {
          setLoading(false);
          Swal.fire({
            icon: "success",
            text: "Thank you! Your information has been successfully submitted. Our team will respond shortly.",
            confirmButtonColor: "#131b2a",
          }).then(() => {
            setEmailForm({ email: "" });
          });
        })
        .catch((err) => {
          console.error("Email error:", err);
          setLoading(false);
          Swal.fire({
            icon: "error",
            text: "Something went wrong! Please try again.",
          });
        });
    } else {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-12 md:py-20 overflow-hidden"
      style={{
        backgroundImage: "url('/images/homepage/footer/footer-bg.png')",
      }}
    >
      <div className="container mx-auto">
        {/* Subscribe Section */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center px-6 md:px-16 py-8 md:py-12 rounded-3xl bg-[linear-gradient(97.54deg,#00A0CC_0%,#FACC15_100%)] text-center md:text-left">
          <Reveal y={-100} duration={3}>
            <h2 className="text-3xl sm:text-4xl md:text-6xl leading-tight text-black drop-shadow-[6px_6px_0px_#fff] tracking-wider">
              Be the First to Meet New Pets Right in Your Inbox
            </h2>
          </Reveal>
          <div className="w-full max-w-xs md:max-w-sm">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Insert your E-mail Address"
                value={emailForm.email}
                onChange={(e) =>
                  setEmailForm({ ...emailForm, email: e.target.value })
                }
                className="px-4 py-3 mb-3 rounded-full border border-gray-200 text-gray-800 bg-white w-full"
              />
              {formErrors.email && (
                <span className="text-red-500 text-sm mt-1">
                  {formErrors.email}
                </span>
              )}
              <button
                type="submit"
                disabled={loading}
                className="bg-primary w-full text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
              >
                {loading ? "Submitting..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 lg:grid-cols-5 py-6 gap-6">
          <div className="col-span-2">
            <Image
              src="/images/homepage/footer/logo.webp"
              width={1000}
              height={800}
              alt="Logo"
              className="w-full h-auto max-w-[100px]"
            />
            <p className="text-white/90 text-sm md:text-base pt-4 max-w-72 w-full">
              Helping bully breed dogs find loving homes. Adopt, foster, or donate to save a life today.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-2xl font-semibold mb-4 font-sans">Quick Links</h3>
            <div>
              {["Home", "Adoption", "Learn", "About", "Contact"].map((link, i) => (
                <Link
                  key={i}
                  href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="block text-white/90 mb-2 text-sm"
                >
                  <span className="text-xl">›</span> {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-2xl font-semibold mb-4 font-sans">Resources</h3>
            <div>
              <Link
                href="https://petstablished.com/adoptions/personal-information?application_type=Adopt&donation_section=false&form_id=24575&form_type=generic&generic_form_id=24575&pet_id=715879&section=1&selected_pets=false"
                className="block text-white/90 mb-2 text-sm"
              >
                <span className="text-xl">›</span> Adoption Guide
              </Link>
              <Link
                href="https://petstablished.com/adoptions/personal-information?application_type=Foster&donation_section=false&form_id=24574&form_type=generic&generic_form_id=24574&pet_id=715879&section=1&selected_pets=false"
                className="block text-white/90 mb-2 text-sm"
              >
                <span className="text-xl">›</span> Pet Care Tips
              </Link>
              <Link
                href="https://www.giveffect.com/charities/27544-polk-county-bully-project/volunteer_application"
                className="block text-white/90 mb-2 text-sm"
              >
                <span className="text-xl">›</span> Shelter Partners
              </Link>
              <Link
                href="https://app.giveffect.com/charities/27544-polk-county-bully-project"
                className="block text-white/90 mb-2 text-sm"
              >
                <span className="text-xl">›</span> Volunteer Opportunities
              </Link>
              <Link href="#" className="block text-white/90 mb-2 text-sm">
                <span className="text-xl">›</span> Help Center
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-2xl font-semibold mb-4 font-sans">Contact Us</h3>
            <div className="flex gap-3 w-full">
              <Link href="https://www.facebook.com/polkcountybullyproject" className="w-9 lg:w-12 h-9 lg:h-12 rounded-full bg-white hover:text-[#009DCA] duration-300 drop-shadow-[0px_6px_0px_#000] flex justify-center items-center">
                <FaFacebookF size={20} />
              </Link>
              <Link href="https://www.instagram.com/polkcountybullyproject/" className="w-9 lg:w-12 h-9 lg:h-12 rounded-full bg-white hover:text-[#009DCA] duration-300 drop-shadow-[0px_6px_0px_#000] flex justify-center items-center">
                <FaInstagram size={20} />
              </Link>
              <Link href="https://www.tiktok.com/@polkcountybullyproject" className="w-9 lg:w-12 h-9 lg:h-12 rounded-full bg-white hover:text-[#009DCA] duration-300 drop-shadow-[0px_6px_0px_#000] flex justify-center items-center">
                <FaTiktok size={20} />
              </Link>
              <Link href="https://www.youtube.com/@TheBullyProjecct" className="w-9 lg:w-12 h-9 lg:h-12 rounded-full bg-white hover:text-[#009DCA] duration-300 drop-shadow-[0px_6px_0px_#000] flex justify-center items-center">
                <FaYoutube size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
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
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
