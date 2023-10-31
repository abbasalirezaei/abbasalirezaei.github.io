import React from "react";
import image1 from "../../../images/portfolio/project-01.jpg";
import image2 from "../../../images/portfolio/project-02.jpg";
import image3 from "../../../images/portfolio/project-03.jpg";
import image4 from "../../../images/portfolio/project-04.jpg";
import PortfolioItem from "./PortfolioItem";

const portfolioData = [
  {
    id: 1,
    image: image1,
    title: "Space Bootstrap 5 Multipurpose Template",
    link: "#0",
    description:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
  {
    id: 2,
    image: image2,
    title: "eCommerce HTML Bootstrap 5 UI Kit",
    link: "#0",
    description:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
  {
    id: 3,
    image: image3,
    title: "Basic – Tailwind CSS Template",
    link: "#0",
    description:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
  {
    id: 4,
    image: image4,
    title: "Gearix Car repair App",
    link: "#0",
    description:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
];

const Portfolio = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {portfolioData.map((portfolio, id) => (
          <PortfolioItem portfolio={portfolio} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
