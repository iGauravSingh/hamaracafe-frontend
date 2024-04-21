import React, { useState } from 'react'


const names = ['Kush', 'Suraj']

const SemectManager = ({jobid}) => {

    const [selectedName, setSelectedName] = useState(names[0]);

    const handleChange = (e) => {
        setSelectedName(e.target.value)

        // send request from haere to change manager
        alert(`selected job query id ${jobid} selected manager ${selectedName}`)
    }

  return (
    <select
              value={selectedName}
              onChange={handleChange}
              className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#e62e56] focus:border-[#e62e56] sm:text-sm"
            >
              {names.map(name => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
  )
}

export default SemectManager