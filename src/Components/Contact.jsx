import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Contact = () => {
    useEffect(()=>{
        Aos.init();
    }, [])
    return (
        <>
        <div id="contact" className = "bg-gray-100 flex flex-col items-center">
            <div className="contact-text p-10 md:p-24">
                <div data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-out" data-aos-duration="600">
                <h1>Interested to know more? <a className="text-sky-700" href="mailto:sumo12082000@gmail.com">Contact</a> on the below 
                links or <a className="text-green-400" href="https://api.whatsapp.com/send/?phone=%2B916376781013&text&type=phone_number&app_absent=0" target="blank"> 
                <span className="underline underline-offset-8">whatsapp</span> me -{'>'}</a></h1>
                </div>
            </div>
            <div className="footer-container">
                <div data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-out" data-aos-duration="600">
                <div className="name-container">Sujal Modanwal</div>
                <div className="social-container">
                    <ul className="social-icons">
                        <li><a href="https://www.linkedin.com/in/sujal-modanwal/" target="blank"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="https://www.instagram.com/sujal_here/" target="blank"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="https://github.com/sujal-ux" target="blank"><i className="fa fa-github"></i></a></li>
                        <li><a href="mailto:sumo12082000@gmail.com" target="blank"><i className="fa-solid fa-envelope"></i></a></li>
                    </ul>
                    <div className="copyright-section">© {new Date().getFullYear()} Sujal Modanwal. All rights reserved.</div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
};