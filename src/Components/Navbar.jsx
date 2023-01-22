import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [hideNavbar, sethideNavbar] = useState(false);

  const links = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About",
      route: "about",
    },
    {
      name: "Skills",
      route: "skills",
    },
    {
      name: "Projects",
      route: "projects",
    },
    {
      name: "Contact",
      route: "contact",
    },
  ];

  useEffect(() => {
    var prevScroll = window.pageYOffset;
    window.addEventListener("scroll", () => {
        var curScroll = window.pageYOffset;
        if(curScroll > prevScroll) sethideNavbar(true);
        else sethideNavbar(false);
        prevScroll = curScroll;
    });
  }, []);

  return (
    <>
      <nav className={hideNavbar? "navbar-box navbar-hidden": "navbar-box"}>
        <div className="flex justify-between items-center py-2 md:py-4 md:px-2 pl-2 mx-auto">
          <div className="flex items-center cursor:pointer">
            <a
              href="/"
              className="text-xl tracking-widest text-decoration-none text-white"
            >
              {`Sujal Modanwal`}
            </a>
          </div>
          <div className="hidden justify-between items-center w-full md:flex md:w-auto">
            <ul
              className="flex flex-col tracking-wider mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium"
            >
              {links.map((sec) => (
                <li className="cursor-pointer" key={sec.name}>
                  <Link
                    to={sec.route}
                    spy={true}
                    className="block py-2 px-3 text-amber-400 hover:bg-blue-500 rounded-md"
                    activeClass="active-nav"
                  >
                    {sec.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex md:hidden items-center">
            <Hamburger
              toggled={toggle}
              size={22}
              duration={0.8}
              distance={"lg"}
              toggle={setToggle}
              color={"#000000"}
            />
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0, transition: { type: "spring" } }}
            exit={{ x: 200, transition: { type: "spring" } }}
            className="bg-white py-2 px-2 md:p-0 z-50 fixed top-16 mt-2 rounded-lg shadow-lg right-2 block w-40"
          >
            <ul className="md:hidden md:flex-row md:space-y-8 md:mt-0 md:text-md md:font-medium">
              {links.map((el) => (
                <Link
                  to={el.route}
                  activeClass={"text-white bg-blue-500"}
                  className="hover:bg-blue-500 text-black block px-3 py-2 rounded-md text-base font-medium mt-1 hover:text-white"
                  spy={true}
                  smooth={true}
                  onClick={() => setToggle(false)}
                >
                  <li>{el.name}</li>
                </Link>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
