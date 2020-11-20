import React from 'react';
import './StyleContent.css';
import Buttons from './Buttons';
import beard from "./images/beard.png";
import man from "./images/man.png";
import ninja from "./images/ninja.png";

function Content() {
    return (
        <>
            <div className="content">
                <div id="upper_left">n</div>
                <div id="upper_right">n</div>
                <div id="lower_left">n</div>
                <div id="lower_right">n</div>

                <div className="content-container">
                    <div className="content-input-top-icon">w</div>
                    <div className="content-input-text"></div>
                    <div className="content-output-morse"></div>
                    <div className="content-alphabeth-buttons"><Buttons /></div>
                    <div className="footer-about-us">
                        <div className="img-container">
                                <img className="a" src={beard} />
                                <img className="a"src={ninja} />
                                <img className="a"src={man} />
                        </div>
                    </div>

                </div>

            </div>
        </>

    )
}
export default Content;