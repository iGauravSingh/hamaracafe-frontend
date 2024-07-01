import React from "react";
import { Link } from "react-router-dom";
import { FaCircleArrowRight } from "react-icons/fa6";

import hamaralogo from "../assets/hamaralogo.webp";

const Homepage = () => {
  return (
    <div className=" w-screen h-screen">
      {/* navbar  */}
      <div className=" w-full flex items-center justify-between pt-4 px-8 pb-4  shadow-lg">
        <a href="https://hamaracafe.com/">
          <img className=" h-5 md:h-10 w-auto" src={hamaralogo} alt="Hamaracafe company logo" />
        </a>

        <div className=" flex gap-5 lg:text-lg md:text-sm sm:text-sm font-serif font-semibold text-red-600 ">
        <Link to="/signin" className="btn">
          Sign In
        </Link>

        
        {/* <Link to="/adminlogin" className="btn">
          Admin Login
        </Link> */}
        <Link to="/job" className="btn">
          Job Application
        </Link>
        
        </div>


      </div>

      <div className=" w-full flex flex-col justify-center items-center text-lg text-red-500 font-bold mt-7">
        <h2 className=" text-4xl">Welcome to Hamaracafe your own online cybercafe</h2>
        <h3 className=" mt-4 text-[#212635]"> We provide services like pan card apply, government job application</h3>
        <h3 className=" text-[#212635]">Adhar card apply, elctric meter apply, etc</h3>
      </div>
      
      <div className="flex flex-col space-y-4 mt-9 px-7">
        <Link to="/signin" className="btn">
        <div className="flex items-center gap-4 text-xl font-semibold text-red-500"><FaCircleArrowRight color="#e72f56" size={30} /> Sign In</div>
          
        </Link>
        <Link to="/signup" className="btn">
        <div className="flex items-center gap-4 text-xl font-semibold text-red-500"><FaCircleArrowRight color="#e72f56" size={30} /> Sign Up</div>
          
        </Link>
        <Link to="/adminlogin" className="btn">
        <div className="flex items-center gap-4 text-xl font-semibold text-red-500"><FaCircleArrowRight color="#e72f56" size={30} /> Admin Login</div>
          
        </Link>
        <Link to="/job" className="btn">
        <div className="flex items-center gap-4 text-xl font-semibold text-red-500"><FaCircleArrowRight color="#e72f56" size={30} /> Job Application</div>
          
        </Link>
        <Link to="/franchisesignin" className="btn">
        <div className="flex items-center gap-4 text-xl font-semibold text-red-500"><FaCircleArrowRight color="#e72f56" size={30} /> Franchise Login</div>
          
        </Link>
        <Link to="/franchisesignup" className="btn">
        <div className="flex items-center gap-4 text-xl font-semibold text-red-500"><FaCircleArrowRight color="#e72f56" size={30} /> Franchise Signup</div>
          
        </Link>
      </div>


    </div>
  );
};

export default Homepage;
