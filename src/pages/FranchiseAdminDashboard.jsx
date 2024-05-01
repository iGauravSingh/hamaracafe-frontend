import React, { useEffect, useState } from "react";
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
import JobQueries from "../components/JobQueries";
import WithdrawRequest from "../components/WithdrawRequest";
import useAdminAffilateList from "../hooks/useAdminAffiliateList";
import { useDispatch, useSelector } from "react-redux";
import useHelp from "../hooks/useHelp";
import useJob from "../hooks/useJob";
import useWithdraw from "../hooks/useWithdraw";
import useLatest from "../hooks/useLatest";
import useAdmin from "../hooks/useAdmin";
import { useNavigate } from "react-router-dom";
import Unauthorized from "./Unauthorized";
import useFranchise from "../hooks/useFranchise";
import FranchiseList from "../components/FranchiseList";
import Letter from "../components/Letter";

const FranchiseAdminDashboard = () => {
  const navigate = useNavigate();

  const { admin } = useSelector((state) => state.admin.value);

  if (!admin) {
    return <Unauthorized />;
  }

  // logout
  const { logout } = useAdmin();
  //

  const { fetchAllFranchie } = useFranchise();

  const franchiseData = fetchAllFranchie();

  // fetch latest updates section
  const { fetchLatestList } = useLatest();
  const latestData = fetchLatestList();
  //

  const [pageState, setPageState] = useState("franlist");

  //   Profile modal variable
  const [isOpenProfile, setIsOpenProfile] = useState(false);

  const handleOpenProfile = () => setIsOpenProfile(true);
  const handleCloseProfile = () => setIsOpenProfile(false);

  //

  const handleLogout = () => {
    logout();
    navigate("/adminlogin");
  };

  return (
    // parent div
    <div className="flex flex-col md:flex-row font-serif">
      {/* dashboard leftside board  */}
      <div className="w-screen md:w-[20%] h-[300px] md:min-h-screen bg-[#e62e56] text-white">
        <div className="flex flex-col  items-center mt-4">
          <h3 className="">Welcome Admin</h3>
        </div>
        <ul className=" w-full min-h-screen flex flex-col gap-6 items-center font-bold text-xl font-sans">
          <li className=" mt-5 cursor-pointer">Home</li>
          <li
            onClick={() => setPageState("franlist")}
            className=" cursor-pointer"
          >
            Franchise List
          </li>

          <li
            onClick={() => setPageState("letter")}
            className=" cursor-pointer"
          >
            Upload Letter
          </li>

          <li onClick={handleLogout} className=" cursor-pointer">
            Logout
          </li>
        </ul>
      </div>

      {/* dashboard Rightside board  */}
      <div className="w-screen md:w-[80%] min-h-screen">
        {pageState === "franlist" && <FranchiseList />}
        {pageState === "letter" && <Letter />}
      </div>
    </div>
  );
};

export default FranchiseAdminDashboard;
