import React, { useEffect } from "react"
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Footer = () => {
    useEffect(()=>{
        Aos.init();
      }, [])
    return (
        <>
            <div data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="200" className="footer-container">
                <div className="name-container">Sujal Modanwal</div>
                <div className="social-container">
                    <ul className="social-icons">
                        <li><a href="https://www.linkedin.com/in/sujal-modanwal/"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="https://www.instagram.com/sujal_here/"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="https://github.com/sujal-ux"><i className="fa fa-github"></i></a></li>
                        <li><a href="mailto:sumo12082000@gmail.com"><i className="fa-solid fa-envelope"></i></a></li>
                    </ul>
                    <div className="copyright-section">© 2023 Sujal Modanwal. All rights reserved.</div>
                </div>
                
            </div>
        </>
    )
};