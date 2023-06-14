import React from "react";
import audio from "../assets/sounds/test.ogg";

const testsounds = () => {
    return (
        <div>
            <player>
                <source src={audio} />
            </player>
        </div>
    );
};

export default testsounds;
