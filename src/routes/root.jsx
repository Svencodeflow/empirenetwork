import { Outlet, Link } from "react-router-dom";
import "../css/root.css";

export default function Root() {
    return (
        <>
            <div id="sidebar">
                <h1>Empire Network</h1>
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
