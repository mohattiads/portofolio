import React from "react";

const CurrentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <div className=" bg-Ipurple w-full hover:text-2xl transition ease-in duration-400 ">
     <div>
       <h1 className=" text-white text-center p-20 text-1xl">
         Created by{" "}
         <a
           href="#main"
           className="  text-bold cursor-pointer pe hover:text-purple-400  transition-all duration-300 ease-in-out  decoration-Ipurple "
         >
           Mohamed Attia
         </a>{" "}
         © <span className="hover:underline">{CurrentYear}</span>{" "}
       </h1>
     </div>
    </div>
  );
};

export default Footer;
