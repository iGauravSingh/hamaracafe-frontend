import React from 'react'
import { useSelector } from 'react-redux'
import { format } from 'date-fns';
import useWithdraw from '../hooks/useWithdraw';

// const people = [
//     { id:1, name: 'Lindsay Walton', email: 'lindsay.walton@example.com', mobile: '987654345', widthdrawRequest: 500 },
//     { id:2, name: 'Lindsay Walton', email: 'lindsay1.walton@example.com', mobile: '987654345', widthdrawRequest: 500 },
//     // More people...
//   ]

const WithdrawRequest = () => {

  const { withdraw, isLoading } = useSelector((state) => state.withdraw.value )

  const { deleteWithdrawQuery } = useWithdraw()

  const people = withdraw

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'MMMM dd, yyyy hh:mm a');
  };

    const handleQueryRemove =(id) => {
        // console.log(id)
        deleteWithdrawQuery(id)
      }
      
        return (
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                  <h1 className="text-base font-semibold leading-6 text-gray-900 mt-5">Help and Support Queries</h1>
                  <p className="mt-2 text-sm text-gray-700">
                    A list of all the Withdraw Queries in your account.
                  </p>
                </div>
                
              </div>
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
                          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Request Time
                          </th>
                          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Name
                          </th>
                          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Email
                          </th>
                          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Mobile
                          </th>
                          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          widthdrawRequest
                          </th>
                          <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8">
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
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{formatDate(person.createdAt)}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.name}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.mobile}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.withdrawAmount}</td>
                            
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                              <p onClick={()=>handleQueryRemove(person.id)} className="text-[#e62e56] hover:text-[#a51937e1] cursor-pointer">
                                Remove
                              </p>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
        )
}

export default WithdrawRequest