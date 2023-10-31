import React from "react";
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";
import profile from "../../../images/profile.jpg";
import cv from "../../../images/cv.pdf";

const socials = [
  {
    id: 1,
    icon: <FaFacebookF />,
    link: "#0",
  },
  {
    id: 2,
    icon: <FaGithub />,
    link: "https://github.com/abbasalirezaei",
  },
  {
    id: 3,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/abbasalirezaei79/  ",
  },
  {
    id: 4,
    icon: <FaInstagram />,
    link: "https://www.instagram.com/rezaei_.79/",
  },
  // {
  //   id: 5,
  //   icon: <FaBehance />,
  //   link: "#0",
  // },
  // {
  //   id: 6,
  //   icon: <FaDribbble />,
  //   link: "#0",
  // },
  // {
  //   id: 7,
  //   icon: <FaSkype />,
  //   link: "#0",
  // },
  {
    id: 7,
    icon: <FaTwitter />,
    link: "https://twitter.com/rezaei_79",
  },
];

const Sidebar = () => {
  return (
    <aside className="sticky top-0 bg-white md:mx-8 lg:mx-4 mb-8 p-6 shadow-md rounded-md -mt-40">
      <div className="w-24 h-24 rounded-md overflow-hidden mx-auto mb-5">
        <img src={profile} alt="shafiqhammad" className="w-full" />
      </div>
      <div className="text-center">
        <h1 className="text-xl text-gray-800 font-bold mb-1">Abbasali Rezaei</h1>
        <p className="text-sm text-gray-400 mb-3">
          Full Stack Web Developer
          {/* <a href="#0" className="text-purple-600 pl-1">
            Abc Company
          </a> */}
        </p>
        <a
          href={cv}
          className="inline-block mb-3 rounded bg-purple-600 text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-purple-800"
          download="Resume"
        >
          Download Resume
        </a>
        <ul className="flex flex-wrap justify-center">
          {socials.map((social, id) => (
            <SocialIcon social={social} key={id} />
          ))}
        </ul>
      </div>
      <div className="text-start pt-4">
        <h3 className="text-md mb-2 uppercase font-medium text-gray-800">
          About Me
        </h3>
        <p className="text-gray-400 text font-light leading-relaxed">
        I hold a Bachelor's degree in Computer Science from Isfahan University. My passion for the field of computers, particularly programming, drives my continuous learning and improvement...

        
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;

const SocialIcon = (props) => {
  const { icon, link } = props.social;
  return (
    <li className="m-2">
      <a
        href={link}
        className="w-8 h-8 bg-purple-100 rounded text-purple-800 flex items-center justify-center hover:text-white hover:bg-purple-600"
      >
        {icon}
      </a>
    </li>
  );
};
