import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Bio from "./Bio";
import SideBar from "./SideBar";
import Background from "../assets/background.png";

function Layout() {
  return (
    <div
      className="w-full min-h-screen bg-slate-100 pt-4 pb-12 font-poppins"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: `cover`,
        backgroundPosition: `fixed`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* <Navbar /> */}
      <div
        className="max-w-[1124px] mx-auto grid grid-cols-6 gap-4 pt-20 px-4 sm:px-8"
        style={{ gridTemplateRows: "auto" }}
      >
        <div className="col-span-6 md:col-span-2">
          <Bio />
        </div>
        <div className="grid grid-cols-1 col-span-6 md:col-span-4 gap-4 h-fit">
          <SideBar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
