import React from "react";
import SkillItem from "./SkillItem";

const skillData = [
  {
    
    title: "Django",
    percentage: "85%",
  },
  {
    
    title: "DRF",
    percentage: "90%",
  },
  
  {
    
    title: "Python",
    percentage: "85%",
  },
  {
    
    title: "JAVASCRIPT",
    percentage: "78%",
  },
  {
    
    title: "POSTGRESQL",
    percentage: "70%",
  },
  {
    
    title: "SQL",
    percentage: "75%",
  },
  {
    
    title: "LINUX",
    percentage: "50%",
  },

  {
    
    title: "Html, Css, Scss",
    percentage: "80%",
  },
  {
    
    title: "Bootstrap",
    percentage: "98%",
  },
  {
    
    title: "TailwindCSS",
    percentage: "90%",
  },
  {
    
    title: "ReactJS",
    percentage: "70%",
  },
  {
    
    title: "MongoDB",
    percentage: "30%",
  },
  {
    
    title: "Git, Github",
    percentage: "70%",
  },
  {
    
    title: "TEAM WORK",
    percentage: "100%",
  },
  {
    
    title: "RESPONSIBILITY",
    percentage: "100%",
  },
  {
    
    title: "SELF-MOTIVATED",
    percentage: "100%",
  },
  {
    
    title: "PROBLEM SOLVING",
    percentage: "100%",
  },
];

const Skills = () => {
  return (
    <div className="py-4">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Skills</h3>
          </div>
        </div>
        {skillData.map((skill, index) => (
          <SkillItem skill={skill} key={index+1} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
