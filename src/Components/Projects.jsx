import React, { useContext } from 'react';
import { ThemeContext } from '../themeProvider';


export const Projects = () => {
    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;
    return (
        <>
        <div id="projects" className = { darkmode
                ? "bg-gray-100 pt-24"
                : "bg-black pt-24 text-white"
            }
        >
            <h1 className="text-center text-6xl">Projects</h1>
            
            <div className="h-box">
                <h2 className="text-center text-2xl my-4">Experience is the best teacher</h2>
                <h3 className="text-center text-xl my-4">Projects are very much valuable</h3>
            </div>
        </div>
        </>

    )
};