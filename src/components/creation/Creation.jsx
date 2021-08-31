import React from 'react';
import './creation.scss';


export default function Creation() {
    return (
        <>
        <div className="creation-container">
            <div className="creation-head">
                <h1 className="our-creations">OUR CREATIONS</h1>
                <button className="see-all">SEE ALL</button>
            </div>
            <div className="creation-grids">
            <div className="creation-box" style={{backgroundImage: "url(/assets/images/desktop/image-deep-earth.jpg)"}}>
                <h1 className="creation-text">DEEP EARTH</h1>    
            </div> 
            <div className="creation-box" style={{backgroundImage: "url(/assets/images/desktop/image-night-arcade.jpg)"}}>
                <h1 className="creation-text">NIGHT ARCADE</h1>    
            </div>
            <div className="creation-box" style={{backgroundImage: "url(/assets/images/desktop/image-soccer-team.jpg)"}}>
                <h1 className="creation-text">SOCCER TEAM VR</h1>    
            </div>
            <div className="creation-box" style={{backgroundImage: "url(/assets/images/desktop/image-grid.jpg)"}}>
                <h1 className="creation-text">THE GRID</h1>    
            </div>
            <div className="creation-box" style={{backgroundImage: "url(/assets/images/desktop/image-from-above.jpg)"}}>
                <h1 className="creation-text">FROM UP ABOVE VR</h1>    
            </div>
            <div className="creation-box" style={{backgroundImage: "url(/assets/images/desktop/image-pocket-borealis.jpg)"}}>
                <h1 className="creation-text">POCKET BOREALIS</h1>    
            </div>
            <div className="creation-box" style={{backgroundImage: "url(/assets/images/desktop/image-curiosity.jpg)"}}>
                <h1 className="creation-text">THE CURIOSITY</h1>    
            </div>
            <div className="creation-box" style={{backgroundImage: "url(/assets/images/desktop/image-fisheye.jpg)"}}>
                <h1 className="creation-text">MAKE IT FISHEYE</h1>    
            </div>
            </div>
        </div>
        </>
    )
}
