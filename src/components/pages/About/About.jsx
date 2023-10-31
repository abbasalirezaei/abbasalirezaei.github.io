import React from "react";
import Skills from "./Skills/Skills";

const About = () => {
  return (
    <section className="py-8">
      <div className="flex flex-wrap md:px-4">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Who am I?</h3>
            <p className="text-sm text-gray-400 leading-6 mb-3">
              I hold a Bachelor's degree in Computer Science from Isfahan University. My passion for the field of computers, particularly programming, drives my continuous learning and improvement. While I am in the early stages of my career and lack professional work experience, I have dedicated myself to comprehensive training and diligent practice. My enthusiasm for learning new concepts is complemented by my ability to quickly grasp and apply them. I am deeply committed to problem-solving and task completion.

            </p>

          </div>
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">LANGUAGES</h3>
            <p className="text-sm text-gray-400 leading-6 mb-3">
              English

            </p>
            <p className="text-sm text-gray-400 leading-6 mb-3">
              Deutsch

            </p>
            <p className="text-sm text-gray-400 leading-6 mb-3">
              Persian

            </p>

          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
