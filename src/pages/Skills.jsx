import React from "react";

const skills = [
  {
    id: 1,
    name: "React",
    icon: "",
  },
  {
    id: 2,
    name: "Javascript",
    icon: "",
  },
  {
    id: 3,
    name: "HTML",
    icon: "",
  },
  {
    id: 4,
    name: "CSS",
    icon: "",
  },
];

const Skills = () => {
  return (
    <div className=" px-4 md:px-10 h-screen flex flex-col justify-center items-center text-center space-y-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-10">
        SKILLS
      </h1>
      <div className="flex">
        {skills.map((skill) => (
          <div
            className="avatar flex flex-col w-32 text-center items-center"
            key={skill.id}
          >
            <div className="mask mask-hexagon w-24">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
            <p className="text-2xl text-white">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
