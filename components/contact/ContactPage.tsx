"use client";
import Image from "next/image";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import Reveal from "../motion/Reveal";
import Swal from "sweetalert2";
import { send } from "emailjs-com";
import { useState } from "react";

type ContactFormState = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
};

type ContactFormErrors = {
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export default function ContactPage() {
  const [formState, setFormState] = useState<ContactFormState>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<ContactFormErrors>({});

  const validate = (values: ContactFormState): ContactFormErrors => {
    const errors: ContactFormErrors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstname) errors.firstname = "First name is required!";
    if (!values.lastname) errors.lastname = "Last name is required!";
    if (!values.email) errors.email = "Email is required!";
    else if (!regex.test(values.email)) errors.email = "Invalid email format!";
    if (!values.phone) errors.phone = "Phone number is required!";
    if (!values.message) errors.message = "Message is required!";
    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const errors = validate(formState);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      send(
        "service_78ezzng", // Your EmailJS service ID
        "template_jd79ph8", // Your EmailJS template ID
        formState,
        "FAcMdTK-cDe5gXZaD" // Your EmailJS public key
      )
        .then(() => {
          setLoading(false);
          Swal.fire({
            icon: "success",
            text: "Thank you for reaching out. Your information has been successfully submitted. Our team will respond shortly.",
            confirmButtonColor: "#131b2a",
          }).then(() => {
            setFormState({
              firstname: "",
              lastname: "",
              email: "",
              phone: "",
              message: "",
            });
            setFormErrors({});
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
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
      style={{
        backgroundImage: "url('/images/contactpage/contactform/bg.webp')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative container mx-auto px-8 py-20">
        {/* Title */}
        <Reveal y={-100} duration={2}>
          <h1 className="text-center text-4xl md:text-6xl font-extrabold text-white drop-shadow-[6px_6px_0px_#000] tracking-wider mb-12">
            <span className="text-white">POLK </span>
            <span className="bg-gradient-to-r from-[#F7734E] to-[#F44B80] text-transparent bg-clip-text">
              COUNTRY BULLY{" "}
            </span>
            <span className="bg-gradient-to-r from-[#FACC15] to-[#2BFD27] text-transparent bg-clip-text">
              PROJECT <br />
              CONTACT FORM
            </span>
          </h1>
        </Reveal>

        {/* Info Cards */}
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Address Card */}
          <Reveal y={100} x={100} duration={1}>
            <div
              className="bg-white rounded-2xl p-6 shadow-md flex items-center gap-4 h-[200px] bg-cover bg-no-repeat bg-center border-8 border-white"
              style={{
                backgroundImage: "url('/images/contactpage/contactform/card-bg.png')",
              }}
            >
              <div className="p-4 bg-primary text-white rounded-xl flex items-center justify-center">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold font-inter">Address</h3>
                <p className="text-gray-700 text-sm">
                  5840 W Brannen Rd, Lakeland,
                  <br />
                  FL 33813, United States
                </p>
              </div>
            </div>
          </Reveal>

          {/* Email Card */}
          <Reveal y={100} x={100} duration={2}>
            <div
              className="bg-white rounded-2xl p-6 shadow-md flex items-center gap-4 h-[200px] bg-cover bg-no-repeat bg-center border-8 border-white"
              style={{
                backgroundImage: "url('/images/contactpage/contactform/card-bg.png')",
              }}
            >
              <div className="p-4 bg-primary text-white rounded-xl flex items-center justify-center">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold font-inter">Email Address</h3>
                <p className="text-gray-700 text-sm">support@bullyprojectrescue.com</p>
              </div>
            </div>
          </Reveal>

          {/* Phone Card */}
          <Reveal y={100} x={100} duration={3}>
            <div
              className="bg-white rounded-2xl p-6 shadow-md flex items-center gap-4 h-[200px] bg-cover bg-no-repeat bg-center border-8 border-white"
              style={{
                backgroundImage: "url('/images/contactpage/contactform/card-bg.png')",
              }}
            >
              <div className="p-4 bg-primary text-white rounded-xl flex items-center justify-center">
                <FaPhone className="text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold font-inter">Phone</h3>
                <p className="text-gray-700 text-sm">+1 863-816-6995</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Form */}
        <div
          className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 md:p-10 bg-cover bg-no-repeat bg-center border-b-8 border-t-8 border-white"
          style={{
            backgroundImage: "url('/images/contactpage/contactform/form-bg.png')",
          }}
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  value={formState.firstname}
                  onChange={(e) =>
                    setFormState({ ...formState, firstname: e.target.value })
                  }
                  placeholder="First Name"
                  className="w-full p-4 rounded-xl border border-gray-300 focus:ring focus:ring-blue-300"
                />
                {formErrors.firstname && (
                  <span className="text-red-500 text-sm mt-1">
                    {formErrors.firstname}
                  </span>
                )}
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  value={formState.lastname}
                  onChange={(e) =>
                    setFormState({ ...formState, lastname: e.target.value })
                  }
                  placeholder="Last Name"
                  className="w-full p-4 rounded-xl border border-gray-300 focus:ring focus:ring-blue-300"
                />
                {formErrors.lastname && (
                  <span className="text-red-500 text-sm mt-1">
                    {formErrors.lastname}
                  </span>
                )}
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formState.phone}
                  onChange={(e) =>
                    setFormState({ ...formState, phone: e.target.value })
                  }
                  placeholder="Enter your phone number"
                  className="w-full p-4 rounded-xl border border-gray-300 focus:ring focus:ring-blue-300"
                />
                {formErrors.phone && (
                  <span className="text-red-500 text-sm mt-1">
                    {formErrors.phone}
                  </span>
                )}
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  placeholder="Email"
                  className="w-full p-4 rounded-xl border border-gray-300 focus:ring focus:ring-blue-300"
                />
                {formErrors.email && (
                  <span className="text-red-500 text-sm mt-1">
                    {formErrors.email}
                  </span>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                placeholder="Here..."
                className="w-full p-4 h-40 rounded-xl border border-gray-300 focus:ring focus:ring-blue-300"
              ></textarea>
              {formErrors.message && (
                <span className="text-red-500 text-sm mt-1">
                  {formErrors.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className="px-10 py-3 rounded-full bg-white text-primary shadow-xl hover:shadow-2xl transition font-semibold flex items-center justify-center gap-2 mx-auto"
              >
                {loading ? "Sending..." : <>🐾 Send</>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
