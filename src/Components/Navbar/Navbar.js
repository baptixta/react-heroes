import React from "react";
import './style.scss';
import { Link } from "react-router-dom";

const Navbar = () => (
    <nav>
        <h2>Logo</h2>

        <ul>
            <Link to="/">
                <li>Home</li>
            </Link>
            <Link to="/Heroes">
                <li>Heroes</li>
            </Link>
        </ul>
    </nav>
)

export default Navbar