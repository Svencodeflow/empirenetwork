import React from "react";
import "../css/gta.css";

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
                            </li>
                        </ul>
                    </nav>
                </header>
                <div className="background_dings" />
            </div>
        </div>
    );
}
