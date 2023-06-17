import React, { useState, useEffect } from "react";

export default function Server() {
    const mcStatus =
        "https://api.mcstatus.io/v2/widget/java/mc.empirenetwork.de?dark=true&rounded=true";

    return (
        <div>
            <h1>EmpireCity</h1>
            <div className="server">
                <img src={mcStatus} alt="Server Status" />
            </div>
        </div>
    );
}
