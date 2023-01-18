import React, { useContext } from "react";
import { ThemeContext } from "./../../themeProvider";

export const Hands = () => {
    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;
    return (
        <>
            <div className = 'int-main'>
                <div style={{backgroundImage: `url(${"/img/Handsfront.png"})`, backgroundSize: "cover"}} className="int-bg"></div>
                <div className="int-right">
                    <div style={{backgroundImage: `url(${"/img/Handshelper.png"})`, backgroundSize: "cover"}} className='ss'></div>
                </div>
                <div className="int-left">
                    <div className='hero-text'>
                        <h1>Hands</h1>
                        <h3>A Frontend Application</h3>
                    </div>
                </div>
                
            </div>
        </>
    )
}