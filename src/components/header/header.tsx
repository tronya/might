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
                <Link to="/stepper" className="item">stepper</Link>
            </li>
        </ul>
    )
}
