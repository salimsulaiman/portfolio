import React, { useContext, useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { ThemeContext } from "../ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className={`rounded-full ${
        theme == "dark" ? "bg-slate-500" : "bg-slate-200"
      } p-1 right-4 top-4 hidden md:flex justify-center items-center border-2 border-slate-300 cursor-pointer group`}
      onClick={toggleTheme}
    >
      <div className={`rounded-full p-1 ${theme == "light" ? "bg-transparent" : "bg-slate-700"} me-1`}>
        <MdDarkMode className={`text-2xl ${theme == "light" ? "text-slate-700" : "text-slate-100"}`} />
      </div>
      <div className={`rounded-full p-1 ${theme == "dark" ? "bg-transparent" : "bg-white"} ms-1`}>
        <MdLightMode className={`text-2xl ${theme == "dark" ? "text-slate-100" : "text-yellow-500"}`} />
      </div>
    </div>
  );
}

export default Navbar;
