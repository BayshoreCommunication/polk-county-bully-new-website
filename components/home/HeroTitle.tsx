"use client";

import { motion } from "framer-motion";
import React from "react";

// 1. Define the animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Staggers the WORDS/BLOCKS slightly
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Staggers the LETTERS inside the word
      staggerChildren: 0.05,
    },
  },
};

const letterVariants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)", // Starts blurry (Cool effect)
    scale: 1.1, // Slightly large
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)", // Becomes sharp
    scale: 1, // Normal size
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

// 2. Reusable component to handle splitting
export const TypingText = ({ text, className = "" }: { text: string; className?: string }) => {
  return (
    // Changed to motion.span to handle the word-level stagger
    <motion.span
      variants={wordVariants}
      className={`inline-block ${className}`}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const HeroTitle = () => {
  return (
    <div className="">
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-4xl md:text-7xl font-bold leading-tight tracking-tight text-center max-w-6xl"
      >
        {/* Block 1: EVERY */}
        <TypingText text="EVERY" />

        {/* Block 2: DOG */}
        <TypingText text=" DOG " className="text-[#FACC15]" />

        {/* Block 3: DESERVES */}
        <TypingText
          text="DESERVES"
          className="bg-gradient-to-r from-[#FACC15] to-[#F97316] text-transparent bg-clip-text"
        />

        <br className="hidden md:block" />

        {/* Block 4: TO BE IN A LOVING */}
        <TypingText
          text="TO BE IN A LOVING"
          className="bg-gradient-to-r from-[#F7734E] to-[#F44B80] text-transparent bg-clip-text"
        />

        <br className="hidden md:block" />

        {/* Block 5: HOME */}
        <TypingText text="HOME" className="text-[#35FA25]" />
      </motion.h1>
    </div>
  );
};

export default HeroTitle;