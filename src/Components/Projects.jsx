import React, { useContext } from 'react';
import { ThemeContext } from '../themeProvider';

export const Projects = () => {
    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;
    return (
        <>
        <div id="projects" className = { darkmode
                ? "bg-gray-100 pt-24 md:h-screen"
                : "bg-black pt-24 text-white md:h-screen"
            }
        >
            <h1 className="text-center text-6xl">Projects</h1>
        </div>
        </>
    )
};