import React from "react";
import { Link } from "react-router-dom";

import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/module" className="logo">
                <div className="logo">
                    LOGO
                </div>
            </Link>
        </nav>
    )
};

export default Navbar;