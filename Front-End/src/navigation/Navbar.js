import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import logoimg from "./../img/logo3.png";


const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/module" className="logo">
                <div className="logo">
                    <img className ="logoImg" src={logoimg} alt="logo"/>
                </div>
            </Link>
        </nav>
    )
};

export default Navbar;