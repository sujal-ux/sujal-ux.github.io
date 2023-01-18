import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import Typical from "react-typical";

export const Home = () => {
  const theme = useContext(ThemeContext);
  const darkmode = theme.state.darkmode;
  return (
    <>
      <div
        style={
          darkmode
            ? {
                backgroundImage: `url(${"img/light.jpg"})`,
                backgroundSize: "cover",
              }
            : {
                backgroundImage: `url(${"img/dark2.jpg"})`,
                backgroundSize: "cover",
              }
        }
        className="md:h-screen"
      >
        <main
          className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
          id="/"
        >
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <motion.span
                className={darkmode ? "block text-black" : " text-white"}
              >
                Hi, I am Sujal
              </motion.span>
              <span className="block text-blue-500 font-normal z-0 lg:inline">
                <Typical
                  steps={[
                    "Software Engineer",
                    1000,
                    "Front End Developer",
                    1000,
                    "Full Stack Developer",
                    1000,
                  ]}
                  loop={Infinity}
                />
              </span>
            </h1>
          </div>
          <div className="sm: text-center lg: text-right">
            <div className="console-box">
              <div className="console-head">
                <i className="console-head-dot"></i>
                <i className="console-head-dot"></i>
                <i className="console-head-dot"></i>
              </div>
              <div className="console-body">
                <div className="console-body-row">
                  <i className="fa fa-dollar text-blue-200"></i>
                  <div className="console-body-text text-blue-200">npm install @love.js</div>
                </div>
                <div className="console-body-row">
                  <i className="fa fa-angle-right text-orange-400"></i>
                  <div className="console-body-text text-orange-400">installing...100%</div>
                </div>
                <div className="console-body-row">
                  <i className="fa fa-angle-right text-red-400"></i>
                  <div className="console-body-text text-red-400">error: love not found</div>
                </div>
                <div className="console-body-row">
                  <i className="text-blue-200">#</i>
                  <div className="console-body-text text-blue-200">try: npm install -g @gf.js</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
