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
            Bachelor’s in Computer Science | Isfahan University
\<br />
I am a dedicated and enthusiastic computer science graduate with a deep passion for programming and a commitment to lifelong learning. Although I am at the beginning of my professional journey, I have actively engaged in intensive training and practical projects to develop a robust foundation in software development. My quick adaptability to new technologies and strong problem-solving skills enable me to tackle challenges effectively and deliver impactful solutions. Eager to grow and contribute, I am excited to bring my skills and enthusiasm to innovative projects within the tech industry.
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
