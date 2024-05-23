import React from "react";
import { BsDatabase } from "react-icons/bs";
import { CiMobile4 } from "react-icons/ci";
import { FaCode } from "react-icons/fa";
import { PiFigmaLogoBold } from "react-icons/pi";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="bg-white rounded-xl p-8 h-fit relative shadow-sm dark:bg-slate-800">
      <div className="flex items-start sm:items-center flex-col sm:flex-row">
        <h1 className="text-xl sm:text-3xl lg:text-4xl text-slate-600 font-bold me-4 dark:text-white">About</h1>
        <div className="w-2/5 h-1 rounded-xl bg-blue-500 mt-4 sm:mt-0"></div>
      </div>
      <p className="text-sm lg:text-base text-slate-500 mt-4 text-justify sm:text-start dark:text-white">
        Frontend Web Developer with over 1 year of experience in programming, passionate about creating responsive and
        dynamic user interfaces. Skilled in using frameworks such as React.js, Express.js, Next.js, Laravel, Tailwind,
        and Bootstrap to build interactive and user-friendly web applications. Proficient in collaborating with UI/UX
        and backend teams to seamlessly implement design and system functionality.
      </p>
      <p className="text-sm lg:text-base text-slate-500 mt-4 text-justify sm:text-start dark:text-white">
        Comprehensive understanding of software development concepts, including Agile methodologies and UI/UX
        principles.
      </p>
      <h2 className="text-slate-600 font-medium text-lg sm:text-2xl mt-4 dark:text-white">What I Do!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-slate-600 h-fit">
        <div className="bg-rose-50 rounded-md p-4 dark:bg-slate-500">
          <div className="flex flex-row items-center">
            <FaCode className="text-7xl text-blue-400 me-4" />
            <div>
              <h4 className="text-sm sm:text-base font-bold line-clamp-1 dark:text-white">Web Development</h4>
              <p className="text-slate-500 text-sm dark:text-white">
                Creating a responsive website using various available technologies
              </p>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 rounded-md p-4 dark:bg-slate-600">
          {" "}
          <div className="flex flex-row items-center">
            <PiFigmaLogoBold className="text-7xl text-rose-400 me-4" />
            <div>
              <h4 className="text-sm sm:text-base font-bold line-clamp-1 dark:text-white">UI/UX Design</h4>
              <p className="text-slate-500 text-sm dark:text-white">
                Designing interfaces for web and mobile applications
              </p>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 rounded-md p-4 dark:bg-slate-600">
          {" "}
          <div className="flex flex-row items-center">
            <BsDatabase className="text-7xl text-rose-400 me-4" />
            <div>
              <h4 className="text-sm sm:text-base font-bold line-clamp-1 dark:text-white">Backend Development</h4>
              <p className="text-slate-500 text-sm dark:text-white">
                Creating a RESTful API to be accessed by the frontend team
              </p>
            </div>
          </div>
        </div>
        <div className="bg-rose-50 rounded-md p-4 dark:bg-slate-500">
          {" "}
          <div className="flex flex-row items-center">
            <CiMobile4 className="text-7xl text-blue-400 me-4" />
            <div>
              <h4 className="text-sm sm:text-base font-bold line-clamp-1 dark:text-white">Mobile Development</h4>
              <p className="text-slate-500 text-sm dark:text-white">
                Creating a mobile app using Flutter technology and the Dart language
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
