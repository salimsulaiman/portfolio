import React, { useContext } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Bio from "./Bio";
import SideBar from "./SideBar";
import Background from "../assets/background.png";
import BackgroundDark from "../assets/backgroundDark.png";
import { ThemeContext } from "../ThemeContext";

function Layout() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="w-full min-h-screen bg-slate-100 dark:bg-slate-900 pt-4 pb-12 font-poppins bg-cover bg-fixed"
      style={{ backgroundImage: `url(${theme == "dark" ? BackgroundDark : Background})` }}
    >
      <div className="max-w-[1124px] mx-auto pt-4 px-4 sm:px-8 flex justify-end">
        <Navbar />
      </div>
      <div
        className="max-w-[1124px] mx-auto grid grid-cols-6 gap-4 pt-16 md:pt-20 px-4 sm:px-8"
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
