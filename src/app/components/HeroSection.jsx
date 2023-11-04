"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

const HeroSection = () => {
  return (
    <section id="home"> 
      <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-5xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-600">
                Hello, I&apos;m{" "}
              <TypeAnimation
                sequence={[
                  "Jedsadaporn Pannok",
                  5000,
                  "TIK XD",
                  5000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
              </span>
              <br></br>
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  1000,
                  "Mobile Developer",
                  1000,
                  "UI/UX Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              The bird that wakes up early is the bird that takes CPE101 in the morning.
            </p>
            <div className="socials flex flex-row gap-2">
          </div>
            <div>
              <Link
                href="https://github.com/tikpoptv" target="_black"//BsGithub
                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-blue-800 hover:bg-slate-200 text-white"
              >
              <div className="flex flex-row gap-2 items-center justify-center">
            <BsGithub />
            Github
          </div>
              </Link>
              
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
            <div className="rounded-full lg:w-[550px] lg:h-[550px] relative">
              <Image
                src="/images/prof.png"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={550}
                height={550}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
