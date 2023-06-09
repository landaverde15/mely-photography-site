import React from 'react';
import '../App.css';
import downArrow from '../Images/downArrow.webp';
import selfie from '../Images/mely.jpg';

function Landing() {
    return (
        <div className="Landing">
            <div className="flexColumn">
                <div className="flexItem">
                    <img className="landingCircleImg" src={selfie} alt="self picture"/>
                </div>
                <div className="flexItem">
                    <h1 className="nameTitle">Mely Hernandez &#x2661;</h1>
                </div>
                <div className="flexItem">
                    <h2 className="landingText2">Photographer / Canon T6 / Photoshop / Lightroom </h2>
                </div>
                <div className="flexItem">
                    <h3 className="landingText">See my life through my lens</h3>
                </div>
                <div className="flexItemArrowDiv">
                    <img className="arrow" src={downArrow} />
                </div>
            </div>
        </div>
    );
}

export default Landing;