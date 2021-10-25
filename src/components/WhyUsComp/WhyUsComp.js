import React from 'react'
import image1 from "../../resources/whyUs.png"
import image2 from "../../resources/whyUs2.png"

import "./whyUsComp.css"

const whyUsComp = () => {
    return (
       <div>
            <div className="why-us-comp">
            <div className="why-us-left">
                <h1>Why Us</h1>
                    <div className="why-us-text">
                    LeadZen.ai is the most intelligent prospecting tool in today’s <br/>digital world. Our AI powered real-time engine doesn’t just track,<br/> collate and disseminate data to you, it also helps you leverage <br/>that data in the most efficient way possible.<br/><br/>

                    It's lead generation and lead acquisition, through leading AI technology.
                    </div>
                <span>Get Started With A Demo</span>
            </div>
                    <div className="why-us-right">
                        <img src={image1} alt="whyUs"/>
                    </div>
            </div>

            <div className="one-stop">
                <h1>Your One-Stop Prospecting Shop</h1>
                <img src={image2} alt="whyUs"/>
                
                <div className="one-stop-text">
                LeadZen.ai is <span>more than just a data collection tool.</span> It is your all-in-one prospecting solution. From lead generation to conversion, our smart data model gives you access to all the information you’ll ever need to help your business take the lead.
                </div>
            </div>
       </div>
    )
}

export default whyUsComp;
