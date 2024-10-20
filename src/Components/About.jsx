import React from 'react';

export const About = () => {

    return (
        <>
        <div id="about" className = "about-box">
            <div className="max-w-7xl px-6 mx-auto font-raleway content-center">
                <h1 className="text-center text-5xl md:text-6xl tracking-wider">About</h1>
                <div className="container">
                    <div className="c1" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <img src="img/sujal.jpeg" alt="Sujal"/>
                    </div>
                    <div className="c2 font-semibold">
                        <h2 className="tracking-wider" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            Sujal Modanwal
                        </h2>
                        <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <p> 
                                Hey! I'm Sujal Modanwal, a self taught Software Engineer and Web Developer who is also passionate about 
                                Competitive Programming and Data Structures and Algorithms. I have been developing websites since two 
                                years. I have also solved 2000+ problems in competitive platforms, being Expert and 5 star at Codeforces 
                                and Codechef respectively.
                            </p>
                            <p>    
                                I have good code habits, pursue the clear structure, and strong logic. Moreover, I'm quick thinking, 
                                good at learning new methods and technologies, and can proactively analyze and solve problems. Scroll down 
                                to know more about me.
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