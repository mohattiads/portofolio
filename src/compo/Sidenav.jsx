import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import GridViewIcon from "@mui/icons-material/GridView";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import WorkIcon from "@mui/icons-material/Work";
const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log("changed");
  };
  return (
    <div>
      <MenuIcon
        onClick={handleNav}
        className= "max-[200px]:  text-white absolute top-5 right-4 z-[99] md:invisible  "
      />
      {nav ? (
        <div className=" fixed w-full h-screen  bg-black/70 flex flex-col justify-center items-center z-20">
          <a
            href="main"
            className=" text-purple-800 w-[70%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <HomeIcon />
            <span className="pl-4">Home</span>
          </a>

          <a onClick={handleNav}
            href="#work"
            className="text-purple-800 w-[70%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <WorkIcon />
            <span className="pl-4">Work</span>
          </a>

          <a onClick={handleNav}
            href="#projects"
            className="text-purple-800 w-[70%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GridViewIcon />
            <span className="pl-4">Projects</span>
          </a>

          <a onClick={handleNav}
            href="#main"
            className=" text-purple-800 w-[70%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-600 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <PersonIcon />
            <span className="pl-4">Resume</span>
          </a>

          <a onClick={handleNav}
            href="#contact"
            className="text-purple-800 w-[70%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <EmailIcon />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}

      <div className=" pl-5 invisible md:visible block fixed top-[25%] z-10   ">
        <div className="flex  flex-col">
          <a
            href="#main"
            className="  rounded-full shadow-lg bg-gray-200 shadow-purple-400 m-3 p-3 cursor-pointer hover:scale-90 ease-in duration-200  "
          >
            <HomeIcon className=" text-purple-800" />
          </a>

          <a
            href="#work"
            className="  rounded-full shadow-lg bg-gray-200 shadow-purple-400 m-3 p-3 cursor-pointer hover:scale-90 ease-in duration-200"
          >
            <WorkIcon className=" text-purple-900"  />
          </a>
          <a
            href="#projects"
            className="  rounded-full shadow-lg bg-gray-200 shadow-purple-400 m-3 p-3 cursor-pointer hover:scale-90 ease-in duration-200"
          >
            <GridViewIcon className=" text-purple-900" />
          </a>
          <a
            href="#main"
            className="  rounded-full shadow-lg bg-gray-200 shadow-gray-400 m-3 p-3 cursor-pointer hover:scale-90 ease-in duration-200"
          >
            <PersonIcon className=" text-purple-900" />
          </a>
          <a
            href="#contact"
            className="  rounded-full shadow-lg bg-gray-200 shadow-purple-400 m-3 p-3 cursor-pointer hover:scale-90 ease-in duration-200"
          >
            <EmailIcon className=" text-purple-900"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
