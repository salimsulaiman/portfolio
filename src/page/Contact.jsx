import React from "react";
import { BsDatabase } from "react-icons/bs";
import { CiMobile4 } from "react-icons/ci";
import { FaCode, FaTelegramPlane } from "react-icons/fa";
import { PiFigmaLogoBold } from "react-icons/pi";
import Footer from "../components/Footer";

function Contact() {
  const handleSend = (e) => {
    e.preventDefault();
    alert("Terimakasih, kami akan segera membalas pesan anda");
  };
  return (
    <div className="bg-white rounded-xl p-8 h-fit relative shadow-sm dark:bg-slate-800">
      <div className="flex items-start sm:items-center flex-col sm:flex-row">
        <h1 className="text-xl sm:text-3xl lg:text-4xl text-slate-600 font-bold me-4 dark:text-white">Contact</h1>
        <div className="w-2/5 h-1 rounded-xl bg-blue-500 mt-4 sm:mt-0"></div>
      </div>
      <div className="bg-slate-100 rounded-lg p-8 mt-4 dark:bg-slate-700">
        <h1 className="text-sm sm:text-base text-slate-600 dark:text-white">
          For further discussion abaout <b>Skills</b> or <b>Project</b>, contact me via the form or email.
        </h1>
        <form action="" className="mt-4 w-full" onSubmit={handleSend}>
          <label htmlFor="name" className="text-xs font-bold text-slate-500 ms-2 dark:text-white">
            Name *
          </label>
          <input
            id="name"
            type="text"
            className="p-2 w-full border-t-0 border-r-0 border-l-0 outline-none border-b-2 bg-transparent text-slate-500 border-slate-300 text-sm mb-4 dark:text-white"
          />
          <label htmlFor="name" className="text-xs font-bold text-slate-500 ms-2 dark:text-white">
            Email *
          </label>
          <input
            id="email"
            type="email"
            className="p-2 w-full border-t-0 border-r-0 border-l-0 outline-none border-b-2 bg-transparent text-slate-500 border-slate-300 text-sm mb-4 dark:text-white"
          />
          <label htmlFor="name" className="text-xs font-bold text-slate-500 ms-2 dark:text-white">
            Message *
          </label>
          <textarea
            rows={3}
            id="message"
            type="text"
            className="p-2 w-full border-t-0 border-r-0 border-l-0 outline-none border-b-2 bg-transparent text-slate-500 border-slate-300 text-sm mb-4 dark:text-white"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white text-sm mt-4 flex items-center"
          >
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
