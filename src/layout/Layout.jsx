import React, { useState } from "react";
import { Outlet } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';
import Footer from "./footer/Footer";

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <Navbar toggleSidebar={toggleSidebar} />
            <div className="flex">
                <Sidebar isOpen={isSidebarOpen} />
                <main>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Layout;