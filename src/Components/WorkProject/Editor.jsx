import React, { useContext } from "react";
import { ThemeContext } from "./../../themeProvider";

export const Editor = () => {
    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;
    return (
        <>
            <div className = 'int-main'>
                <div style={{backgroundImage: `url(${"/img/Editor.png"})`, backgroundSize: "cover"}} className="int-bg"></div>
                <div className="int-left">
                    <div className='hero-text'>
                        <h1>SQL Editor</h1>
                        <h3>An online Sql editor</h3>
                    </div>
                </div>
                <div className="int-right">
                    <div style={{backgroundImage: `url(${"/img/Editor.png"})`, backgroundSize: "cover"}} className='ss'></div>
                </div>
                
            </div>
        </>
    )
}