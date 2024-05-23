import React, { useContext, useEffect, useState } from "react";
import Profile from "../assets/profile.png";
import { FaDownload, FaFacebookF, FaGift, FaGithub, FaInstagram, FaLinkedinIn, FaLocationDot } from "react-icons/fa6";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdDarkMode, MdEmail, MdLightMode } from "react-icons/md";
import CV from "../assets/CV_Salim_Bin_Sulaiman_Bahres.pdf";
import { ThemeContext } from "../ThemeContext";

function Bio() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.setAttribute("download", "CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLink = (link) => {
    switch (link) {
      case "facebook":
        window.open("https://www.facebook.com/LeamXI", "_blank");
        break;
      case "instagram":
        return window.open("https://www.instagram.com/leamxxs/", "_blank");
        break;
      case "linkedin":
        return window.open("https://www.linkedin.com/in/salim-sulaiman/", "_blank");
        break;
      case "github":
        return window.open("https://github.com/salimsulaiman", "_blank");
        break;
      default:
        break;
    }
  };

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="bg-white rounded-xl px-6 pt-8 pb-6 relative h-fit shadow-sm dark:bg-slate-800">
      <div
        className="rounded-full bg-slate-200 dark:bg-slate-500 p-1 absolute right-4 top-4 border-2 border-slate-400 flex md:hidden items-center justify-center cursor-pointer"
        onClick={toggleTheme}
      >
        <div className="bg-white dark:bg-slate-700 rounded-full p-2 flex justify-center items-center">
          {theme === "dark" ? <MdDarkMode className="text-white" /> : <MdLightMode className="text-yellow-500" />}
        </div>
      </div>
      <div
        className={`w-32 h-32 bg-slate-200 rounded-lg absolute left-1/2 -translate-x-1/2 -top-10 z-10 overflow-hidden ${
          imageLoaded ? "" : "skeleton"
        }`}
      >
        {!imageLoaded && (
          <div className="w-full h-full"></div> // Placeholder for the skeleton
        )}
        <img
          src={Profile}
          alt=""
          className={`object-cover w-full h-full ${imageLoaded ? "" : "hidden"}`}
          onLoad={handleImageLoad}
        />
      </div>
      <h2 className="text-xl md:text-base lg:text-lg text-slate-600 font-bold text-center mt-20 dark:text-white">
        Salim Sulaiman
      </h2>
      <div className="text-center mt-4">
        <h4 className="bg-slate-100 text-lg md:text-xs lg:text-sm p-2 text-center text-slate-500 font-medium rounded-lg inline-block dark:bg-slate-700 dark:text-white">
          Frontend Web Developer
        </h4>
        <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-6 gap-2 mt-4 text-slate-500">
          <div
            className="aspect-square bg-slate-100 rounded-md dark:bg-slate-600 p-1 flex items-center justify-center group hover:bg-blue-500 dark:hover:bg-blue-500 cursor-pointer col-start-2 sm:col-start-3 md:col-start-2"
            onClick={() => handleLink("facebook")}
          >
            <FaFacebookF className="text-xl text-blue-500 group-hover:text-white" />
          </div>
          <div
            className="aspect-square bg-slate-100 rounded-md dark:bg-slate-600 p-1 flex items-center justify-center group hover:bg-blue-500 dark:hover:bg-blue-500 cursor-pointer"
            onClick={() => handleLink("instagram")}
          >
            <FaInstagram className="text-2xl text-rose-400 group-hover:text-white" />
          </div>
          <div
            className="aspect-square bg-slate-100 rounded-md dark:bg-slate-600 p-1 flex items-center justify-center group hover:bg-blue-500 dark:hover:bg-blue-500 cursor-pointer"
            onClick={() => handleLink("linkedin")}
          >
            <FaLinkedinIn className="text-2xl text-slate-700 dark:text-white group-hover:text-white" />
          </div>
          <div
            className="aspect-square bg-slate-100 rounded-md dark:bg-slate-600 p-1 flex items-center justify-center group hover:bg-blue-500 dark:hover:bg-blue-500 cursor-pointer"
            onClick={() => handleLink("github")}
          >
            <FaGithub className="text-2xl text-slate-700 dark:text-white group-hover:text-white" />
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-lg mt-4 p-4">
        <div className="w-full grid grid-cols-12 gap-2">
          <div className="aspect-square bg-white dark:bg-slate-600 rounded-lg col-span-2 flex justify-center items-center">
            <IoMdPhonePortrait className="text-xl text-rose-400" />
          </div>
          <div className="col-span-10 flex flex-col justify-center">
            <h5 className="text-[10px] text-slate-400 font-medium dark:text-white">Phone</h5>
            <h4 className="text-sm md:text-xs lg:text-sm text-slate-500 font-medium dark:text-white">
              +62 877 7642 1079
            </h4>
          </div>
        </div>
        <div className="w-full grid grid-cols-12 gap-2 mt-4">
          <div className="aspect-square bg-white dark:bg-slate-600 rounded-lg col-span-2 flex justify-center items-center">
            <MdEmail className="text-xl text-emerald-400" />
          </div>
          <div className="col-span-10 flex flex-col justify-center">
            <h5 className="text-[10px] text-slate-400 font-medium dark:text-white">Email</h5>
            <h4 className="text-sm md:text-xs lg:text-sm text-slate-500 font-medium dark:text-white line-clamp-1">
              salimsulaiman75@gmail.com
            </h4>
          </div>
        </div>
        <div className="w-full grid grid-cols-12 gap-2 mt-4">
          <div className="aspect-square bg-white dark:bg-slate-600 rounded-lg col-span-2 flex justify-center items-center">
            <FaLocationDot className="text-xl text-rose-600" />
          </div>
          <div className="col-span-10 flex flex-col justify-center">
            <h5 className="text-[10px] text-slate-400 font-medium dark:text-white">Location</h5>
            <h4 className="text-sm md:text-xs lg:text-sm text-slate-500 font-medium dark:text-white">
              Semarang, Indonesia
            </h4>
          </div>
        </div>
        <div className="w-full grid grid-cols-12 gap-2 mt-4">
          <div className="aspect-square bg-white dark:bg-slate-600 rounded-lg col-span-2 flex justify-center items-center">
            <FaGift className="text-xl text-blue-500" />
          </div>
          <div className="col-span-10 flex flex-col justify-center">
            <h5 className="text-[10px] text-slate-400 font-medium dark:text-white">Birthday</h5>
            <h4 className="text-sm md:text-xs lg:text-sm text-slate-500 font-medium dark:text-white">April 16, 2002</h4>
          </div>
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white text-sm mt-4 flex items-center mx-auto"
        onClick={handleDownloadCV}
      >
        <span className="me-2">
          <FaDownload />
        </span>
        Download Cv
      </button>
    </div>
  );
}

export default Bio;
