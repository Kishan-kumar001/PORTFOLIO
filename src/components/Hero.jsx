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
          {/* <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-3xl">
            Software Developer
          </h3> */}
          {/* <p className="md:text-base text-pretty text-sm text-gray-400">
            I'm a web developer skilled in React, Tailwind, focused in building
            clean, scalable applications. From front-end design to seamless
            database integration with MongoDB, I create efficient solutions for
            dynamic user experiences. Let's build something amazing together!
          </p> */}
        </motion.div>
      </div>
      <Lottie
        className="absolute bottom-10 right-30 opacity-20"
        animationData={animationData}
        loop={true}
        style={{ width: "300px", height: "300px" }}
      />
      <Lottie
        className="absolute top-20 left-50 opacity-40"
        animationData={animationData}
        loop={true}
        style={{ width: "300px", height: "300px" }}
      />
    </div>
  );
};

export default Hero;
