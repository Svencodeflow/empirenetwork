import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/server.css";

export default function Server() {
    const mcStatus =
        "https://api.mcstatus.io/v2/widget/java/mc.empirenetwork.de?dark=true&rounded=true";

    return (
        <div>
            <div className="server_h">
                <h1>
                    <span>Empire</span>City
                </h1>
                <div className="server">
                    <img src={mcStatus} alt="Server Status" />
                </div>
            </div>
        </div>
    );
}
