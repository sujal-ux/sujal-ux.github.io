import React, { useEffect } from "react";
import { Tools } from "../data.js";
import Aos from 'aos';
import 'aos/dist/aos.css';

const SkillRowl = () => {
  return (
    <div className="lang-row-l">
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

const SkillRowr = () => {
  return (
    <div className="lang-row-r">
      <div className="stack">Tailwind</div>
      <div className="stack">&#x2015;</div>
      <div className="stack">Sql</div>
      <div className="stack">&#x2015;</div>
      <div className="stack">MongoDB</div>
      <div className="stack">&#x2015;</div>
      <div className="stack">Sass</div>
      <div className="stack">&#x2015;</div>
      <div className="stack">Git</div>
      <div className="stack">&#x2015;</div>
      <div className="stack">Bootstrap</div>
      <div className="stack">&#x2015;</div>
      <div className="stack">Express</div>
      <div className="stack">&#x2015;</div>
      <div className="stack">Azure</div>
      <div className="stack">&#x2015;</div>
    </div>
  );
};

export const Skills = () => {

  useEffect(()=>{
    Aos.init();
  }, [])

  return (
    <>
      <div id="skills" className="skill-page">
        <div className="quote-box">
            <span><span>&#8220;</span>It is possible to fly without motor but not without skills and knowledge<span>&#8221;</span></span>
            <div className="small-quote pt-4">The grind never stops</div>
        </div>
        
        <div className="skillbox">
          <div className="rBox text-center">
            <h2 className="m:text-3xl text-4xl pb-8">Technologies and Tools</h2>
            <div className="toolBox">
              {Tools.map((tool) => (
                <div data-aos="slide-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="600" 
                className="icon align-middle">
                  <img src={tool.link} alt="Icon" />
                  <h3 className="m:text-lg">{tool.name}</h3>
                </div>
              ))}

              <div className="icon opacity-0"></div>
            </div>
          </div>
        </div>

        <div className="mt-100 m:mt-0 movingText">
          <div className="runningText">
              {[...Array(10)].map((x, i) => <SkillRowl key={i}/>)}
          </div>
        </div>
        <div className="movingText">
          <div className="runningText">
              {[...Array(10)].map((x, i) => <SkillRowr key={i}/>)}
          </div>
        </div>

      </div>
    </>
  );
};
