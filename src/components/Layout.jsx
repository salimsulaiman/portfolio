import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Bio from "./Bio";
import SideBar from "./SideBar";
import Background from "../assets/background.png";

function Layout() {
  return (
    <div
      className="w-full min-h-screen bg-slate-100 pt-4 pb-12"
      style={{ backgroundImage: `url(${Background})`, backgroundSize: `cover` }}
    >
      {/* <Navbar /> */}
      <div className="max-w-screen-lg mx-auto grid grid-cols-7 gap-5 pt-20" style={{ gridTemplateRows: "auto" }}>
        <Bio />
        <Outlet />
        <SideBar />
      </div>
    </div>
  );
}

export default Layout;
