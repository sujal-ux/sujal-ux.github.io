import React, { useContext } from "react";
import { ThemeContext } from "./../../themeProvider";

export const Hands = () => {
    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;
    return (
        <>
            <div className = 'int-main'>
                <div style={{backgroundImage: `url(${"/img/Handseeker.png"})`, backgroundSize: "cover"}} className="int-bg"></div>
                <div className="count-text2">02</div>
                <div className="int-container">
                    <div className="int-right">
                    <div style={{backgroundImage: `url(${"/img/Handshelper.png"})`, backgroundSize: "cover"}} className='ss'></div>
                    </div>
                    <div className="int-left">
                        <div className='hero-text'>
                            <h1>Hands</h1>
                            <h3>Frontend Platform</h3>
                        </div>
                    </div>
                </div>
                <div className="desc-bottom">
                    <div className='short-text'><span className="text-rose-600">Role:</span> Frontend</div>
                    <div className='short-text'><span className="text-rose-600">Stack:</span> HTML, CSS, Javascript, React</div>
                    <div className='short-text'><span className="text-rose-600">Period:</span> March-2022 </div>
                </div>
            </div>
            <div className = "project-desc2">
                <div className = "hero-text">
                    <h1>The Hands</h1>
                    <h3>A Frontend Platform</h3>
                </div>
                <div className = "desc">
                Sportland aims to promote the economy and tourism in the foothills and the High Friuli thanks to the multiple 
                sports that you can enjoy in the area. The municipal government is working on this project since a long time 
                willing to relaunch the economy and tourism of the whole territory.
                </div>
                <div className="website-button">
                    <a href="https://uberhands.netlify.app/" target= "_blank">Visit Website</a>
                </div>
            </div>
        </>
    )
}