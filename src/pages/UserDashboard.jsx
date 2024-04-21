import React, { useState } from "react";
import Button from "../components/Button";
import { useSelector } from "react-redux";

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




const UserDashboard = () => {

  const navigate = useNavigate()

  const user = useSelector((state) => state.user.value)

  const { logout } = useAuth()

  console.log(user.user)

  if(!user.user){
    return <Unauthorized />
  }

  const userData = user?.user

  //console.log(user)

    const encodedText = `https://hamaracafe.com/job-work-form2/?coupon=${userData.affiliateCode}`

    const shareText = `Fill Forms From Home
    https://hamaracafe.com/job-work-form2/?coupon=${userData.affiliateCode}`

  const handleShare = () => {
    console.log("share");
    
    window.open(`https://web.whatsapp.com/send?text=${shareText}`);
  };

  const handleCopy = () => {
    console.log("copy");
  };

  const handleLogout = () => {
    // clear redux  // clear cokie
     
    logout()

    // redirect
    navigate('/signin')
  }


  // Widthdrawl form state
  const [drawAmt,setDrawAmt] = useState(0)
  const [draw,setDraw] = useState(false)
  const handleWithdraw = () => {
    setDraw(prevState => !prevState)
  }

  const handleWithdrawRequest = () => {
    setDraw(false)
    // check if drawAmt is more then net earning then send error
    
  }

  //

  const handleHelpmessage  = () => {
    handleCloseHelp()
    console.log()
  }
 
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
    // parent div
    <div className="flex flex-col md:flex-row font-serif">
      {/* dashboard leftside board  */}
      <div className="w-screen md:w-[20%] h-[300px] md:min-h-screen bg-[#e62e56] text-white">
        <div className="flex flex-col  items-center mt-4">
        <img className=' w-10 h-10' src={userData.imageUrl} alt="default profile" />
        <h3 className="">Welcome {userData.name}</h3>
        
        </div>
        <ul className=" w-full flex flex-col gap-6 items-center font-bold text-xl">
          <li className=" mt-5 cursor-pointer">Home</li>
          <li className=" cursor-pointer" onClick={handleOpenProfile}>Profile</li>
          <li onClick={handleLogout} className=" cursor-pointer">Logout</li>
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
          <ul className=" flex justify-center gap-2 mt-6 ">
            <li className=" px-2 py-2 bg-green-700 text-white cursor-pointer">Instagram</li>
            <li className=" px-2 py-2 bg-blue-700 text-white cursor-pointer">Youtube</li>
            <li className=" px-2 py-2 bg-red-700 text-white cursor-pointer">Website</li>
            <li className=" px-2 py-2 bg-yellow-400 text-white cursor-pointer">Other</li>
          </ul>
        </div>

        {/* cards  */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-8 mt-10">
          {/* card 1  */}
          <div
            className=" w-[260px] h-[120px] shadow-2xl flex justify-between items-center px-4"
          >
            <div className=" flex gap-2 text-lg font-bold">
            <TbHandClick size={30} color="#e62e56" />
            <h4>Total Clicks</h4>
            </div>
            <p>{userData.totalClicks}</p>
          </div>

          {/* card 2  */}
          <div
            className=" w-[260px] h-[120px] shadow-2xl flex justify-between items-center px-4"
          >
            <div className=" flex gap-2 text-lg font-bold">
            <FaInfo size={30} color="#e62e56" />
            <h4>Total Inquiries</h4>
            </div>
            <p>{userData.totalInquiry}</p>
          </div>

          {/* card 3  */}
          <div
            className=" w-[260px] h-[120px] shadow-2xl flex justify-between items-center px-4"
          >
            <div className=" flex gap-2 text-lg font-bold">
            <FaGear size={30} color="#e62e56" />
            <h4>Work Going On</h4>
            </div>
            <p>{userData.workgoingon}</p>
          </div>

        {/* card 4  */}
        <div onClick={handleOpenUpdate}
            className=" w-[260px] h-[120px] shadow-2xl flex justify-between items-center px-4"
          >
            <div onClick={handleOpenUpdate} className=" flex gap-2 text-lg font-bold cursor-pointer">
            <HiOutlineSpeakerphone size={30} color="#e62e56" />
            <h4>Latest Updates</h4>
            </div>
            <p></p>
          </div>

          {/* card 5  */}
          <div onClick={handleOpenHelp}
            className=" w-[260px] h-[120px] shadow-2xl flex justify-between items-center px-4 cursor-pointer"
          >
            <div className=" flex gap-2 text-lg font-bold">
            <BiSupport size={30} color="#e62e56" />
            <h4>Help and Supports</h4>
            </div>
            <p></p>
          </div>

          {/* card 6  */}
          <div onClick={handleOpenEarning}
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
                <UserProfile imageUrl={userData.imageUrl} userName={userData.name} affiliateCode={userData.affiliateCode} website={userData.website} youtube={userData.youtube} instagram={userData.instagram} />
            </Modal>

        {/* Modal Latest Updates  */}
        <Modal isOpen={isOpenUpdate} onClose={handleCloseUpdate}>
            <div className=" w-[300px] h-[100px]">
                <p className=" text-lg font-bold">defencejobs.in</p>
            </div>
        </Modal>

        {/* Modal Help and Support  */}
        <Modal isOpen={isOpenHelp} onClose={handleCloseHelp}>
            <div className=" flex flex-col">
                <p>Hello user how can we help you?</p>
                <textarea className=" outline-none border-2 border-[#e62e56] mt-4 rounded-xl" name="helpmessage" id="helpmessage" cols="30" rows="10"></textarea>
                <button className=' border-2 border-[#e62e56] px-1 py-1 text-[#e62e56] cursor-pointer mt-2' onClick={handleHelpmessage}>Submit</button>
            </div>
        </Modal>

        {/* Modal Earning  */}
        <Modal isOpen={isOpenEarning} onClose={handleCloseEarning}>
            <div className=" w-[300px] flex flex-col gap-4 mt-2">
                <div className=" flex justify-between">
                    <p>Total Money</p>
                    <p className=" font-bold">₹400</p>
                </div>
                <div className=" flex flex-col justify-center">
                    <button onClick={handleWithdraw} className=' border-2 border-[#e62e56] px-1 py-1 text-[#e62e56] cursor-pointer mt-2'>Withdraw</button>
                    {draw && (
                    <div className=" mt-4 flex flex-col gap-4">
                      <h3 className=" text-center">Enter The Amount</h3>
                      <input value={drawAmt} onChange={(e)=> setDrawAmt(e.target.value)} className=" outline-none border-2 border-[#e62e56]" type="text" />
                      <button onClick={handleWithdrawRequest} className=' border-2 border-[#e62e56] px-1 py-1 text-[#e62e56] cursor-pointer mt-2'>Request for withdraw</button>
                    </div>
                  )}
                </div>
                
            </div>
        </Modal>

      </div>
    </div>
  );
};

export default UserDashboard;
