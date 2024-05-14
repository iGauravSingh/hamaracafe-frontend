import React, { useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import useAdminAffilateList from "../hooks/useAdminAffiliateList";
import useAdmin from "../hooks/useAdmin";

// const people = [
//   {
//     id: 1,
//     name: "Lindsay Walton",
//     email: "lindsay.walton@example.com",
//     mobile: "987654345",
//     website: "https://hamaracafe.com/dashboard/",
//     youtube: "",
//     instagram: "",
//     coupon: "code09u09cj90",
//     workgoingon: 41,
//     earning: 500,
//   },
//   {
//     id: 2,
//     name: "Lindsay Walton",
//     email: "lindsay1.walton@example.com",
//     mobile: "987654345",
//     website: "",
//     youtube: "https://hamaracafe.com/dashboard/",
//     instagram: "",
//     coupon: "code89987casnc",
//     workgoingon: 41,
//     earning: 500,
//   },
//   // More people...
// ];

const AffaliateList = () => {

  const { affiliateUsers, isLoading } = useSelector((state) => state.affiliateUsers.value)

  const { updateAffiliateWork, updateAffiliateInquiries, updateAffiliatetotalEarning } = useAdminAffilateList()
  const { changeUserPassword } = useAdmin()
  const people = affiliateUsers

  // USER PASSWORD RESET 

  const passwordResetRef = useRef(null)
  const handlePasswordReset = async () => {
    // Check if the input element exists and focus it
    if(!passwordResetRef.current.value){
      alert("Admin Password cannot be empty")
      return
    }
    if (passwordResetRef.current) {
      passwordResetRef.current.focus();
      // console.log(passwordResetRef.current.value); // Log the current value of the input to the console
      // console.log({adminpassword: passwordResetRef.current.value, userEmail: selectedUserEmail })
      const repp = await changeUserPassword({adminpassword: passwordResetRef.current.value, userEmail: selectedUserEmail })
      // console.log(repp)
      if(repp.msg === 'success'){
        alert('password reset')
      }
    } else {
      alert("Admin Password cannot be empty")
    }
  };
  
  //

  //   Profile modal variable
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [selectedUser,setSelectedUser] = useState('user')
  const [selectedUserEmail, setSelectedUserEmail] = useState('')
  const [selectedIdToEdit, setSelectedIdToEdit] = useState(null);
  const [selectedWorkToEdit, setSelectedWorkToEdit] = useState(null);
  const [selectedInquiryToEdit, setSelectedInquiryToEdit] = useState(null)
  const [selectedEarningToEdit, setSelectedEarningToEdit] = useState(null);

  const handleOpenEdit = (id, name,email, workgoingon, totalInquiry,earning) => {
    setIsOpenEdit(true);
    setSelectedIdToEdit(id);
    setSelectedUser(name)
    setSelectedUserEmail(email)
    setSelectedWorkToEdit(workgoingon);
    setSelectedInquiryToEdit(totalInquiry)
    setSelectedEarningToEdit(earning);
  };
  const handleCloseEdit = () => setIsOpenEdit(false);

  //

  // work going on form value change handler

  const [workValue, setWorkValue] = useState(0);

  useEffect(() => {
    if (selectedWorkToEdit != null) {
      setWorkValue(Number(selectedWorkToEdit)); // Make sure it's a number
    }
  }, [selectedWorkToEdit]);

  const handleWorkValue = (e) => {
    setWorkValue(Number(e.target.value)); // Convert input string to number
  };

  const incrementWorkByOne = () => {
    setWorkValue((prevState) => prevState + 1);
  };

  const decrementWorkByOne = () => {
    setWorkValue((prevState) => prevState - 1);
  };

  const handleUpdateWork = (id,work) => {
    // console.log(id,work)
    updateAffiliateWork(id,{workgoingon: work})
  }

  //

    // Total Inquires form value change handler

    const [inquireValue, setInquireValue] = useState(0);

    useEffect(() => {
      if (selectedInquiryToEdit != null) {
        setInquireValue(Number(selectedInquiryToEdit)); // Make sure it's a number
      }
    }, [selectedWorkToEdit]);
  
    const handleinquireValue = (e) => {
      setInquireValue(Number(e.target.value)); // Convert input string to number
    };
  
    const incrementinquireByOne = () => {
      setInquireValue((prevState) => prevState + 1);
    };
  
    const decrementinquireByOne = () => {
      setInquireValue((prevState) => prevState - 1);
    };
  
    const handleUpdateinquire = (id,inquire) => {
      // console.log(id,inquire)
      updateAffiliateInquiries(id,{totalInquiry: inquireValue})
    }
  
    //

  // Earning value change handler

  const [earning, setEarning] = useState(0);

  useEffect(() => {
    if (selectedEarningToEdit != null) {
      setEarning(Number(selectedEarningToEdit)); // Make sure it's a number
    }
  }, [selectedEarningToEdit]);

  const handleEarnValue = (e) => {
    setEarning(Number(e.target.value)); // Convert input string to number
  };

  const incrementEarnByOne = () => {
    setEarning((prevState) => prevState + 1);
  };

  const decrementEarnByOne = () => {
    setEarning((prevState) => prevState - 1);
  };

  const handleUpdateEarning = (id,earn) => {
    // console.log(id,earn)
    updateAffiliatetotalEarning(id,{totalEarning: earn})
  }

  //

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* heading  */}
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900 mt-5">
            Affailate Users
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the Affailate in your account.
          </p>
        </div>
      </div>
      {/* Table  */}
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
                  >
                    id
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Mobile
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Website
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Youtube
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Instagram
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Affiliate Code
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Total Clicks
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Total Inquires
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Work Going
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Earning
                  </th>
                  <th
                    scope="col"
                    className="relative py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8"
                  >
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {people?.map((person) => (
                  <tr key={person.email}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                      {person.id}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.email}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.mobile}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.website}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.youtube}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.instagram}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.affiliateCode}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.totalClicks}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.totalInquiry}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.workgoingon}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.totalMoney}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                      <p
                        onClick={() =>
                          handleOpenEdit(
                            person.id,
                            person.name,
                            person.email,
                            person.workgoingon,
                            person.totalInquiry,
                            person.totalMoney
                          )
                        }
                        className="text-[#e62e56] hover:text-[#a51937e1] cursor-pointer"
                      >
                        Edit
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal Edit Work , inquire and Earning */}
      <div>
        
        <Modal isOpen={isOpenEdit} onClose={handleCloseEdit}>
          <h3 className=" text-lg font-bold">
            {selectedUser} Work Going On, Inquire and Earning Edit Form
          </h3>

          <div className=" flex gap-5">

              {/* work going on  */}
          <div className=" flex flex-col justify-between items-center gap-4 border-b-2 pb-4 mt-4">
            <label htmlFor="Work">Work Going On</label>
            <div className="flex gap-4">
              <input
                onChange={handleWorkValue}
                value={workValue}
                className=" outline-none border-2 border-[#e62e56] px-2 py-2"
                id="work"
                name="work"
                type="text"
              />
              <div className=" flex flex-col gap-1">
                <button
                  onClick={incrementWorkByOne}
                  className="border-2 border-[#e62e56] text-[#e62e56] px-1"
                >
                  +
                </button>
                <button
                  onClick={decrementWorkByOne}
                  className="border-2 border-[#e62e56] text-[#e62e56] px-1"
                >
                  -
                </button>
              </div>
            </div>
            <button onClick={()=>handleUpdateWork(selectedIdToEdit,workValue)} className=" border-2 border-[#e62e56] px-1 py-1 text-[#e62e56] cursor-pointer mt-2">
              Update Work
            </button>
          </div>

          {/* Total Enquires  */}
          <div className=" flex flex-col justify-between items-center gap-4 border-b-2 border-l-2 pb-4 mt-4 pl-2">
            <label htmlFor="Work">Total Inquire</label>
            <div className="flex gap-4">
              <input
                onChange={handleinquireValue}
                value={inquireValue}
                className=" outline-none border-2 border-[#e62e56] px-2 py-2"
                id="work"
                name="work"
                type="text"
              />
              <div className=" flex flex-col gap-1">
                <button
                  onClick={incrementinquireByOne}
                  className="border-2 border-[#e62e56] text-[#e62e56] px-1"
                >
                  +
                </button>
                <button
                  onClick={decrementinquireByOne}
                  className="border-2 border-[#e62e56] text-[#e62e56] px-1"
                >
                  -
                </button>
              </div>
            </div>
            <button onClick={()=>handleUpdateinquire(selectedIdToEdit,inquireValue)} className=" border-2 border-[#e62e56] px-1 py-1 text-[#e62e56] cursor-pointer mt-2">
              Update Inquire
            </button>
          </div>

          </div>

          {/* Earning  */}
          <div className=" flex flex-col justify-between items-center gap-4 pb-4 mt-4">
            <label htmlFor="earn">Earning</label>
            <div className="flex gap-4">
            <input
              onChange={handleEarnValue}
              value={earning}
              className=" outline-none border-2 border-[#e62e56] px-2 py-2"
              id="earn"
              name="earn"
              type="text"
            />
            <div className=" flex flex-col gap-1">
              <button
                onClick={incrementEarnByOne}
                className="border-2 border-[#e62e56] text-[#e62e56] px-1"
              >
                +
              </button>
              <button
                onClick={decrementEarnByOne}
                className="border-2 border-[#e62e56] text-[#e62e56] px-1"
              >
                -
              </button>
            </div>
            </div>
            <button onClick={()=>handleUpdateEarning(selectedIdToEdit,earning)} className=" border-2 border-[#e62e56] px-1 py-1 text-[#e62e56] cursor-pointer mt-2">
              Update Earning
            </button>
          </div>

          {/* reset password  */}
          <div className=" flex flex-col justify-center items-center border-t-2 border-[#e62e56]">
            <p>Reset The {selectedUser} Password</p>
            <input ref={passwordResetRef} type="text" placeholder="Please Enter Your Admin Password" className=" w-64 outline-none border-2 border-[#e62e56]" />
            <button onClick={handlePasswordReset} className="  w-64 mt-1 border-2 border-[#e62e56] text-[#e62e56] px-1">Reset Password</button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default AffaliateList;
