import {Link} from "react-router-dom";
import React from "react";
import './header.scss';

export function Header() {
    return (
        <ul className="header">
            <li>
                <Link to="/" className="item">Home</Link>
            </li>
            <li>
                <Link to="/about" className="item">About</Link>
            </li>
            <li>
                <Link to="/dashboard" className="item">Dashboard</Link>
            </li>
        </ul>
    )
}
