"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div>
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten">
          <Image
            src="/Image.png" // Ensure the path is correct relative to the 'public' folder
            width={498} // Set the width to the maximum size you expect
            height={498} // Set the height to the maximum size you expect
            priority
            quality={100}
            alt="Descriptive alt text"
            className="object-contain"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
