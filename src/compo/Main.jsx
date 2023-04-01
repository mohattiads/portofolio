import React from "react";
import { TypeAnimation } from "react-type-animation";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import Header from "../Header";
import HeaderImg from "../assets/2.jpg"
//? https://drive.google.com/uc?export=view&id=************

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover"
        src={HeaderImg}
        alt=""
      />
      <div className="  w-full h-screen  absolute top-0 left-0 bg-black/20">
      <Header/>

        <div className="max-w-[700px] m-auto h-full w-full  flex flex-col justify-center items-start items-center">
          <h1 className="max-[400px]: text-4xl  font-bold text-gray-100 max-sm:mt20 lg:text-5xl mb-2   ">
            I{"'"}m{" "}
            <a className="hover:text-6xl transition-all ease-in-out  duration-200  hover:underline decoration-purple-500 curser-pointer  " href="main">
              Mohamed Attia
            </a>
          </h1>
          <h2 className="flex font-bold text-gray-100      pt-2 lg:text-gray-100  ">
            <TypeAnimation
              sequence={["Who am i ?", 1000]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1.6rem" }}
            />
          </h2>
          <h2 className="flex text-2xl lg:text-2xl  font-bold text-gray-200 pt-1">
            I{"'"}
            <TypeAnimation
              sequence={[" m a Frontend Developer", 1000, " m a Coder", 2000]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1.1rem" }}
            />
          </h2>
          <div className="flex justify-between pt-3 max-w-[200px] w-full">
            <FacebookIcon className="cursor-pointer text-gray-100" />
            <TwitterIcon className="cursor-pointer text-gray-100" />
            <InstagramIcon className="cursor-pointer text-gray-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
