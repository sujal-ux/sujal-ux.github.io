import React, { useState, useContext } from 'react'
import { Link } from 'react-scroll'
import { ThemeContext } from "../themeProvider"
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";

export const Navbar = () => {
    const theme = useContext(ThemeContext);
    const [toggle, setToggle] = useState(false);
    const darkmode = theme.state.darkmode;
    const links = [
        {
            name: "Home",
            route: "/"
        },
        {
            name: "About",
            route: "about"
        },
        {
            name: "Skills",
            route: "skills"
        },
        {
            name: "Projects",
            route: "projects"
        }, 
        {
            name: "Contact",
            route: "contact"
        }
    ]

    function toggleTheme() {
        if(darkmode === true) {
            theme.dispatch({ type: "LIGHTMODE" });
        }
        else {
            theme.dispatch({ type: "DARKMODE" });
        }
    }

    return (
        <>
        <nav 
            className = { darkmode
                ? "bg-white border-gray-200 z-50 shadow-lg md:px-8 px-1 fixed w-full top-0 font-raleway"
                : "bg-gray-700 border-gray-200 z-50 shadow-lg md:px-8 px-1 fixed w-full top-0 font-raleway"
            }
        >
            <div className="flex justify-between items-center py-2 md:py-4 md:px-2 pl-2 mx-auto">
                <div className="flex items-center cursor:pointer">
                    <a href="/" className={ darkmode
                    ? "text-xl font-medium text-decoration-none text-black"
                    : "text-xl font-medium text-decoration-none text-white"
                    }
                    >
                       { `Sujal Modanwal` }
                    </a>
                </div>
                <div className="hidden justify-between items-center w-full md:flex md:w-auto">
                    <ul className={"flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium"}>
                        {links.map((sec)=>(
                            <li className="cursor-pointer" key={sec.name}>
                                <Link
                                    to={sec.route}
                                    activeClass={"text-white bg-blue-500"}
                                    spy={true}
                                    className={darkmode
                                        ?"block py-2 px-3 cursor:pointer text-black hover:bg-blue-500 hover:text-white rounded-md"
                                        :"block py-2 px-3 text-white hover:bg-blue-500 hover:text-black rounded-md"
                                    }
                                >
                                    {sec.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div onClick={() => toggleTheme()}>
                        {darkmode ? (
                            <img
                            src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-sun-lighting-flaticons-flat-flat-icons.png"
                            className="w-6 ml-6 cursor-pointer hover:scale-1.50 block"
                            alt=""
                            />
                        ) : (
                            <img
                            src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-moon-astrology-and-symbology-prettycons-lineal-color-prettycons.png"
                            className="w-6 ml-6 cursor-pointer hover:scale-1.50 block"
                            alt=""
                            />
                        )}
                        </div>
                    </div>

                    <div className="flex md:hidden items-center">
                        <div onClick={() => toggleTheme()}>
                        {darkmode ? (
                            <img
                            src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-sun-lighting-flaticons-flat-flat-icons.png"
                            className="w-6 mr-4 cursor-pointer hover:scale-1.50 block"
                            alt=""
                            />
                        ) : (
                            <img
                            src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-moon-astrology-and-symbology-prettycons-lineal-color-prettycons.png"
                            alt=""
                            className="w-6 mr-4 cursor-pointer hover:scale-1.50 block"
                            />
                        )}
                    </div>
                    
                    <Hamburger
                        toggled={toggle}
                        size={22}
                        duration={0.8}
                        distance={"lg"}
                        toggle={setToggle}
                        color={darkmode ? "#000000" : "#ffffff"}
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
                className={
                darkmode
                    ? "bg-white py-2 px-2 md:p-0 z-50 fixed top-16 mt-2 rounded-lg shadow-lg right-2 block w-40"
                    : "bg-black py-2 px-2 md:p-0 z-50 fixed top-16 mt-2 rounded-lg shadow-lg right-2 block w-40"
                }
            >
                <ul className="md:hidden md:flex-row md:space-y-8 md:mt-0 md:text-md md:font-medium">
                    {links.map((el) => (
                        <Link
                        to={el.route}
                        activeClass={"text-white bg-blue-500"}
                        className={
                            darkmode
                            ? "hover:bg-blue-500 text-black block px-3 py-2 rounded-md text-base font-medium mt-1 hover:text-white"
                            : "hover:bg-blue-500 text-white block px-3 py-2 rounded-md text-base font-medium mt-1 hover:text-white"
                        }
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
