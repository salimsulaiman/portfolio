import React from "react";
import Footer from "../components/Footer";

function Project() {
  return (
    <div className="bg-white rounded-xl p-8 h-fit relative shadow-sm">
      <div className="flex items-start sm:items-center flex-col sm:flex-row">
        <h1 className="text-xl sm:text-3xl lg:text-4xl text-slate-600 font-bold me-4">Project</h1>
        <div className="w-2/5 h-1 rounded-xl bg-blue-500 mt-4 sm:mt-0"></div>
      </div>
      <p className="text-sm lg:text-base text-slate-500 mt-4 text-justify sm:text-start">
        The projects I have worked on so far are related to frontend development, specifically in user interface (UI)
        and user experience (UX) design. In these projects, I frequently use technologies such as HTML, CSS, and
        JavaScript to create responsive and interactive web pages. Additionally, I have experience with various frontend
        frameworks and libraries like React, Bootstrap, Tailwind, and others.
      </p>
      <p className="text-sm lg:text-base text-slate-500 mt-4 text-justify sm:text-start">
        I also have experience in creating RESTful APIs using JavaScript and the Express.js framework.
      </p>
      <Footer />
    </div>
  );
}

export default Project;
