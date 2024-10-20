import React from "react";

export const Editor = () => {;
    return (
        <>
            <div id ="projects" className = 'int-main'>
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
                        <div style={{backgroundImage: `url(${"/img/editor2.png"})`, backgroundSize: "cover"}} className='ss'></div>
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
                AtSql is a prototype of an online SQL Editor where people can write their SQL queries and run them to obtain output. 
                User can utilise multiple tabs at the same time to run more than one query at a time. Auto fill of queries is also 
                provided to enhance user experience. 
                </div>
                <div className="website-button hover:text-slate-800">
                    <a href="https://editorsql.netlify.app/" target= "_blank" rel="noreferrer">Visit Website</a>
                </div>
            </div>
        </>
    )
}