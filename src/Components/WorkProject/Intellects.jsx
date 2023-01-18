import React, { useContext } from "react";
import { ThemeContext } from "./../../themeProvider";

export const Intellects = () => {
    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;
    
    return (
        <>
            <div className = 'int-main'>
            <div style={{backgroundImage: `url(${"/img/stb2.png"})`, backgroundSize: "cover"}} className="int-bg"></div>
                <div className="int-left">
                    <div className='hero-text'>
                        <h1>The Intellects</h1>
                        <h3>A website cum resource</h3>
                    </div>
                </div>
                <div className="int-right">
                    <div style={{backgroundImage: `url(${"/img/Intellects.png"})`, backgroundSize: "cover"}} className='ss'></div>
                </div>
                </div>
        </>
    )
}