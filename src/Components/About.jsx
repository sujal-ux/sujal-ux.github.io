import React, { useContext } from 'react';
import { ThemeContext } from '../themeProvider';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

export const About = () => {
    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;
    return (
        <>
        <div id="about" className = { darkmode
                ? "bg-gray-100 pt-24 md:h-screen"
                : "bg-black pt-24 text-white md:h-screen"
            }
        >
            <div className="max-w-7xl px-6 mx-auto font-raleway">
                <h1 className="text-center text-6xl">About</h1>
                <div className="container">
                    <div className="c1">
                        <Zoom duration="1500"><img src="img/sujal.jpeg" alt="Sujal"/></Zoom>
                    </div>
                    <div className="c2 font-semibold">
                        <h2 className = { darkmode 
                            ? "text-black"
                            : "text-white"
                            }
                        >Sujal Modanwal
                        </h2>
                        <Fade bottom cascade distance="40%" duration="1500">
                        <p> Hey! I'm Sujal Modanwal, 22 years old. I've been close to a computer since an early age, and been 
                            passionate about it ever since. Currently, I'm still a student and will be graduated soon. Keep following 
                            me, I will share my journey as a web developer here from time to time.
                        </p>
                        <p>    
                            I have good code habits, pursue the clear structure, and strong logic. Moreover, I'm quick thinking, 
                            good at learning new methods and technologies, and can proactively analyze and solve problems.
                        </p>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};