"use client";
import Image from "next/image";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import Reveal from "../motion/Reveal";


export default function ContactPage() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen"
      style={{
        backgroundImage: "url('/images/contactpage/contactform/bg.png')",
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
        {/* 3 Info Cards */}
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

          {/* Address Card */}
          <Reveal y={100} x={100} duration={1}>
          <div className="bg-white  rounded-2xl p-6 shadow-md flex items-center justify-start gap-4 h-[200px]  bg-cover bg-no-repeat bg-center border-8 border-white" 
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
          <div className="bg-white  rounded-2xl p-6 shadow-md flex items-center justify-start gap-4 h-[200px] bg-cover bg-no-repeat bg-center border-8 border-white"
            style={{
                backgroundImage: "url('/images/contactpage/contactform/card-bg.png')",
              }}
          >
            <div className="p-4 bg-primary text-white rounded-xl flex items-center justify-center">
              <FaEnvelope className="text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold font-inter">Email Address</h3>
              <p className="text-gray-700 text-sm">
                support@bullyprojectrescue.com
              </p>
            </div>
          </div>
          </Reveal>   
          {/* Phone Card */}
          <Reveal y={100} x={100} duration={3}>
          <div className="bg-white rounded-2xl p-6 shadow-md flex items-center justify-start gap-4 h-[200px] bg-cover bg-no-repeat bg-center border-8 border-white"
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

        {/* Form Container */}
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 md:p-10  bg-cover bg-no-repeat bg-center border-b-8 border-t-8 border-white"
            style={{
                backgroundImage: "url('/images/contactpage/contactform/form-bg.png')",
              }}
        >

          <form className="space-y-6">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-4 rounded-xl border border-gray-300 focus:ring focus:ring-blue-300"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-4 rounded-xl border border-gray-300 focus:ring focus:ring-blue-300"
                />
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
                  placeholder="Enter your phone number"
                  className="w-full p-4 rounded-xl border border-gray-300 focus:ring focus:ring-blue-300"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 rounded-xl border border-gray-300 focus:ring focus:ring-blue-300"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Message
              </label>
              <textarea
                placeholder="Here..."
                className="w-full p-4 h-40 rounded-xl border border-gray-300 focus:ring focus:ring-blue-300"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-10 py-3 rounded-full bg-white text-primary shadow-xl hover:shadow-2xl transition font-semibold flex items-center justify-center gap-2 mx-auto"
              >
                <span>🐾</span> Send
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}
