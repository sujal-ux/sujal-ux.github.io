import React, { useContext } from 'react';
import { ThemeContext } from '../themeProvider';

export const About = () => {
    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;

    return (
        <>
        <div id="about" className = { darkmode
                ? "bg-gray-100 pt-24"
                : "bg-black pt-24 text-white"
            }
        >
            <div className="max-w-7xl px-6 mx-auto font-raleway content-center">
                <h1 className="text-center text-6xl">About</h1>
                <div className="container">
                    <div className="c1">
                        <img src="img/sujal.jpeg" alt="Sujal"/>
                    </div>
                    <div className="c2 font-semibold">
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
                <div className='flex justify-around mt-10'><div className='vertical-line'></div></div>
            </div>
        </div>
        </>
    )
};