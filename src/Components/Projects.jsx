import React, { useContext } from 'react';
import { ThemeContext } from '../themeProvider';


export const Projects = () => {
    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;
    return (
        <>
        <div id="projects" className = { darkmode
                ? "bg-gray-100 pt-14"
                : "bg-gradient-to-b from-slate-700 to-sky-800 pt-24 text-white"
            }
        >
            <div className="h-box">
                <h1 className="p-head">Projects</h1>
                <h2 className="main-text">Experience is the best teacher!</h2>
            </div>
        </div>
        </>

    )
};