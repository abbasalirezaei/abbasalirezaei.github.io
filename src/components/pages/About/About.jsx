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
              <br />
              I’m an IT and Telecommunication Specialist focused on designing, maintaining, and troubleshooting critical network infrastructure in the oil and gas industry.
              Currently at South Zagros Oil & Gas Production Company, I manage local area networks (LAN), industrial switches, routers, and communication links including fiber, radio, and VSAT. I also work extensively with VoIP systems, Windows Server, Hyper-V, and IP CCTV.
              My approach combines technical precision with a problem-solving mindset ensuring that telecommunication systems are reliable, secure, and efficient in demanding environments.
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
