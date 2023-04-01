import React from "react";

const ProjectsItem = ({ title, img }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-[100%]  shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-purple-300 to-Ipurple ease-in-out transition-colors on duration-150 ">
      <img className="rounded-xl group-hover:opacity-10" src={img} alt="/" />
      <div className="hidden group-hover:block absolute top-[50%]  left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className=" text-2xl font-bold text-white tracking-wider text-center capitalize">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center hover:text-Ipurple">
          React js
        </p>
        <a href="/">
          <p className=" text-center p-3 rounded-lg bg-white text-gray-500 font-bold cursor-pointer text-lg hover:text-2xl transition-all ease-in-out  duration-200 ">
            {" "}
            More info
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectsItem;
