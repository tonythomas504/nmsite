import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navbar_layout">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/howtoapply">How To Apply</Link></li>
                <li><Link to="/ourboard">Our Board</Link></li>
                <li><Link to="/contactus">Contact Us</Link></li>
            </ul>
        </div>
    )
}


export default Navbar
