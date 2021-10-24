import React from 'react'
import logo from "../../resources/footer.png"
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="one">
                    <img src={logo} alt="logo"/>
                    <div className="footer-text">Leadzen.ai is the most intelligent <br/> lead generation tool as it<br/> integrates artificial intelligence <br/>and real-time updates into the <br/>prospecting process.</div>
                    {/* <div className="social-icons">
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-linkedin"></i>
                        <i class="fab fa-instagram"></i>
                    </div> */}
                    <span>support@leadzen.ai</span>
                </div>
                <div className="two">
                    <h2>leadzen.ai</h2>
                    <ul>
                        <li>Why us</li>
                        <li>Pricing</li>
                        <li>Contact us</li>
                        <li>Book a Demo</li>
                    </ul>
                </div>

                <div className="three">
                <h2>leadzen.ai For</h2>
                    <ul>
                        <li>Sales</li>
                        <li>Marketing</li>
                        <li>Talent Acquisition</li>
                        <li>So much more</li>
                    </ul>
                </div>
                <div className="four">
                    <h4>Blogs</h4>
                    <span>Pricing</span>
                </div>
            </div>
            <div className="footer-bottom">
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Don't Sell My Information</li>
                    <li>Opt Out</li>
                    <li>Our Data</li>
                    <li>Privacy Centre</li>
                    <li>Cookie Policy</li>
                    <li>Terms of Services</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
