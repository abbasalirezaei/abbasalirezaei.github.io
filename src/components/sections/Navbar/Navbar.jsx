import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
  Routes
} from "react-router-dom";
import About from "../../pages/About/About";
import Blog from "../../pages/Blog/Blog";
import Contact from "../../pages/Contact/Contact";
import Portfolio from "../../pages/Portfolio/Portfolio";
import Service from "../../pages/Service/Service";

const navbarData = [
  {
    id: 1,
    title: "About",
    to: "/about",
  },
  {
    id: 2,
    title: "Services",
    to: "/services",
  },
  {
    id: 3,
    title: "Works",
    to: "/works",
  },
  {
    id: 4,
    title: "Blogs",
    to: "/blogs",
  },
  {
    id: 5,
    title: "Contact",
    to: "/contact",
  },
];

const Navbar = () => {
  return (
    <Router>
      <nav className="md:mx-8 mb-3 px-6 py-2 z-10 sticky top-0 bg-white shadow rounded">
        <ul className="flex flex-wrap">
          {navbarData.map((el, id) => (
            <LinkItem el={el} key={id} />
          ))}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/works" element={<Portfolio />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        {/* <Route exact path="/">
          <About />
        </Route>
        
        <Route path="/services">
          <Service />
        </Route>
        
        <Route path="/works">
          <Portfolio />
        </Route>
        
        <Route path="/blogs">
          <Blog />
        </Route>
        
        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/about">
          <About />
        </Route> */}


      </Routes>
    </Router>
  );
};

export default Navbar;

const LinkItem = (props) => {
  const { title, to } = props.el;
  return (
    <li className="m-3 lg:mx-5">
      <NavLink
        to={to}
        activeClassName="text-purple-600"
        className="text-gray-800 text-medium hover:text-purple-600"
      >
        {title}
      </NavLink>
    </li>
  );
};
