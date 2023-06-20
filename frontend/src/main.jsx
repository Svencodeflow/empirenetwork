import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import "./index.css";
import ErrorPage from "./routes/error";
import Contact from "./routes/team";
import Gta from "./routes/gta/gta";
import Gtalogin from "./routes/gta/gtalogin";
import Server from "./routes/server";
import Mineccraft from "./routes/minecraft";
import About from "./routes/about";
import Serverwahl from "./routes/serverwahl";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/dasteam",
                element: <Contact />,
            },
            {
                path: "/überuns",
                element: <About />,
            },
            {
                path: "/server",
                element: <Server />,
            },
            {
                path: "/serverwahl",
                element: <Serverwahl />,
            },
        ],
    },
    {
        path: "/minecraft",
        element: <Mineccraft />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/gtalogin",
        element: <Gtalogin />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/gta",
        element: <Gta />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/gtalogin",
                element: <Gtalogin />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
