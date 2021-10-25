import React from 'react'
import "./navbar.css"
import logo from "../../resources/logo.png"



const Navbar = () => {
    return (
        <div className="nav">
            <img src={logo} alt="logo" />
            <ul>
                <li className="list-item">Why us?</li>
                <li className="list-item">Use Cases</li>
                <li className="list-item">Pricing</li>
                <li id="get-started">Get Started</li>
            </ul>
        </div>
    )
}

export default Navbar;
