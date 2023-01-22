import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export const Home = () => {
  const [stage, changeStage] = useState(1);
  const per = useRef();
  const profile = useRef();

  useEffect(() => {
    var id = setInterval(() => {
      var tmp = per.current.innerText;
      var cur = parseInt(tmp);
      cur = cur + 1;
      per.current.innerText = Math.min(cur, 100);
      if (cur >= 100) {
        clearInterval(id);
        changeStage(3);
      }
    }, 60);
  }, []);

  useEffect(() => {
    const pArray = [
      "Software Engineer",
      "Competitive Programmer",
      "Web Developer",
    ];
    var idx = 0,
      cur = 0,
      delay = 0,
      ck = 0;

    setInterval(() => {
      if(delay === 10) delay = 0

      if(delay > 0) {
        delay += 1
        return
      }

      if (idx === -1 && ck === 1) {
        cur = cur + 1;
        idx = 1;
        ck = 0;
        if (cur === pArray.length) cur = 0;
        profile.current.innerText = "";
      } else if (idx === pArray[cur].length) {
        ck = 1;
        idx = idx - 1;
        delay = 1
      }

      let tmpString = pArray[cur].substring(0, idx + 1);
      profile.current.innerText = tmpString;
      if (ck === 0) idx++;
      else idx--;
    }, 100);
  }, []);

  return (
    <>
      <div className="home-page md:h-screen">
        <main
          className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
          id="/"
        >
          <div
            style={{
              backgroundImage: `url(${"img/abstract.jpg"})`,
            }}
            className="home-page-bg"
          ></div>
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
              <motion.span className="block text-white">
                Hi, I am Sujal
              </motion.span>
              <span
                className="text-amber-400 font-normal z-0 m lg:inline"
                ref={profile}
              ></span>
            </h1>
            <button className="button-85" role="button">
              My Resume
            </button>
          </div>
          <div className="sm: text-center lg:text-right">
            <div className="console-box">
              <div className="console-head">
                <i className="console-head-dot"></i>
                <i className="console-head-dot"></i>
                <i className="console-head-dot"></i>
              </div>
              <div className="console-body">
                {stage >= 0 ? (
                  <div className="console-body-row" id="0">
                    <i className="fa fa-dollar text-blue-200"></i>
                    <div className="console-body-text text-blue-200">
                      npm install @success.js
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
                {stage >= 1 ? (
                  <div className="console-body-row" id="1">
                    <i className="fa fa-angle-right text-orange-400"></i>
                    <div className="console-body-text text-orange-400">
                      installing...<span ref={per}>0</span>%
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
                {stage >= 2 ? (
                  <div className="console-body-row" id="2">
                    <i className="fa fa-angle-right text-red-400"></i>
                    <div className="console-body-text text-red-400">
                      error: success not found
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
                {stage >= 3 ? (
                  <div className="console-body-row" id="3">
                    <i className="text-blue-200">#</i>
                    <div className="console-body-text text-blue-200">
                      try: npm install -g @hardwork.js
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
