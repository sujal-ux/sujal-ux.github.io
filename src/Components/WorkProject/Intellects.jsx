import React from "react";

export const Intellects = () => {
    
    return (
        <>
            <div id ="projects" className = 'int-main'>
                <div style={{backgroundImage: `url(${"/img/stb3.png"})`, backgroundSize: "cover"}} className="int-bg"></div>
                <div className="count-text">01</div>
                <div className="int-container">
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
                <div className="desc-bottom">
                    <div className='short-text'><span className="text-orange-400">Role:</span> Frontend-Backend</div>
                    <div className='short-text'><span className="text-orange-400">Stack:</span> HTML, CSS, JavaScript, Nodejs, Express </div>
                    <div className='short-text'><span className="text-orange-400">Period:</span> Sept, 2020</div>
                </div>
            </div>
            <div className = "project-desc1">
                <div className = "hero-text font-light md:font-bold">
                    <h1>The Intellects</h1>
                    <h3>A website cum resource</h3>
                </div>
                <div className = "desc">
                Intellects aims to make college life easy by providing three utilities called Connect, Online Library and a Blog Page.
                College students can use connect page to know about each other applying filters for state, department, year, etc. They can 
                also use online library to obtain notes, online books and PYQs. A fancy blog page (Simply The Best) to share your ideas beautifying it with the help of Markdown. 
                Click below button to navigate through Intellects. 
                </div>
                <div className="website-button hover:text-sky-700">
                    <a href="https://github.com/SuMRoG/The-Intellects" target= "_blank">Visit Source</a>
                </div>
            </div>
        </>
    )
}