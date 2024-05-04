import React, { useEffect, useState } from "react";
import useAdminFranchiseWork from "../hooks/useAdminFranchiseWork";
import { useSelector } from "react-redux";
import { format } from 'date-fns';

const BreadcrumbComponent = ({ onBack, id, name }) => {

  // franchisework
  // const { job, isLoading } = useSelector((state) => state.job.value)
  const { franchisework,isLoading } = useSelector((state) => state.franchisework.value)


  const [text, setText] = useState('')

  const { fetchWorkList,addWorkUpdates,deleteWorkUpdates,updateWork } = useAdminFranchiseWork()

  useEffect(() => {
    fetchWorkList(id)
  },[id])

  const handleSubmit = () => {
    if(!text){
      alert("Input Feild Should Not Be Empty")
      return
    }
    // console.log({franchiseName: name,franchiseId: id,detail: text})
    addWorkUpdates({franchiseName: name,franchiseId: id,detail: text})
  }

  const handleDelete = (workid) => {
    deleteWorkUpdates(workid)
  }

  const handleComplete =(workid) => {
    // console.log(workid)
    updateWork({workid: workid,completestatus: "yes"})
  }


  const handleClick = () => {
    onBack();
  };

  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'MMMM dd, yyyy hh:mm a');
  };

  return (
    <div className=" bg-red-100 min-h-[500px]">
      <p
        onClick={handleClick}
        className=" text-lg mt-2 mb-2 text-red-600 cursor-pointer"
      >
        Go Back
      </p>

      <div className=" mt-5 mb-4">
        <h1 className=" text-center">All The Work Details of <span className=" font-bold text-lg">{name}</span>  </h1>
      </div>

      <div className=" flex gap-5 items-center">
        {/* Add Work  */}
        <label htmlFor="work">Add New Work</label>
        <input value={text} onChange={(e)=> setText(e.target.value)} className=" px-2 py-2" id="work" name="work" type="text" />
        <button onClick={handleSubmit} className=" px-4 py-2 border-2 border-red-500 text-red-600">Add</button>
      </div>

      {/* list all work  */}
      <div>
        <div className="container mx-auto mt-10">
          <table className="min-w-full table-auto">
            <thead className="bg-[#e62e56] text-white">
              <tr>
                <th className="px-6 py-3 text-left">Date</th>
                <th className="px-6 py-3 text-left">Discription</th>
                <th className="px-6 py-3 text-left">Complete or Not</th>
                <th className="px-6 py-3 text-left">Change Status</th>
                <th className="px-6 py-3 text-left">Remove</th>
              </tr>
            </thead>
            <tbody>
              {franchisework?.map((wok) => (
                <tr key={wok.id} className="border-b bg-white hover:bg-gray-100">
                <td className="px-6 py-4">{formatDate(wok.createdAt)}</td>
                <td className="px-6 py-4">
                  {wok.detail}
                </td>
                <td className="px-6 py-4">{wok.completestatus}</td>
                {wok.completestatus==='no' ? 
                <td onClick={()=>handleComplete(wok.id)} className="px-6 py-4"><button className=" px-2 py-2 border-2 border-red-500 text-red-600">Complete</button></td>
                 : 
                 <td className="px-6 py-4"><button className=" px-2 py-2 border-2 border-green-500 text-green-600">Completed</button></td> }

                <td onClick={() => handleDelete(wok.id)} className="px-6 py-4 text-red-700 cursor-pointer">Remove</td>
              </tr>
              ))}
              
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbComponent;
