import React from "react";
import { BsDatabase } from "react-icons/bs";
import { CiMobile4 } from "react-icons/ci";
import { FaCode, FaTelegramPlane } from "react-icons/fa";
import { PiFigmaLogoBold } from "react-icons/pi";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="bg-white rounded-xl p-8 col-span-4 h-fit relative shadow-sm">
      <div className="flex items-center">
        <h1 className="text-4xl text-slate-600 font-medium me-4">Contact</h1>
        <div className="w-2/5 h-1 rounded-xl bg-blue-500"></div>
      </div>
      <div className="bg-slate-100 rounded-lg p-8 mt-4">
        <h1 className="text-lg text-slate-600">
          For further discussion abaout <b>Skills</b> or <b>Project</b>, contact me via the form or email.
        </h1>
        <form action="" className="mt-4 w-full">
          <label htmlFor="name" className="text-xs font-bold text-slate-500 ms-2">
            Name *
          </label>
          <input
            id="name"
            type="text"
            className="p-2 w-full border-t-0 border-r-0 border-l-0 outline-none border-b-2 bg-transparent text-slate-500 border-slate-300 text-sm mb-4"
          />
          <label htmlFor="name" className="text-xs font-bold text-slate-500 ms-2">
            Email *
          </label>
          <input
            id="email"
            type="email"
            className="p-2 w-full border-t-0 border-r-0 border-l-0 outline-none border-b-2 bg-transparent text-slate-500 border-slate-300 text-sm mb-4"
          />
          <label htmlFor="name" className="text-xs font-bold text-slate-500 ms-2">
            Message *
          </label>
          <textarea
            rows={3}
            id="message"
            type="text"
            className="p-2 w-full border-t-0 border-r-0 border-l-0 outline-none border-b-2 bg-transparent text-slate-500 border-slate-300 text-sm mb-4"
          />
          <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white text-sm mt-4 flex items-center">
            <span className="me-2">
              <FaTelegramPlane />
            </span>
            Send
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;