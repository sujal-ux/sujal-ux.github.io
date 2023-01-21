import React, { useContext } from "react";
import { ThemeContext } from "./../../themeProvider";

export const Editor = () => {
    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkmode;
    return (
        <>
            <div className = 'int-main'>
                <div style={{backgroundImage: `url(${"/img/editor.png"})`, backgroundSize: "cover"}} className="int-bg"></div>
                <div className="count-text3">03</div>
                <div className="int-container">
                    <div className="int-left">
                        <div className='hero-text'>
                            <h1>Sql Editor</h1>
                            <h3>Online Sql Editor</h3>
                        </div>
                    </div>
                    <div className="int-right">
                        <div style={{backgroundImage: `url(${"/img/editor.png"})`, backgroundSize: "cover"}} className='ss'></div>
                    </div>
                </div>
                <div className="desc-bottom">
                    <div className='short-text'><span className="text-blue-400">Role:</span> Frontend</div>
                    <div className='short-text'><span className="text-blue-400">Stack:</span> React, Bootstrap</div>
                    <div className='short-text'><span className="text-blue-400">Period:</span> June-2022</div>
                </div>
            </div>
            <div className = "project-desc3">
                <div className = "hero-text">
                    <h1>AtSQL</h1>
                    <h3>An online SQL Editor</h3>
                </div>
                <div className = "desc">
                Sportland aims to promote the economy and tourism in the foothills and the High Friuli thanks to the multiple 
                sports that you can enjoy in the area. The municipal government is working on this project since a long time 
                willing to relaunch the economy and tourism of the whole territory.
                </div>
                <div className="website-button">
                    <a href="http://theintellects.tk/" target= "_blank">Visit Website</a>
                </div>
            </div>
        </>
    )
}