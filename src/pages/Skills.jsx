import React from "react";
import { FaReact,FaJs,FaHtml5,FaCss3 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  {
    id: 1,
    name: "React",
    icon: <FaReact size={50}/>,
  },
  {
    id: 2,
    name: "Javascript",
    icon: <FaJs size={50}/>,
  },
  {
    id: 3,
    name: "HTML",
    icon: <FaHtml5 size={50}/>,
  },
  {
    id: 4,
    name: "CSS",
    icon: <FaCss3 size={50}/>,
  },
  {
    id: 5,
    name: "Tailwind",
    icon: <SiTailwindcss size={50}/>,
  },
];

const Skills = () => {
  return (
    <div className=" px-4 md:px-10 h-screen flex flex-col justify-center items-center text-center space-y-24 ">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-10">
        SKILLS
      </h1>
      <div className="flex">
        {skills.map((skill) => (
          <div
            className="avatar flex flex-col w-32 text-center items-center"
            key={skill.id}
          >
            <div className="mask mask-hexagon w-24 bg-white">
              <div className="flex justify-center items-center h-full">
                {skill.icon}
              </div>
            </div>
            <p className="text-2xl text-white">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
