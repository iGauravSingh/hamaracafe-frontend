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

const UserDashboard = () => {
  ///////toast state
  const [show, setShow] = useState(false);

  const [toastHead, setToastHead] = useState("");
  const [toastMsg, setToastMsg] = useState("");

  /////////

  //////// Button Loading
  const [loadingHelp, setLoadingHelp] = useState(false);

  ////////

  const navigate = useNavigate();

  const user = useSelector((state) => state.user.value);

  const { latest, isLoading } = useSelector((state) => state.latest.value);

  const { fetchLatestList } = useLatest();

  const { requestWithdraw } = useWithdraw();

  const { getAllBanner } = useBanner();
  const [bann, setBann] = useState([]);

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const banners = await getAllBanner();
        // console.log('from useEffect',banners)
        setBann(banners);
      } catch (error) {
        console.error('Error fetching banner data:', error);
        // Handle error if necessary
      }
    };

    fetchBannerData();
  }, []);

  useEffect(() => {
    fetchLatestList();
  }, []);

  const { logout } = useAuth();

  //console.log(user.user)

 

  if (!user.user) {
    return <Unauthorized />;
  }

  const userData = user?.user;

  //console.log(user)
  
  const encodedText = `https://hamaracafe.in/job/?coupon=${userData.affiliateCode}`;

  const shareText = `Fill Forms From Home
  https://hamaracafe.in/job/?coupon=${userData.affiliateCode}`;

  const handleShare = () => {
    // console.log("share");

    window.open(`https://web.whatsapp.com/send?text=${shareText}`);
  };

  const handleCopy = () => {
    // console.log("copy");
  };

  const handleLogout = () => {
    // clear redux  // clear cokie

    logout();

    // redirect
    navigate("/signin");
  };

  // Widthdrawl form state
  const [drawAmt, setDrawAmt] = useState(0);
  const [draw, setDraw] = useState(false);
  const handleWithdraw = () => {
    setDraw((prevState) => !prevState);
  };

  const handleWithdrawRequest = async () => {
    setDraw(false);
    // check if drawAmt is more then net earning then send error
    if(drawAmt === 0){
      alert("Invalid Amount!")
      return
    }
    if(drawAmt > userData.totalMoney){
      alert("Cannot Withdraw More Then In Account!")
      return
    }

    // send withdraw request
    // console.log(drawAmt);

    const withReq = await requestWithdraw({ amount: drawAmt });

    // console.log(withReq);
    if (withReq.success === true) {
      // console.log('in withreq')
      setToastHead("Success");
      setToastMsg("Withdraw Requset Sent Successfully.");
      setIsOpenEarning(false);
      setShow(true);
    } else {
      setToastHead("Error");
      setToastMsg("Some error in communicating with server.");
      setIsOpenEarning(false);
      setShow(true);
    }
  };

  //

  // Help Queries Section

  const { addHelp } = useHelp();

  const helpRef = useRef(null);

  const handleHelpmessage = async () => {
    //

    // console.log(helpRef.current.value);
    if (!helpRef.current.value) {
      alert("Please Add Your Query");
      return;
    }
    setLoadingHelp(true);
    const help = await addHelp({
      name: userData.name,
      email: userData.email,
      mobile: userData.mobile,
      query: helpRef.current.value,
      affiliateCode: userData.affiliateCode,
    });
    if (help.message === "success") {
      setToastHead("Success");
      setToastMsg("Request Submitted, We will contact you soon.");
      setShow(true);
      setLoadingHelp(false);
      handleCloseHelp();
    } else {
      setToastHead("Error");
      setToastMsg("Server Error");
      setShow(true);
      setLoadingHelp(false);
      handleCloseHelp();
    }
  };

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

  // Earning Modal Variable
  const [isOpenEarning, setIsOpenEarning] = useState(false);

  const handleOpenEarning = () => setIsOpenEarning(true);
  const handleCloseEarning = () => setIsOpenEarning(false);
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
              src={userData.imageUrl}
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
          <div className=" flex justify-between items-center  ml-6 mr-4 mt-7">
            <p className=" text-lg">Affailate Code {userData?.affiliateCode}</p>
            <div className="flex gap-6">
              <CopyCheck textToCopy={encodedText} />
              <Button buttonText="Share" onnClick={handleShare} />
            </div>
          </div>

          {/* banner  */}
          <div>
            <div className=" flex justify-center gap-2 mt-6 ">
              
            {bann[0] && <a href={(bann?.filter(nn=> nn.buttonId === 1))[0].url} target="_blank" rel="noopener noreferrer" className=" px-2 py-2 bg-green-700 text-white cursor-pointer">
                Instagram
              </a>}
              
              { bann[0] && <a href={(bann?.filter(nn=> nn.buttonId === 2))[0].url} target="_blank" rel="noopener noreferrer" className=" px-2 py-2 bg-blue-700 text-white cursor-pointer">
                Youtube
              </a>}
              { bann[0] && <a href={(bann?.filter(nn=> nn.buttonId === 3))[0].url} target="_blank" rel="noopener noreferrer" className=" px-2 py-2 bg-red-700 text-white cursor-pointer">
                Website
              </a>}
              { bann[0] && <a href={(bann?.filter(nn=> nn.buttonId === 4))[0].url} target="_blank" rel="noopener noreferrer" className=" px-2 py-2 bg-yellow-400 text-white cursor-pointer">
                Other
              </a>}
            </div>
          </div>

          {/* cards  */}
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-8 mt-10">
            {/* card 1  */}
            <div className=" w-[260px] h-[120px] shadow-2xl flex justify-between items-center px-4">
              <div className=" flex gap-2 text-lg font-bold">
                <TbHandClick size={30} color="#e62e56" />
                <h4>Total Clicks</h4>
              </div>
              <p>{userData.totalClicks}</p>
            </div>

            {/* card 2  */}
            <div className=" w-[260px] h-[120px] shadow-2xl flex justify-between items-center px-4">
              <div className=" flex gap-2 text-lg font-bold">
                <FaInfo size={30} color="#e62e56" />
                <h4>Total Inquiries</h4>
              </div>
              <p>{userData.totalInquiry}</p>
            </div>

            {/* card 3  */}
            <div className=" w-[260px] h-[120px] shadow-2xl flex justify-between items-center px-4">
              <div className=" flex gap-2 text-lg font-bold">
                <FaGear size={30} color="#e62e56" />
                <h4>Work Going On</h4>
              </div>
              <p>{userData.workgoingon}</p>
            </div>

            {/* card 4  */}
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

            {/* card 6  */}
            <div
              onClick={handleOpenEarning}
              className=" w-[260px] h-[120px] shadow-2xl flex justify-between items-center px-4 cursor-pointer"
            >
              <div className=" flex gap-2 text-lg font-bold">
                <GiMoneyStack size={30} color="#e62e56" />
                <h4>Earning</h4>
              </div>
              <p>{userData.totalMoney}</p>
            </div>
          </div>

          {/* Modal Profile 
          <button onClick={handleOpen}>Open Modal</button> */}
          <Modal isOpen={isOpenProfile} onClose={handleCloseProfile}>
            <UserProfile
              userid={userData.id}
              imageUrl={userData.imageUrl}
              userName={userData.name}
              affiliateCode={userData.affiliateCode}
              website={userData.website}
              youtube={userData.youtube}
              instagram={userData.instagram}
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
            <div className=" flex flex-col">
              <p>Hello user how can we help you?</p>
              <textarea
                ref={helpRef}
                className=" outline-none border-2 border-[#e62e56] mt-4 rounded-xl"
                name="helpmessage"
                id="helpmessage"
                cols="30"
                rows="10"
              ></textarea>
              {/* <button onClick={handleHelpmessage} className=' border-2 border-[#e62e56] px-1 py-1 text-[#e62e56] cursor-pointer mt-2'>Submit</button> */}
              <button
                onClick={handleHelpmessage}
                className={`border-2 border-[#e62e56] px-1 py-1 text-[#e62e56] cursor-pointer mt-2 ${
                  loadingHelp ? "pointer-events-none opacity-50" : ""
                }`}
              >
                {loadingHelp ? "Submitting..." : "Submit"}
              </button>
            </div>
          </Modal>

          {/* Modal Earning  */}
          <Modal isOpen={isOpenEarning} onClose={handleCloseEarning}>
            <div className=" w-[300px] flex flex-col gap-4 mt-2">
              <div className=" flex justify-between">
                <p>Total Money</p>
                <p className=" font-bold">{userData.totalMoney}</p>
              </div>
              <div className=" flex flex-col justify-center">
                <button
                  onClick={handleWithdraw}
                  className=" border-2 border-[#e62e56] px-1 py-1 text-[#e62e56] cursor-pointer mt-2"
                >
                  Withdraw
                </button>
                {draw && (
                  <div className=" mt-4 flex flex-col gap-4">
                    <h3 className=" text-center">Enter The Amount</h3>
                    <input
                      value={drawAmt}
                      onChange={(e) => setDrawAmt(e.target.value)}
                      className=" outline-none border-2 border-[#e62e56]"
                      type="text"
                    />
                    <button
                      onClick={handleWithdrawRequest}
                      className=" border-2 border-[#e62e56] px-1 py-1 text-[#e62e56] cursor-pointer mt-2"
                    >
                      Request for withdraw
                    </button>
                  </div>
                )}
              </div>
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

export default UserDashboard;
