import React from 'react';
import './StyleContent.css';
import './StyleBtn.css';
import Buttons from './Buttons';
import beard from "./images/beard.png";
import man from "./images/man.png";
import ninja from "./images/ninja.png";
import ButtonsLogic from './ButtonLogic';
import Input_output from './input-output';

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
                    <div className="content-input-text"><Input_output /></div>
                    {/* <div className="content-output-morse"></div> */}
                    <div className="content-alphabeth-buttons"><ButtonsLogic /></div>
                    <div className="footer-about-us">
                        <div className="img-container">
                            <div class="row examples">
                                <div class="col-3">
                                    <div class="snippet" data-title=".dot-elastic">
                                        <div class="stage">
                                            <div class="dot-elastic"></div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div class="col-3">
                                    <div class="snippet" data-title=".dot-stretching">
                                        <div class="stage">
                                            <div class="dot-floating"></div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>


                            {/* <img className="a" src={beard} />
                            <img className="a" src={ninja} />
                            <img className="a" src={man} /> */}
                        </div>
                    </div>

                </div>

            </div>
        </>

    )
}
export default Content;