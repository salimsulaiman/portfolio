import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Project() {
  const navigate = useNavigate();
  const [project, setProject] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    setIsLoading(true);
    axios.get("https://664caa3cede9a2b556511d08.mockapi.io/project").then(function (response) {
      setProject(response.data);
      setIsLoading(false);
    });
  }, []);

  const handleFilterGenre = (filter) => {
    setCategory(filter);
  };
  return (
    <div className="bg-white rounded-xl p-8 h-fit relative shadow-sm dark:bg-slate-800">
      <div className="flex items-start sm:items-center flex-col sm:flex-row">
        <h1 className="text-xl sm:text-3xl lg:text-4xl text-slate-600 font-bold me-4 dark:text-white">Project</h1>
        <div className="w-2/5 h-1 rounded-xl bg-blue-500 mt-4 sm:mt-0"></div>
      </div>
      <div>
        {" "}
        <div className="flex flex-row items-center justify-end mt-4">
          <select
            className="select select-bordered w-full select-sm text-xs block sm:hidden text-slate-600 bg-white dark:bg-slate-500 dark:text-white mt-4"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value={"all"}>All</option>
            <option value={"frontend"}>Frontend</option>
            <option value={"backend"}>Backend</option>
            <option value={"fullstack"}>Fullstack</option>
            <option value={"ui/ux"}>UI/UX</option>
          </select>
          <ul className="text-sm md:text-base hidden sm:flex flex-row">
            <li
              className={`ms-4 cursor-pointer ${
                category == "all"
                  ? "text-blue-500 font-bold"
                  : "text-slate-500 dark:text-white dark:hover:text-blue-400 hover:text-blue-400"
              }`}
              onClick={() => handleFilterGenre("all")}
            >
              All
            </li>
            <li
              className={`ms-4 cursor-pointer ${
                category == "frontend"
                  ? "text-blue-500 font-bold"
                  : "text-slate-500 dark:text-white dark:hover:text-blue-400 hover:text-blue-400"
              }`}
              onClick={() => handleFilterGenre("frontend")}
            >
              Frontend
            </li>
            <li
              className={`ms-4 cursor-pointer ${
                category == "backend"
                  ? "text-blue-500 font-bold"
                  : "text-slate-500 dark:text-white dark:hover:text-blue-400 hover:text-blue-400"
              }`}
              onClick={() => handleFilterGenre("backend")}
            >
              Backend
            </li>
            <li
              className={`ms-4 cursor-pointer ${
                category == "fullstack"
                  ? "text-blue-500 font-bold"
                  : "text-slate-500 dark:text-white dark:hover:text-blue-400 hover:text-blue-400"
              }`}
              onClick={() => handleFilterGenre("fullstack")}
            >
              Fullstack
            </li>
            <li
              className={`ms-4 cursor-pointer ${
                category == "ui/ux"
                  ? "text-blue-500 font-bold"
                  : "text-slate-500 dark:text-white dark:hover:text-blue-400 hover:text-blue-400"
              }`}
              onClick={() => handleFilterGenre("ui/ux")}
            >
              UI/UX
            </li>
          </ul>
        </div>
        {isLoading ? (
          <div className="grid grid-cols-1">
            <div className="aspect-video flex items-center justify-center">
              <span className="loading loading-spinner loading-lg text-slate-600 dark:text-blue-500"></span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {project
              .filter((el) => {
                if (category == "all") {
                  return true;
                } else {
                  return el?.category == category;
                }
              })
              .map((element, index) => {
                return (
                  <div
                    key={element?.id}
                    className={`bg-slate-100 dark:bg-slate-700 aspect-square rounded-xl text-white flex flex-col items-start justify-start p-2 sm:p-4 h-auto`}
                  >
                    <div className="bg-white w-full h-5/6 rounded-xl mb-4 overflow-hidden">
                      <img
                        src={element?.image}
                        alt=""
                        className="h-full w-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
                      />
                    </div>
                    <h4 className="text-xs text-slate-400 line-clamp-1"> {element?.tools?.join(", ")}</h4>
                    <Link to={element?.detail} target="_blank">
                      <h3 className="text-sm text-slate-400 font-bold line-clamp-1 hover:text-slate-500 cursor-pointer dark:text-slate-400 dark:hover:text-white">
                        {element?.name}
                      </h3>
                    </Link>
                  </div>
                );
              })}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Project;
