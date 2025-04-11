import React from "react";

export const Hands = () => {
    return (
        <>
            <div id ="projects" className = 'int-main'>
                <div style={{backgroundImage: `url(${"/img/Handseeker.png"})`, backgroundSize: "cover"}} className="int-bg"></div>
                <div className="count-text2">02</div>
                <div className="int-container">
                {(window.innerWidth > 600) ? 
                    (<><div className="int-right">
                    <div style={{backgroundImage: `url(${"/img/Handshelper.png"})`, backgroundSize: "cover"}} className='ss'></div>
                    </div>
                    <div className="int-left">
                        <div className='hero-text'>
                            <h1>Dolet</h1>
                            <h3>Frontend Platform</h3>
                        </div>
                    </div></> ):
                    (
                        <>
                        <div className="int-left">
                            <div className='hero-text'>
                                <h1>Dolet</h1>
                                <h3>Frontend Platform</h3>
                            </div>
                        </div>
                        <div className="int-right">
                        <div style={{backgroundImage: `url(${"/img/Handshelper.png"})`, backgroundSize: "cover"}} className='ss'></div>
                        </div>
                        </>
                    )
                }
                </div>
                <div className="desc-bottom"> 
                    <div className='short-text'><span className="text-hands-col">Role:</span> Frontend</div>
                    <div className='short-text'><span className="text-hands-col">Stack:</span> HTML, CSS, Javascript, React</div>
                    <div className='short-text'><span className="text-hands-col">Period:</span> March-2022 </div>
                </div>
            </div>
            <div className = "project-desc2">
                <div className = "hero-text">
                    <h1>The Dolet</h1>
                    <h3>A Frontend Platform</h3>
                </div>
                <div className = "desc">
                Its a frontend platform realising two types of functionalities, where the user can hire a helping hand for their daily works
                and also search for flexible part time work to earn their daily expenses. It has been developed in React using CSS for design.
                </div>
                <div className="website-button hover:text-teal-800">
                    <a href="https://dolet-app.netlify.app/" rel="noreferrer" target= "_blank">Visit Website</a>
                </div>
            </div>
        </>
    )
}