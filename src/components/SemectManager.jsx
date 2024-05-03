import React, { useEffect, useState } from 'react'
import useJob from '../hooks/useJob';


const names = ['Kush', 'Suraj']

const SemectManager = ({jobid, currentManager}) => {

  const { ChangeJobManager } = useJob()

  const [showForm, setShowForm] = useState(false)

  // Initialize with a default or an empty value to handle cases where currentManager is not immediately available
  const [selectedName, setSelectedName] = useState('');
   

    const handleChange = async (e) => {
        setSelectedName(e.target.value)

        
        const resp = await ChangeJobManager({ jobId: jobid, managerName: selectedName });

        console.log(resp)
        if(resp.id){
          alert(`selected job query id ${jobid} selected manager ${selectedName}`)
        }

        setSelectedName('')
        setShowForm(false)
        
    }

  return (
    <div>
      <button onClick={()=> setShowForm(true)} className=' border-2 border-[#e62e56] px-2 py-1 rounded-lg text-[#e62e56]'>{currentManager}</button>
      {showForm && (
        <div>
          <label htmlFor="manager"></label>
          <input value={selectedName} onChange={(e)=> setSelectedName(e.target.value)} id='manager' name='manager' type="text" placeholder='Please enter new Manager name' className=' border-2 mt-1' />
          <div className=' flex gap-4 mt-1'>
            <button onClick={handleChange} className=' border-2 border-green-200 rounded-md py-1 px-1'>Update</button>
            <button onClick={()=> setShowForm(false)} className=' border-2 border-red-200 rounded-md py-1 px-1'>Cancel</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SemectManager