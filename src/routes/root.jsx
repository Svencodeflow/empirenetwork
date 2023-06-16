import { Outlet, Link } from "react-router-dom";
import "../css/root.css";
import Typed from "typed.js";
import React from "react";

// Images
import Logo from "../images/EN_logo.png";

export default function Root() {
    // Typed.js
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                "<strong><i>Empire<i> Network!</strong>",
                "<i>Enter</i> a new level",
                "of gaming with",
                "<strong>Our community!</strong>",
            ],
            typeSpeed: 100,
            backSpeed: 50,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <>
            <div id="sidebar">
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
                {/* <h1>Enter a new level of gaming with our community!</h1> */}
                <div className="App">
                    <h1>
                        <span ref={el} />
                    </h1>
                </div>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to={`contacts/1`}>Das Team</Link>
                            </li>
                            <li>
                                <Link to={`/contacts/2`}>Über uns</Link>
                            </li>
                            <li>
                                <Link to={`/server`}>Server</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}
