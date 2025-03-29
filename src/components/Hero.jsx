import React from "react";
import image from "../assets/image1.png";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../assets/animation.json";

const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={image}
            alt=""
            className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[620px] flex-col items-center justify-center gap-3 text-center"
        >
          <h6 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-semibold md:text-4xl">
            Kishan Kumar B B<br />
            Software Developer
          </h6>
        </motion.div>
      </div>
      <Lottie
        className="fixed lg:bottom-10 lg:right-30 opacity-20 bottom-0 right-0 z-[-1]"
        animationData={animationData}
        loop={true}
        style={{ width: "300px", height: "300px" }}
      />
      <Lottie
        className="fixed lg:top-20 lg:left-50 opacity-40 top-0 left-0 z-[-1]"
        animationData={animationData}
        loop={true}
        style={{ width: "300px", height: "300px" }}
      />
      <Lottie
        className="fixed lg:top-45 lg:left-30 opacity-40 top-0 left-0 z-[-1]"
        animationData={animationData}
        loop={true}
        style={{ width: "300px", height: "300px" }}
      />
      <Lottie
        className="fixed lg:bottom-45 lg:right-20 opacity-40 bottom-0 right-0 z-[-1]"
        animationData={animationData}
        loop={true}
        style={{ width: "300px", height: "300px" }}
      />
    </div>
  );
};

export default Hero;
