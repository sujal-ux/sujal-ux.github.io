import React, { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../themeProvider";
import { Tools } from "../data.js";

const SkillRow = () => {
  return (
    <div className="lang-row">
      <div className="stack">HTML</div>
      <div className="stack">&#x2015;</div>
      <div className="stack">CSS</div>
      <div className="stack">&#x2015;</div>
      <div className="stack">JavaScript</div>
      <div className="stack">&#x2015;</div>
      <div className="stack">React</div>
      <div className="stack">&#x2015;</div>
      <div className="stack">Next</div>
      <div className="stack">&#x2015;</div>
      <div className="stack">Node.js</div>
      <div className="stack">&#x2015;</div>
      <div className="stack">C</div>
      <div className="stack">&#x2015;</div>
      <div className="stack">C++</div>
      <div className="stack">&#x2015;</div>
    </div>
  );
};

export const Skills = () => {
  const theme = useContext(ThemeContext);
  const darkmode = theme.state.darkmode;
  const animateClass = useRef();
  const fields = [
    "Competitive Programming",
    "FrontEnd Development",
    "Backend Development",
    "Data Structures and Algorithms",
    "Open Source",
  ];
  const fieldClass = useRef();

  useEffect(() => {
    var idx = 0;
    const setID = setInterval(() => {
      const c_height = 68;
      if (fieldClass.current) {
        fieldClass.current.scrollTop = c_height * idx;
        fieldClass.current.children[
          (idx - 1 + fields.length) % fields.length
        ].classList.remove("font-bold");
        fieldClass.current.children[idx].classList.add("font-bold");
      }
      idx = (idx + 1) % fields.length;
    }, 1000);
    return () => clearInterval(setID);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      var len = window.pageYOffset;
      if (len > 1300) {
        animateClass.current.classList.add("fade-down");
      } else {
        animateClass.current.classList.remove("fade-down");
      }
    };

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        id="skills"
        className={
          darkmode
            ? "bg-gray-100 pt-24"
            : "bg-black pt-24 text-white"
        }
      >
        <h1 className="text-center text-6xl">Skills</h1>
        <div className="movingText">
          <div className="runningText-l">
            {[...Array(10)].map((x, i) => <SkillRow key={i}/>)}
          </div>
        </div>

        <div className="skillbox">
          <div className="lBox text-3xl text-center">
            <h2>Fields</h2>
            <div className="field">
              <div className="fieldBox" ref={fieldClass}>
                {fields.map((field, idx) => (
                  <h3 className="text-slate-400 my-4">{field}</h3>
                ))}
              </div>
            </div>
          </div>
          <div className="rBox text-center">
            <h2 className="text-3xl">Technologies and Tools</h2>
            <div className="toolBox" ref={animateClass}>
              {Tools.map((tool) => (
                <div className="icon align-middle">
                  <img src={tool.link} alt="Icon" />
                  <h3 className="text-lg">{tool.name}</h3>
                </div>
              ))}

              <div className="icon opacity-0"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
