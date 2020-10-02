import React from "react";
import './style.scss';
import { Link } from "react-router-dom";

const navStyle = {
    color: '#f1f1f1',
    textDecoration: 'none',
    padding: '.5rem 0',
    margin: '1rem 2rem'
}

const Navbar = () => (
    <nav>
        <h2>Logo</h2>

        <ul>
            <Link to="/" style={navStyle}>
                <li>Home</li>
            </Link>
            <Link to="/Heroes" style={navStyle}>
                <li>Heroes</li>
            </Link>
        </ul>
    </nav>
)

export default Navbar