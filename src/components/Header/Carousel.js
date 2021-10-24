import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import first from "../../resources/first.webm"
import second from "../../resources/second.webm"
import third from "../../resources/third.webm"
import fourth from "../../resources/fourth.webm"
import fifth from "../../resources/fifth.webm"



class DemoCarousel extends Component {
    render() {
        return (
            <Carousel showArrows={false} autoPlay={true} infiniteLoop={true} interval={5000}>
                    <div className="video">
                      <h2 className ="video-head">Enrich Your CRM Data
                        </h2>
                         <h4 className="video-text">No more cold calls and wrong numbers. Simply bulk upload your existing customer database and get their latest contact numbers, email IDs, designations and other important information. </h4>
                        <video src={first}type="video/mp4" autoPlay loop muted playsInline />
                        
                    </div>
                    <div className="video">
                    <h2 className ="video-head">Know Your Prospects Better
                        </h2>
                         <h4 className="video-text">Get access to their phone numbers, work email IDs, social media links, demographics and interests so your next conversation is smoother than ever.</h4>
                        <video src={second} type="video/mp4"  autoPlay loop muted playsInline/>
                        
                    </div>
                    <div className="video">
                    <h2 className ="video-head">Find Exactly What You Are Looking For
                        </h2>
                         <h4 className="video-text">From potential customers and talented recruits to a competitive marketing edge, our AI powered engine collects and sends you data for all your business needs. </h4>
                        <video src={third}type="video/mp4"  autoPlay loop muted playsInline/>
                        
                    </div>
                    <div className="video">
                    <h2 className ="video-head">Get Real-Time Leads
                        </h2>
                         <h4 className="video-text">Don’t go looking for your customers, find them when they’re looking for you. LeadZen.ai tracks the likes and comments on your posts and those of your competitors to give you information on potential customers.</h4>
                        <video src={fourth} type="video/mp4"  autoPlay loop muted playsInline/>
                        
                    </div>
                    <div className="video">
                    <h2 className ="video-head">Make Criteria Based Searches
                        </h2>
                         <h4 className="video-text">Narrow down your target audience to those that are the perfect fit. With LeadZen.ai, you can search for viable prospects through parameters such as designation, industry, education, company, income group, geography, age, gender and much more.</h4>
                        <video src={fifth} type="video/mp4"  autoPlay loop muted playsInline/>
                        
                    </div>
               
            </Carousel>
        );
    }
};

export default DemoCarousel