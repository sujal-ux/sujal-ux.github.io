import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../themeProvider';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Contact = () => {
    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;
    useEffect(()=>{
        Aos.init();
    }, [])
    return (
        <>
        <div id="contact" className = { darkmode
                ? "bg-gray-100 flex flex-col items-center p-24"
                : "bg-black p-24 flex flex-col items-center text-white"
            }
        >
            <div data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="contact-text">
                <h1>Interested to know more? Contact on the below links or <a href="https://api.whatsapp.com/send/?phone=%2B916376781013&text&type=phone_number&app_absent=0" target="_blank"> 
                <span className="text-green-400">whatsapp me -></span></a></h1>
            </div>
        </div>
        </>
    )
};