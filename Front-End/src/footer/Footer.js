import React from "react";

import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-logo-wrapper">
                <span className="footer-logo">LOGO</span>
                <span>an intelligent system to manage crowd levels</span>
            </div>
            <div>
                Developed by Team Anything, maintained by students. {'\n'}
                &copy;{new Date().getFullYear()}-Present, CanSeat. {'\n'}
                All rights reserved. CanSeat version 1.0
            </div>
        </div>
    )
};

export default Footer;