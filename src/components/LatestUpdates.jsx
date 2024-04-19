import React, { useState } from 'react'

const updtaes = [
    {id: 1, name: 'defencejobs.in'},
    {id:2, name: 'superJobs.nz'}
]

const LatestUpdates = () => {

    const [latestText,setLatestText] = useState('')

    const handleTextChange = (e) => {
        setLatestText(e.target.value)
    }

    const handleAddLatest = () => {
        console.log(latestText)
    }

    const handleRemove = (id) => {
        console.log(id)
    }

  return (
    <div className=' font-serif px-4'>
        <div className="sm:flex-auto">
              <h1 className="text-base font-semibold leading-6 text-gray-900 mt-5">Latest Updates</h1>
              <p className="mt-2 text-sm text-gray-700">
                A list of all the Latest Updates in your account.
              </p>
            </div>
        {/* form to update latest updates  */}
        <div className=' mt-5 flex justify-center items-center gap-4'>
            <label htmlFor="update">Add New Updates</label>
            <input value={latestText} onChange={handleTextChange} className=' outline-none border-2 border-[#e62e56] px-1 py-1' id='update' name='update' type="text" />
            <button onClick={handleAddLatest} className=' border-2 border-[#e62e56] px-2 py-1 text-[#e62e56] cursor-pointer'>Add</button>
        </div>

        {/* list of existing latest updates  */}
        <div className=' mt-10'>
        {updtaes?.map((upp) => (
            <div key={upp.id} className=' flex justify-between items-center gap-2 mt-2 mx-5'>
                <p>{upp.name}</p>
                <p onClick={()=>handleRemove(upp.id)} className=' text-red-600 cursor-pointer'>Remove</p>
            </div>
        ))}
        </div>
    </div>
  )
}

export default LatestUpdates