import React from "react";

const About = () => {
  return (
    <div className=" px-4 md:px-10 lg:px-52 h-screen flex flex-col justify-center items-center text-center space-y-4">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold ">ABOUT ME</h1>
      <p className="text-sm md:text-lg font-medium mt-10 w-72 md:w-1/2 lg:w-[75%]">
        I&apos;m a Bachelor of Computer Science and a graduate from Binar
        Academy Bootcamp stack Backend Javascript. Having good knowladge and
        skill working with various frameworks and tools through my projects.
      </p>
      <p className="text-sm md:text-lg font-medium mt-7 w-72 md:w-1/2 lg:w-[75%]">
        I have experience in developing Landing Pages using ReactJS and
        developing API using ExpressJS. Currently, I&apos;m seeking an
        opportunity to continue growing my skill set in the Full-Stack field.
      </p>
    </div>
  );
};

export default About;
