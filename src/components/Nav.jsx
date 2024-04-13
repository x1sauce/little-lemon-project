import React from "react";
import Logo from "../assets/Logo.png";

const Nav = () => {
    return (
        <section className="nav--section">
            <nav className="navbar">
                <img src={Logo} alt="Little Lemon Logo" />
                <ul>
                    <li><a html="">Home</a></li>
                    <li><a html="">About</a></li>
                    <li><a html="">Menu</a></li>
                    <li><a html="">Reservations</a></li>
                    <li><a html="">Order Online</a></li>
                    <li><a html="">Login</a></li>
                </ul>
            </nav>
        </section>
    )
}

export default Nav;