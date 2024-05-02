import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import { format } from 'date-fns';
import useAdminAffilateList from "../hooks/useAdminAffiliateList";
import BreadcrumbComponent from "./BreadcrumbComponent";


const FranchiseList = () => {
  const { franchiseUsers, isLoading } = useSelector(
    (state) => state.franchiseUsers.value
  );

  const people = franchiseUsers;

  // State to control whether to show the table or breadcrumb component
  const [showTable, setShowTable] = useState(true);
  const [passId, setPassId] = useState(null)
  const [passName, setPassName] = useState('')

  // Event handler to switch to the breadcrumb component view
  const handleOpenBreadcrumb = (id, name) => {
    setPassId(id)
    setPassName(name)
    setShowTable(false);
  };

  // Event handler to switch back to the table view
  const handleGoBack = () => {
    setShowTable(true);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'MMMM dd, yyyy hh:mm a');
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
    {/* heading  */}
    <div className="sm:flex sm:items-center">
      <div className="sm:flex-auto">
        <h1 className="text-base font-semibold leading-6 text-gray-900 mt-5">
          Franchise Users
        </h1>
        <p className="mt-2 text-sm text-gray-700">
          A list of all the Franchise in your account.
        </p>
      </div>
    </div>

    {/* Conditionally render either the table or breadcrumb component */}
    {showTable ? (
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
                    Joining Date
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
                    Mobile
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    About
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
                  <tr key={person.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                      {person.id}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {formatDate(person.createdAt)}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.mobile}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.about}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                      <p
                        onClick={()=>handleOpenBreadcrumb(person.id,person.name)} // Trigger breadcrumb visibility
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
    ) : (
      <BreadcrumbComponent id={passId} onBack={handleGoBack} name={passName} />
    )}
  </div>
  );
};

export default FranchiseList;
