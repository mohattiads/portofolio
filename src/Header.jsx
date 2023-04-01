import React, { useState } from "react";
import LogoImg1 from "./assets/4.png"
import LogoImg2 from "./assets/3.png"


const Header = () => {
  
 
  return (
    <div className="bg-transparent border-bottom-1 border-b-2 border-white/10 pb-4 pt-4 pl-5 w-full   absolute ">
  
         <img className="  ml-5 max-[200px]: w-14  min-[767px]:w-24"
           src={LogoImg1}
           alt="/"
         />
     
     
   
    </div>
  );
};

export default Header;
