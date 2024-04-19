import React, { useState } from "react";
import Button from "../components/Button";

import { TbHandClick } from "react-icons/tb";
import { FaInfo } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import { GiMoneyStack } from "react-icons/gi";
import Modal from "../components/Modal";
import UserProfile from "./UserProfile";
import CopyCheck from "../components/CopyCheck";
import AffaliateList from "../components/AffaliateList";
import HelpQueries from "../components/HelpQueries";
import LatestUpdates from "../components/LatestUpdates";
import BannerUpload from "../components/BannerUpload";
import ChangePasswordAdmin from "../components/ChangePasswordAdmin";


const AdminDashboard = () => {

  // page code => afflist , help, updates, banner, pass
  const [pageState,setPageState] = useState('afflist')

//   Profile modal variable 
  const [isOpenProfile, setIsOpenProfile] = useState(false);

  const handleOpenProfile = () => setIsOpenProfile(true);
  const handleCloseProfile = () => setIsOpenProfile(false);

//



  return (
    // parent div
    <div className="flex flex-col md:flex-row font-serif">
      {/* dashboard leftside board  */}
      <div className="w-screen md:w-[20%] h-[300px] md:min-h-screen bg-[#e62e56] text-white">
        <div className="flex flex-col  items-center mt-4">
        <h3 className="">Welcome Admin</h3>
        
        </div>
        <ul className=" w-full flex flex-col gap-6 items-center font-bold text-xl">
          <li className=" mt-5 cursor-pointer">Home</li>
          <li onClick={()=> setPageState('afflist')} className=" cursor-pointer">Affailate List</li>
          <li onClick={()=> setPageState('help')} className=" cursor-pointer">Help Queries</li>
          <li onClick={()=> setPageState('updates')} className=" cursor-pointer">Latest Updates</li>
          <li onClick={()=> setPageState('banner')} className=" cursor-pointer">Banner Upload</li>
          <li onClick={()=> setPageState('pass')} className=" cursor-pointer">Change Password</li>
          <li className=" cursor-pointer">Logout</li>
        </ul>
      </div>

      {/* dashboard Rightside board  */}
      <div className="w-screen md:w-[80%] min-h-screen">
        
        {pageState === 'afflist' && <AffaliateList />}
        {pageState === 'help' && <HelpQueries />}
        {pageState === 'updates' && <LatestUpdates />}
        {pageState === 'banner' && <BannerUpload />}
        {pageState === 'pass' && <ChangePasswordAdmin />}

        

        

        

       

      </div>
    </div>
  );
};

export default AdminDashboard;