import React from 'react'
import "./Middle3.css"

import MostIntell from "../../resources/Most-Intelligent-Tool.png"
import Multi from "../../resources/multi.png"
import DemoCarousel from './Carousel'

const Middle3 = () => {
    return (
        <div className="middle3">
            <div className="top">
            <h2>LeadZen.ai Recommends</h2>
            <h4>Based on searches you have made in the past, our smart data model learns exactly what you’re looking for and recommends only the most relevant leads to help your business prosper.</h4>
            <img className="mid-img" src = {MostIntell} alt="people-img"/>
            </div>

            <div className="mid">
            <h2>Chrome Extension</h2>
            <h4>While you're on a potential customer's website, get their data in one click</h4>
            <span>Coming Soon . . .</span>
            </div>

            <br/>
            <div className="bot">
            <h2>Turn Browsing into Lead Generation</h2>
            <h4>We’re constantly working, even when you aren’t. Our AI based engine continuously scours through 100s of data sources to generate quality leads, all while you browse at your leisure</h4>
            <img  className="mid-img" src = {Multi} alt="people-img"/>
            </div>
           <div className="trusted">
            <h2>Trusted By</h2>
            <DemoCarousel/>
            <span className="trusted-right">... and many more</span>
           </div>
        </div>
    )
}

export default Middle3;
