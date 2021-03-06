import React from "react";
import './Footer.css';
import logoimg from "./../img/logo3.png";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-logo-wrapper">
                <span className="footer-logo">
                    <img className="logoImg" src={logoimg} alt="logo"/>
                </span>
            </div>
            <div>
                An intelligent system to manage crowd levels. {'\n\n'}  
                Developed by Team Anything, maintained by students. {'\n'}
                &copy;{new Date().getFullYear()}-Present, CanSeat. {'\n'}
                All rights reserved. CanSeat version 1.0
            </div>
        </div>
    )
};

export default Footer;