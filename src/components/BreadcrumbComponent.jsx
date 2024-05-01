import React from "react";

const BreadcrumbComponent = ({ onBack, id, name }) => {
  const handleClick = () => {
    onBack();
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
        <input className=" px-2 py-2" id="work" name="work" type="text" />
        <button className=" px-4 py-2 border-2 border-red-500 text-red-600">Add</button>
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
              <tr className="border-b bg-white hover:bg-gray-100">
                <td className="px-6 py-4">2024-04-30</td>
                <td className="px-6 py-4">
                  <a href="#" class="text-blue-500 hover:text-blue-800">
                    View
                  </a>
                </td>
                <td className="px-6 py-4">Yes</td>
                <td className="px-6 py-4"><button className=" px-2 py-2 border-2 border-red-500 text-red-600">Complete</button></td>
                <td className="px-6 py-4 text-red-700 cursor-pointer">Remove</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbComponent;
