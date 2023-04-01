import React from "react";
import ProjectsItem from "./ProjectsItem"
import ProjectImg from "../assets/1.jpg"
const Projects = () => {
  return (
    <div id="projects" className=" max-w-[1040px] m-auto md:pl-20 p-4 py-16 hover:text-2xl transition-all ease-in-out  duration-200">
      <h1 className=" block text-4xl font-bold text-center text-purple-800 hover:text-5xl transition-all ease-in-out  duration-200  hover:text-purple-400 transition-all duration-300 ease-in-out ">
        Projects
      </h1>
      <p className=" text-center py-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className=" grid sm:grid-cols-2 gap-10  px-14 py-6">
      <ProjectsItem img={ProjectImg} title="medo project"/>
      <ProjectsItem img={ProjectImg} title="medo project"/>
      <ProjectsItem img={ProjectImg} title="medo project"/>
      <ProjectsItem img={ProjectImg} title="medo project"/>
      </div>
    </div>
  );
};

export default Projects;
