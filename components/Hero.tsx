import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ShineButton from "./ui/DownloadButton";
import { FaDownload } from "react-icons/fa";
import DownloadButton from "./ui/DownloadButton";
import Social from "./ui/Social";
import Photo from "./ui/Photo";
import Stats from "./ui/Stats";

const Hero = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <TextGenerateEffect
              className="h1"
              words="Hello I'm  Yasas Rajapakshe"
            />

            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="./Resume.pdf" download="Resumé_Yasas Lakmina">
                <DownloadButton
                  title="Download Resumé"
                  icon={<FaDownload />}
                  position="right"
                />
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-3"
                  iconStyles="w-9 h-9 border border-green rounded-full flex justify-center items-center text-green text-base hover:bg-green hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-10 md-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Hero;
