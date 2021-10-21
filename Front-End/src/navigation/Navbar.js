import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import logoimg from "./../img/logo3.png";
import { AuthContext } from "../context/AuthContext";


const Navbar = () => {
    const auth = useContext(AuthContext);

    const logoutHandler = () => {
        auth.logout()
        auth.setCurrentUser(null);
    }

    return (
        <nav className="navbar">
            <Link to="/module" className="logo">
                <div className="logo">
                    <img className ="logoImg" src={logoimg} alt="logo"/>
                </div>
            </Link>
            <div>
            {auth.currentUser
                ? <div>
                <Link to="/admin" className="nav-links">
                    Admin
                </Link>
                <Link to="/" onClick={logoutHandler} className="nav-links">
                    Logout
                </Link>
            </div>
            : null}
            </div>


        </nav>
    )
};

export default Navbar;