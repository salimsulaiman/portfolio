import React from "react";
import { BsDatabase } from "react-icons/bs";
import { CiMobile4 } from "react-icons/ci";
import { FaCode, FaTelegramPlane } from "react-icons/fa";
import { PiFigmaLogoBold } from "react-icons/pi";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from "axios";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSend = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("https://664caa3cede9a2b556511d08.mockapi.io/message", {
        name: name,
        email: email,
        message: message,
      })
      .then(function (response) {
        setName("");
        setEmail("");
        setMessage("");
        alert("Terimakasih, pesan anda saya terima");
        setIsLoading(false);
      })
      .catch(function (error) {
        alert("Error", error);
      });
  };
  return (
    <div className="bg-white rounded-xl p-8 h-fit relative shadow-sm dark:bg-slate-800">
      <div className="flex items-start sm:items-center flex-col sm:flex-row">
        <h1 className="text-xl sm:text-3xl lg:text-4xl text-slate-600 font-bold me-4 dark:text-white">Contact</h1>
        <div className="w-2/5 h-1 rounded-xl bg-blue-500 mt-4 sm:mt-0"></div>
      </div>
      <div className="bg-slate-100 rounded-lg p-4 sm:p-8 mt-4 dark:bg-slate-700">
        <h1 className="text-sm sm:text-base text-slate-600 dark:text-white">
          For further discussion abaout <b>Skills</b> or <b>Project</b>, contact me via the form or email.
        </h1>
        <form action="" className="mt-4 w-full" onSubmit={handleSend}>
          <label htmlFor="name" className="text-xs font-bold text-slate-500 ms-2 dark:text-white">
            Name *
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
            id="name"
            type="text"
            className="p-2 w-full border-t-0 border-r-0 border-l-0 outline-none border-b-2 bg-transparent text-slate-500 border-slate-300 text-sm mb-4 dark:text-white"
          />
          <label htmlFor="name" className="text-xs font-bold text-slate-500 ms-2 dark:text-white">
            Email *
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            id="email"
            type="email"
            className="p-2 w-full border-t-0 border-r-0 border-l-0 outline-none border-b-2 bg-transparent text-slate-500 border-slate-300 text-sm mb-4 dark:text-white"
          />
          <label htmlFor="name" className="text-xs font-bold text-slate-500 ms-2 dark:text-white">
            Message *
          </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
            rows={3}
            id="message"
            type="text"
            className="p-2 w-full border-t-0 border-r-0 border-l-0 outline-none border-b-2 bg-transparent text-slate-500 border-slate-300 text-sm mb-4 dark:text-white"
          />
          <button
            disabled={isLoading ? true : false}
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white text-sm mt-4 flex items-center disabled:bg-blue-400"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <span className="loading loading-spinner loading-xs me-2"></span>
                Sending...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <span className="me-2">
                  <FaTelegramPlane />
                </span>
                Send
              </div>
            )}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
