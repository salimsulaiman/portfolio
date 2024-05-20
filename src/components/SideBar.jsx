import React, { useState } from "react";
import { HiOutlineUser } from "react-icons/hi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineWeb, MdWorkOutline } from "react-icons/md";
import { RiContactsBook3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const [menu, setMenu] = useState(null);
  const navigate = useNavigate();
  const handleMenu = (text) => {
    setMenu(text);
    navigate(`/${text}`);
  };
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm w-fit h-fit ms-auto me-auto sm:me-0 sm:ms-auto">
      <div className="grid grid-cols-4 gap-4 w-fit">
        <div
          className={`aspect-square p-2 rounded-lg flex flex-col justify-center items-center cursor-pointer ${
            menu == "about" ? "bg-blue-500 text-white" : "bg-slate-100 hover:bg-slate-200"
          }`}
          onClick={() => handleMenu("about")}
        >
          <HiOutlineUser className="text-lg mb-1" />
          <h4 className={`text-sm ${menu == "about" ? "text-white" : "text-slate-500 "}`}>About</h4>
        </div>
        <div
          className={`aspect-square p-2 rounded-lg flex flex-col justify-center items-center cursor-pointer ${
            menu == "resume" ? "bg-blue-500 text-white" : "bg-slate-100 hover:bg-slate-200"
          }`}
          onClick={() => handleMenu("resume")}
        >
          <IoDocumentTextOutline className="text-lg mb-1" />
          <h4 className={`text-sm ${menu == "resume" ? "text-white" : "text-slate-500 "}`}>Resume</h4>
        </div>
        {/* <div
          className={`aspect-square p-2 rounded-lg flex flex-col justify-center items-center cursor-pointer ${
            menu == "work" ? "bg-blue-500 text-white" : "bg-slate-100 hover:bg-slate-200"
          }`}
          onClick={() => handleMenu("work")}
        >
          <MdWorkOutline className="text-lg mb-1" />
          <h4 className={`text-sm ${menu == "work" ? "text-white" : "text-slate-500 "}`}>Work</h4>
        </div> */}
        <div
          className={`aspect-square p-2 rounded-lg flex flex-col justify-center items-center cursor-pointer ${
            menu == "project" ? "bg-blue-500 text-white" : "bg-slate-100 hover:bg-slate-200"
          }`}
          onClick={() => handleMenu("project")}
        >
          <MdOutlineWeb className="text-lg mb-1" />
          <h4 className={`text-sm ${menu == "project" ? "text-white" : "text-slate-500 "}`}>Project</h4>
        </div>
        <div
          className={`aspect-square p-2 rounded-lg flex flex-col justify-center items-center cursor-pointer ${
            menu == "contact" ? "bg-blue-500 text-white" : "bg-slate-100 hover:bg-slate-200"
          }`}
          onClick={() => handleMenu("contact")}
        >
          <RiContactsBook3Line className="text-lg mb-1" />
          <h4 className={`text-sm ${menu == "contact" ? "text-white" : "text-slate-500 "}`}>Contact</h4>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
