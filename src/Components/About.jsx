import React, { useContext, useRef } from 'react';
import { ThemeContext } from '../themeProvider';
import Zoom from 'react-reveal/Zoom';

export const About = () => {
    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;
    const animateClass = useRef();
    
    // useEffect(() => {
    //     const onScroll = () => {
    //         var len = window.pageYOffset;
    //         if(len>500) {
    //             animateClass.current.classList.add("fade-left");
    //         }
    //         else {
    //             animateClass.current.classList.remove("fade-left");
    //         }
    //     };

    //     window.removeEventListener('scroll', onScroll);
    //     window.addEventListener('scroll', onScroll, { passive: true });
    //     return () => window.removeEventListener('scroll', onScroll);
    // }, []);

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
                        <Zoom><img src="img/sujal.jpeg" alt="Sujal"/></Zoom>
                    </div>
                    <div className="c2 font-semibold" ref={animateClass}>
                        <h2 className = { darkmode 
                            ? "text-black"
                            : "text-white"
                            }
                        >Sujal Modanwal
                        </h2>
                        <p> Hey! I'm Sujal Modanwal, 22 years old. I've been close to a computer since an early age, and been 
                            passionate about it ever since. Currently, I'm still a student and will be graduated soon. Keep following 
                            me, I will share my journey as a web developer here from time to time.
                        </p>
                        <p>    
                            I have good code habits, pursue the clear structure, and strong logic. Moreover, I'm quick thinking, 
                            good at learning new methods and technologies, and can proactively analyze and solve problems.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};