import React from 'react';

export const About = () => {

    return (
        <>
        <div id="about" className = "about-box">
            <div className="max-w-7xl px-6 mx-auto font-raleway content-center">
                <h1 className="text-center text-5xl md:text-6xl tracking-widest">About</h1>
                <div className="container">
                    <div className="c1" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <img src="img/sujal.jpeg" alt="Sujal"/>
                    </div>
                    <div className="c2 font-semibold">
                        <h2 className="tracking-widest" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            Sujal Modanwal
                        </h2>
                        <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <p> 
                                Hey! I'm Sujal Modanwal, 22 years old. I've been close to a computer since an early age, and been 
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
                <div className='flex justify-around mt-10'><div className='vertical-line'></div></div>
            </div>
        </div>
        </>
    )
};