import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import logoimg from "./../img/logo3.png";
import { AuthContext } from "../context/AuthContext";


const Navbar = () => {
    const auth = useContext(AuthContext);
    console.log(auth)
    return (
        <nav className="navbar">
            <Link to="/module" className="logo">
                <div className="logo">
                    <img className ="logoImg" src={logoimg} alt="logo"/>
                </div>
            </Link>
            {auth.currentUser
                ? <Link to="/admin" className="logo">
                Admin
            </Link>
            : null}

        </nav>
    )
};

export default Navbar;