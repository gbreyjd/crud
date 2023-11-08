import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/index";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
