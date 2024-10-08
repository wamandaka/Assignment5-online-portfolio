import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-10 font-poppins">
              Hi, I&apos;m Daka
            </h1>
            <p className="text-sm md:text-lg lg:text-xl font-medium">
              I do code &{" "}
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                Chill
              </span>
            </p>
            <h2 className="text-lg md:text-xl lg:text-2xl font-medium mt-7 w-72 md:w-96 ">
              I have experience in developing Website using ReactJS, and API
              using ExpressJS.
            </h2>
            <div className="flex justify-center items-center gap-3 mt-7">
              <a
                href="mailto:wamandaka122@gmail.com"
                className="border border-gray px-6 py-2 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300"
              >
                Contact Me
              </a>
              <a
                href="https://drive.google.com/file/d/1COWQ4K628GY_4so8jj2LYiNlzc2i3X3A/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="border border-gray px-4 py-2 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
