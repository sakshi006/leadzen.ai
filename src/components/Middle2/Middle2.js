import React from 'react'
import "./Middle2.css"
import vid from "../../resources/we-get-what-you-mean-NLP.webm"
import one from "../../resources/Middle2Image1.png"
import two from "../../resources/Middle2Image2.png"
import three from "../../resources/Middle2Image3.png"
import four from "../../resources/Middle2Image4.png"



const Middle2 = () => {
    return (
        <div>
        <div className="middle2">
            <h2>We Get What You Mean</h2>
            <h4>Our NLP (Natural Language Processing) based AI engine understands queries, statements and keywords to provide you with the specific datasets you are looking for.</h4>
            </div>
            <div className="flex-three">
                <div className="left">
                    <div>
                        <img src={one} alt="one"/>
                    </div>
                    <div id="bottom-left">
                        <img src={three} alt="three"/>
                    </div>
                </div>
                
                <video src={vid}type="video/mp4" autoPlay loop muted playsInline />

                <div className="right">
                   <div>
                        <img src={two} alt="two"/>
                    </div> 
                    <div id="bottom-right">
                        <img src={four} alt="four"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Middle2
