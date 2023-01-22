import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Contact = () => {
    useEffect(()=>{
        Aos.init();
    }, [])
    return (
        <>
        <div id="contact"  data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-out" data-aos-duration="600"  className = "bg-gray-100 flex flex-col items-center">
            <div className="contact-text p-24">
                <h1>Interested to know more? Contact on the below links or <a href="https://api.whatsapp.com/send/?phone=%2B916376781013&text&type=phone_number&app_absent=0" target="_blank"> 
                <span className="text-green-400">whatsapp me -{'>'}</span></a></h1>
            </div>
            <div className="footer-container">
                <div className="name-container">Sujal Modanwal</div>
                <div className="social-container">
                    <ul className="social-icons">
                        <li><a href="https://www.linkedin.com/in/sujal-modanwal/"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="https://www.instagram.com/sujal_here/"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="https://github.com/sujal-ux"><i className="fa fa-github"></i></a></li>
                        <li><a href="mailto:sumo12082000@gmail.com"><i className="fa-solid fa-envelope"></i></a></li>
                    </ul>
                    <div className="copyright-section">© {new Date().getFullYear()} Sujal Modanwal. All rights reserved.</div>
                </div>
            </div>
        </div>
        </>
    )
};