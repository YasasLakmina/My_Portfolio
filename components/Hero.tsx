import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ShineButton from "./ui/DownloadButton";
import { FaDownload } from "react-icons/fa";
import DownloadButton from "./ui/DownloadButton";

const Hero = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I'm <br />{" "}
              <span className="text-green">Yasas Rajapakshe</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies
            </p>
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
