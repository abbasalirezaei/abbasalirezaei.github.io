import React from "react";
import Skills from "./Skills/Skills";

// Data moved outside component for better maintainability
const aboutData = {
  title: "Who am I?",
  role: "IT and Telecommunication Specialist",
  description: `Bachelor's in Computer Science | Isfahan University
    
I'm an IT and Telecommunication Specialist focused on designing, maintaining, and troubleshooting critical network infrastructure in the oil and gas industry. Currently at South Zagros Oil & Gas Production Company, I manage local area networks (LAN), industrial switches, routers, and communication links including fiber, radio, and VSAT. I also work extensively with VoIP systems, Windows Server, Hyper-V, and IP CCTV. My approach combines technical precision with a problem-solving mindset ensuring that telecommunication systems are reliable, secure, and efficient in demanding environments.`,
  languages: [
    { name: "English", flag: "🇬🇧" },
    { name: "Deutsch", flag: "🇩🇪" },
    { name: "Persian", flag: "🇮🇷" }
  ]
};

const About = () => {
  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">

      {/* About Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <span className="mr-2">👤</span> {aboutData.title}
        </h2>
        <div className="bg-gray-50 rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {aboutData.description}
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-200" />

      {/* Languages Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <span className="mr-2">🌍</span> Languages
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {aboutData.languages.map((lang, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
            >
              <span className="text-3xl block mb-2">{lang.flag}</span>
              <span className="text-gray-700 font-medium">{lang.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-200" />

      {/* Skills Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <span className="mr-2">💡</span> Skills & Expertise
        </h2>
        <Skills />
      </div>

      {/* Contact CTA */}
      <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
        <p className="text-gray-700 mb-3">
          📬 Let's connect and discuss how I can help with your IT and telecommunication needs
        </p>
        <a 
          href="#contact" 
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default About;