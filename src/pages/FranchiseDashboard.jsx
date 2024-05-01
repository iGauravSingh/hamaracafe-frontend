import React, { useEffect, useRef, useState, Fragment } from "react";
import Button from "../components/Button";
import { useSelector } from "react-redux";

// toast related
import { Transition } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/20/solid";

//

import { TbHandClick } from "react-icons/tb";
import { FaInfo } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import { GiMoneyStack } from "react-icons/gi";
import Modal from "../components/Modal";
import UserProfile from "./UserProfile";
import CopyCheck from "../components/CopyCheck";

import { clearUser } from "../features/userSlice";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Unauthorized from "./Unauthorized";
import useLatest from "../hooks/useLatest";
import useHelp from "../hooks/useHelp";
import useWithdraw from "../hooks/useWithdraw";
import useBanner from "../hooks/useBanner";
import useFranchise from "../hooks/useFranchise";
import ProfileFranchise from "./ProfileFranchise";

const FranchiseDashboard = () => {
  ///////toast state
  const [show, setShow] = useState(false);

  const [toastHead, setToastHead] = useState("");
  const [toastMsg, setToastMsg] = useState("");

  /////////

  //////// Button Loading
  const [loadingHelp, setLoadingHelp] = useState(false);

  ////////

  const navigate = useNavigate();

  const franchise = useSelector((state) => state.franchise.value);

  const { latest, isLoading } = useSelector((state) => state.latest.value);

  const { fetchLatestList } = useLatest();

//   const { requestWithdraw } = useWithdraw();

//   const { getAllBanner } = useBanner();
//   const [bann, setBann] = useState([]);

  

  useEffect(() => {
    fetchLatestList();
  }, []);

  const { logout } = useFranchise()

  //console.log(user.user)

//   if (!user.user) {
//     return <Unauthorized />;
//   }

// console.log(franchise)
  const userData = franchise?.franchise;

  //console.log(user)


  const handleLogout = () => {
    // clear redux  // clear cokie

    logout();

    // redirect
    navigate("/franchisesignin");
  };



  //

  // Help Queries Section

//   const { addHelp } = useHelp();

//   const helpRef = useRef(null);

//   const handleHelpmessage = async () => {
    //

//     console.log(helpRef.current.value);
//     if (!helpRef.current.value) {
//       alert("Please Add Your Query");
//       return;
//     }
//     setLoadingHelp(true);
//     const help = await addHelp({
//       name: userData.name,
//       email: userData.email,
//       mobile: userData.mobile,
//       query: helpRef.current.value,
//       affiliateCode: userData.affiliateCode,
//     });
//     if (help.message === "success") {
//       setToastHead("Success");
//       setToastMsg("Request Submitted, We will contact you soon.");
//       setShow(true);
//       setLoadingHelp(false);
//       handleCloseHelp();
//     } else {
//       setToastHead("Error");
//       setToastMsg("Server Error");
//       setShow(true);
//       setLoadingHelp(false);
//       handleCloseHelp();
//     }
//   };

  //

  //   Profile modal variable
  const [isOpenProfile, setIsOpenProfile] = useState(false);

  const handleOpenProfile = () => setIsOpenProfile(true);
  const handleCloseProfile = () => setIsOpenProfile(false);

  //

  // Latest Updates Modal Variable
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);

  const handleOpenUpdate = () => setIsOpenUpdate(true);
  const handleCloseUpdate = () => setIsOpenUpdate(false);
  //

  // Help and support Modal Variables
  const [isOpenHelp, setIsOpenHelp] = useState(false);

  const handleOpenHelp = () => setIsOpenHelp(true);
  const handleCloseHelp = () => setIsOpenHelp(false);
  //

  // Work Modal Variable
  const [isOpenWork, setIsOpenWork] = useState(false);

  const handleOpenWork = () => setIsOpenWork(true);
  const handleCloseWork = () => setIsOpenWork(false);
  //

  return (
    <>
      {/* // parent div */}
      <div className="flex flex-col md:flex-row font-serif">
        {/* dashboard leftside board  */}
        <div className="w-screen md:w-[20%] h-[300px] md:min-h-screen bg-[#e62e56] text-white">
          <div className="flex flex-col  items-center mt-4">
            <img
              className=" w-10 h-10"
              src={userData?.imageUrl}
              alt="default profile"
            />
            <h3 className="">Welcome {userData.name}</h3>
          </div>
          <ul className=" w-full flex flex-col gap-6 items-center font-bold text-xl font-sans">
            <li className=" mt-5 cursor-pointer">Home</li>
            <li className=" cursor-pointer" onClick={handleOpenProfile}>
              Profile
            </li>
            <li onClick={handleLogout} className=" cursor-pointer">
              Logout
            </li>
          </ul>
        </div>

        {/* dashboard Rightside board  */}
        <div className="w-screen md:w-[80%] min-h-screen">
          {/* code and share and copy */}
          

          {/* banner  */}
          <div>
            <div className=" flex justify-center gap-2 mt-6 ">
              
            {<a href='#' target="_blank" rel="noopener noreferrer" className=" px-2 py-2 bg-[#e62e56] text-white cursor-pointer">
                Authorization Letter
              </a>}
              
            </div>
          </div>

          {/* cards  */}
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-8 mt-10">
            {/* card 1  */}
           
            <div onClick={handleOpenWork} className=" w-[260px] h-[120px] shadow-2xl flex justify-between items-center px-4 cursor-pointer">
              <div className=" flex gap-2 text-lg font-bold">
                <FaGear size={30} color="#e62e56" />
                <h4>Total Work</h4>
              </div>
              {/* <p>{userData.workgoingon}</p> */}
            </div>

            {/* card 2  */}
            <div
              onClick={handleOpenUpdate}
              className=" w-[260px] h-[120px] shadow-2xl flex justify-between items-center px-4"
            >
              <div
                onClick={handleOpenUpdate}
                className=" flex gap-2 text-lg font-bold cursor-pointer"
              >
                <HiOutlineSpeakerphone size={30} color="#e62e56" />
                <h4>Latest Updates</h4>
              </div>
              <p></p>
            </div>

            {/* card 5  */}
            <div
              onClick={handleOpenHelp}
              className=" w-[260px] h-[120px] shadow-2xl flex justify-between items-center px-4 cursor-pointer"
            >
              <div className=" flex gap-2 text-lg font-bold">
                <BiSupport size={30} color="#e62e56" />
                <h4>Help and Supports</h4>
              </div>
              <p></p>
            </div>

            
          </div>

          {/* Modal Work  */}
          <Modal isOpen={isOpenWork} onClose={handleCloseWork}>
            <div>
            <div className="container mx-auto mt-10">
  <table className="min-w-full table-auto">
    <thead className="bg-[#e62e56] text-white">
      <tr>
        <th className="px-6 py-3 text-left">Date</th>
        <th className="px-6 py-3 text-left">Discription</th>
        <th className="px-6 py-3 text-left">Complete or Not</th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b bg-white hover:bg-gray-100">
        <td className="px-6 py-4">2024-04-30</td>
        <td className="px-6 py-4">
          <a href="#" class="text-blue-500 hover:text-blue-800">View</a>
        </td>
        <td className="px-6 py-4">Yes</td>
      </tr>
      
      
    </tbody>
  </table>
</div>
            </div>
          </Modal>

          {/* Modal Profile 
          <button onClick={handleOpen}>Open Modal</button> */}
          <Modal isOpen={isOpenProfile} onClose={handleCloseProfile}>
            <ProfileFranchise
              userid={userData.id}
              imageUrl={userData.imageUrl}
              userName={userData.name}
              about={userData.about}
              
            />
          </Modal>

          {/* Modal Latest Updates  */}
          <Modal isOpen={isOpenUpdate} onClose={handleCloseUpdate}>
            <div className=" w-[300px] h-[100px]">
              <div className=" flex flex-col">
                {latest?.map((latUpp) => (
                  <a href={`https://${latUpp.update}`} key={latUpp.id} target="_blank">
                    {latUpp.update}
                  </a>
                ))}
              </div>
            </div>
          </Modal>

          {/* Modal Help and Support  */}
          <Modal isOpen={isOpenHelp} onClose={handleCloseHelp}>
            {/* <div className=" flex flex-col">
              <p>Hello user how can we help you?</p>
              <textarea
                ref={helpRef}
                className=" outline-none border-2 border-[#e62e56] mt-4 rounded-xl"
                name="helpmessage"
                id="helpmessage"
                cols="30"
                rows="10"
              ></textarea>
              
              <button
                onClick={handleHelpmessage}
                className={`border-2 border-[#e62e56] px-1 py-1 text-[#e62e56] cursor-pointer mt-2 ${
                  loadingHelp ? "pointer-events-none opacity-50" : ""
                }`}
              >
                {loadingHelp ? "Submitting..." : "Submit"}
              </button>
            </div> */}

            <div>
                <p>For Any Querry Contact Us On :  <span className=" font-bold">8989898989 </span> </p>
            </div>
          </Modal>

          
          
        </div>
      </div>

      {/* // Toast */}
      <>
        {/* Global notification live region, render this permanently at the end of the document */}
        <div
          aria-live="assertive"
          className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
        >
          <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
            {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
            <Transition
              show={show}
              as={Fragment}
              enter="transform ease-out duration-300 transition"
              enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
              enterTo="translate-y-0 opacity-100 sm:translate-x-0"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      {toastHead === "Success" ? (
                        <CheckCircleIcon
                          className="h-6 w-6 text-green-400"
                          aria-hidden="true"
                        />
                      ) : (
                        <XCircleIcon
                          className="h-6 w-6 text-red-400"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <div className="ml-3 w-0 flex-1 pt-0.5">
                      <p className="text-sm font-medium text-gray-900">
                        {toastHead}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">{toastMsg}</p>
                    </div>
                    <div className="ml-4 flex flex-shrink-0">
                      <button
                        type="button"
                        className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => {
                          setShow(false);
                        }}
                      >
                        <span className="sr-only">Close</span>
                        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </>
    </>
  );
};

export default FranchiseDashboard;
