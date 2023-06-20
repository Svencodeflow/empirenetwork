import React from "react";
import { Link } from "react-router-dom";

export default function serverwahl() {
    return (
        <div>
            <div id="detail">
                <div className="gta">
                    <h1>
                        Rage<Link to={`gta`}>MP</Link>
                    </h1>
                </div>
                <div className="minecraft">
                    <h1>
                        Mine<Link to={`minecraft`}>Craft</Link>
                    </h1>
                </div>
            </div>
        </div>
    );
}
