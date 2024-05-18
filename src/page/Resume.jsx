import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import Footer from "../components/Footer";
import { MdWork } from "react-icons/md";

function Resume() {
  return (
    <div className="bg-white rounded-xl col-span-4 h-fit relative shadow-sm">
      <div className="p-8">
        <div className="flex items-center">
          <h1 className="text-4xl text-slate-600 font-medium me-4">Resume</h1>
          <div className="w-2/5 h-1 rounded-xl bg-blue-500"></div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 text-slate-600 h-fit">
          {/* education */}
          <div className="grid grid-cols-1 gap-4 h-fit">
            <div className="flex items-center">
              <FaGraduationCap className="me-2 text-2xl text-blue-500" />
              <h4 className="text-lg text-slate-700 font-medium">Education</h4>
            </div>
            <div className="bg-rose-50 rounded-md p-4 cursor-default">
              <div className="flex flex-col items-start justify-center group">
                <h4 className="text-xs text-slate-500 font-medium line-clamp-1">2020 - Now</h4>
                <h3 className="text-slate-600 font-medium text-base line-clamp-1 mt-1 group-hover:line-clamp-none">
                  Informatics Engineering - <span className="font-normal">Universitas Dian Nuswantoro</span>
                </h3>
                <h4 className="text-sm text-slate-400 font-medium mt-1 line-clamp-1 group-hover:line-clamp-none">
                  Semarang, Indonesia
                </h4>
              </div>
            </div>
            <div className="bg-blue-50 rounded-md p-4 cursor-default">
              <div className="flex flex-col items-start justify-center group">
                <h4 className="text-xs text-slate-500 font-medium line-clamp-1">2023</h4>
                <h3 className="text-slate-600 font-medium text-base line-clamp-1 mt-1 group-hover:line-clamp-none">
                  Backend Web Development - <span className="font-normal">Skilvul</span>
                </h3>
                <h4 className="text-sm text-slate-400 font-medium mt-1 line-clamp-1">South Jakarta, Indonesia</h4>
              </div>
            </div>
            <div className="bg-rose-50 rounded-md p-4 cursor-default">
              <div className="flex flex-col items-start justify-center group">
                <h4 className="text-xs text-slate-500 font-medium line-clamp-1">2022</h4>
                <h3 className="text-slate-600 font-medium text-base line-clamp-1 mt-1 group-hover:line-clamp-none">
                  Frontend Web Development - <span className="font-normal">Skilvul</span>
                </h3>
                <h4 className="text-sm text-slate-400 font-medium mt-1 line-clamp-1">South Jakarta, Indonesia</h4>
              </div>
            </div>
          </div>
          {/* experience */}
          <div className="grid grid-cols-1 gap-4 h-fit">
            <div className="flex items-center">
              <MdWork className="me-2 text-2xl text-blue-500" />
              <h4 className="text-lg text-slate-700 font-medium">Experience</h4>
            </div>
            <div className="bg-blue-50 rounded-md p-4 cursor-default">
              <div className="flex flex-col items-start justify-center group">
                <h4 className="text-xs text-slate-500 font-medium line-clamp-1">2023-2024</h4>
                <h3 className="text-slate-600 font-medium text-base line-clamp-1 mt-1 group-hover:line-clamp-none">
                  Frontend Web Development - <span className="font-normal">Durian Lab x Skilvul</span>
                </h3>
                <h4 className="text-sm text-slate-400 font-medium mt-1 line-clamp-1">South Jakarta, Indonesia</h4>
              </div>
            </div>
            <div className="bg-rose-50 rounded-md p-4 cursor-default">
              <div className="flex flex-col items-start justify-center group">
                <h4 className="text-xs text-slate-500 font-medium line-clamp-1">2019</h4>
                <h3 className="text-slate-600 font-medium text-base line-clamp-1 mt-1 group-hover:line-clamp-none">
                  Flutter Development - <span className="font-normal">PT Whita Aplikasi Nusantara</span>
                </h3>
                <h4 className="text-sm text-slate-400 font-medium mt-1 line-clamp-1">South Jakarta, Indonesia</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-slate-100">
        <div className="p-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid-cols-1 gap-4">
              <div className="flex items-center">
                <h4 className="text-lg text-slate-700 font-medium mb-4">Working Skills</h4>
              </div>
              <div className="w-full">
                <div className="flex flex-col justify-center mb-4">
                  <div className="flex flex-row justify-between text-slate-500">
                    <h4 className="text-xs font-medium">Frontend Web Dev</h4>
                    <h4 className="text-xs">90%</h4>
                  </div>
                  <progress className="progress progress-info w-full mt-2" value="90" max="100"></progress>
                </div>
                <div className="flex flex-col justify-center mb-4">
                  <div className="flex flex-row justify-between text-slate-500">
                    <h4 className="text-xs font-medium">Backend Dev</h4>
                    <h4 className="text-xs">80%</h4>
                  </div>
                  <progress className="progress progress-warning w-full mt-2" value="80" max="100"></progress>
                </div>
                <div className="flex flex-col justify-center mb-4">
                  <div className="flex flex-row justify-between text-slate-500">
                    <h4 className="text-xs font-medium">Mobile Dev</h4>
                    <h4 className="text-xs">65%</h4>
                  </div>
                  <progress className="progress progress-success w-full mt-2" value="65" max="100"></progress>
                </div>
                <div className="flex flex-col justify-center mb-4">
                  <div className="flex flex-row justify-between text-slate-500">
                    <h4 className="text-xs font-medium">UI/UX</h4>
                    <h4 className="text-xs">90%</h4>
                  </div>
                  <progress className="progress progress-primary w-full mt-2" value="90" max="100"></progress>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-center">
                <h4 className="text-lg text-slate-700 font-medium mb-4">Knowledge</h4>
              </div>
              <h5 className="text-xs py-2 px-4 bg-slate-200 text-slate-600 inline-block rounded-md me-2 mb-4">
                Javascript
              </h5>
              <h5 className="text-xs py-2 px-4 bg-slate-200 text-slate-600 inline-block rounded-md me-2 mb-4">PHP</h5>
              <h5 className="text-xs py-2 px-4 bg-slate-200 text-slate-600 inline-block rounded-md me-2 mb-4">Dart</h5>
              <h5 className="text-xs py-2 px-4 bg-slate-200 text-slate-600 inline-block rounded-md me-2 mb-4">
                Next.js
              </h5>
              <h5 className="text-xs py-2 px-4 bg-slate-200 text-slate-600 inline-block rounded-md me-2 mb-4">
                React.js
              </h5>
              <h5 className="text-xs py-2 px-4 bg-slate-200 text-slate-600 inline-block rounded-md me-2 mb-4">
                Express.js
              </h5>
              <h5 className="text-xs py-2 px-4 bg-slate-200 text-slate-600 inline-block rounded-md me-2 mb-4">
                Laravel
              </h5>
              <h5 className="text-xs py-2 px-4 bg-slate-200 text-slate-600 inline-block rounded-md me-2 mb-4">
                Flutter
              </h5>
              <h5 className="text-xs py-2 px-4 bg-slate-200 text-slate-600 inline-block rounded-md me-2 mb-4">Figma</h5>
              <h5 className="text-xs py-2 px-4 bg-slate-200 text-slate-600 inline-block rounded-md me-2 mb-4">
                Photoshop
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 pb-8">
        <Footer />
      </div>
    </div>
  );
}

export default Resume;
