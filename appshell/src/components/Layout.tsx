import React from "react"
import Header from "./Layout/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {

    return (
        <div className="relative h-dvh">
            <Header />
            <Outlet />
        </div>
    );
}

export default Layout;
