"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
        >
          <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] xl:w-[400px] xl:h-[400px] mix-blend-lighten relative">
            <Image
              src="/Image.png" // Ensure the path is correct relative to the 'public' folder
              width={500} // Updated width for xl
              height={500} // Updated height for xl
              priority
              quality={100}
              alt="Descriptive alt text"
              className="object-contain"
            />
          </div>
        </motion.div>
        <motion.svg
          className="absolute top-0 xl:left-[-15px] left-[-9px] w-[215px] h-[215px] md:w-[270px] md:left-[-10px] md:h-[270px] xl:w-[430px] xl:h-[430px] xl:translate-y-4 md:translate-y-2  translate-y-2"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
