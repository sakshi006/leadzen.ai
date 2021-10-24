import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Middle1.css"

import Sales from "../../resources/Sales.svg"
import Marketing from "../../resources/Marketing.svg"
import Recruiting from "../../resources/Recruiting.svg"
import More from "../../resources/More.svg"




class DemoCarousel extends Component {
    render() {
        return (
            <Carousel className="main" transitionTime={500} showArrows={false} autoPlay={false} showThumbs={false} >
                <div>
                <h2>Leadzen.ai Can Help you</h2>
                <h4>Break your sales record</h4>
            <span>Instantly find your next loyal customer and boost your company’s sales by getting top leads across various sectors. </span>
                    <img id="mid-img"  src={Sales} alt="" />
                    
                </div>


                <div>
                <h2>Leadzen.ai Can Help you</h2>
                <h4>Build your brand</h4>
            <span>Use hyper targeted marketing and leverage your competition’s content to gain access to new target audiences.</span>
                    <img className="mid-image" src={Marketing} alt=""/>
                    
                </div>


                <div>
                <h2>Leadzen.ai Can Help you</h2>
                <h4>Bring in the best talent</h4>
            <span>Directly target industry professionals and hire only the most suitable talent for your team. </span>
                    <img className="mid-image" src={Recruiting} alt = "more"/>
                    
                </div>


                <div>
                <h2>Leadzen.ai Can Help you</h2>
                <h4>Do much more</h4>
            <span>From skip tracing and identity resolution to due diligence, Lead-gen offers accurate, real-time data to meet all of your business needs. </span>
                    <img className="mid-image" src={More} alt="" />
                    
                </div>

            </Carousel>
        );
    }
};



export default DemoCarousel;