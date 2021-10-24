import React from 'react'



import "./Header.css"
import logo from "../../resources/header.png"




const Header = () => {
    return (
        <div className="header">
            <div className="head">
            <div className="header-text">
               <h1>Making Data Smarter</h1>
               <div className="sub-text">The Most Intelligent AY Powered Real-time Prospecting Engine.</div>
               <span style={{ margin: "0rem "}}id="get-started">Get Started With A Demo</span>

               <div className="box">
                   
                   <div className="inside-box">Real Time <br/> Leads</div>
                   <div className="inside-box">Criteria  <br/>Based  <br/>Searches</div>
                 
                   <div className="inside-box">Accurate and  <br/>Verified Data</div>
               </div>
            </div>
            <img className="header-img" src={logo} alt="header" />
        </div>
        <div className="tail">
            <h1>From Information to Intelligence</h1>
       
        </div>
        </div>
    )
}

export default Header
