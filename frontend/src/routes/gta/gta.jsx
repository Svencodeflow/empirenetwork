import React from "react";
import "../../css/gta.css";
import { Link } from "react-router-dom";

export default function gta() {
    return (
        <div>
            <div id="bg"></div>
            <div id="bg-top">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                                <Link to="/gtalogin">Login</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <div className="background_dings" />
            </div>
        </div>
    );
}
