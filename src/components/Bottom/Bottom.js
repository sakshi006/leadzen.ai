import React from 'react'
import "./Bottom.css"

const Bottom = () => {
    return (
        <div className="bottom">
            <div className="half leftB">
                <h1>Our Clients Speak</h1>
                <h4>Here’s what some of our clients have to say about<br/> Leadzen.ai</h4>
            </div>
            <div className="half rightB">
                <div className="inside">
                    <div className="inside-head">
                        <div className="inside-head-left">
                        <img src="https://leadzen.ai/wp-content/uploads/2021/09/thejas.png" alt="person"/>
                        </div>

                        <div className="inside-head-right">
                        
                        <h4>Tejas Jagannath</h4>
                        <span>VP Transactions- Unlistedkart</span>
                        </div>
                    </div>
                    <div className="inside-text">
                        <div className="review">
                        The quality and the comprehensiveness of the information provided by LeadZen.ai is very good. We also use their services to improve our conversion rate. Not only did we get verified information but also it allowed us to get a comprehensive understanding of our leads and what would work for us. A must try product.

                        </div>
                    </div>
                </div>
                    <div className="inside-blank"></div>
            </div>
        </div>
    )
}

export default Bottom
