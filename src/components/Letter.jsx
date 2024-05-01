import React, { useState } from 'react'

import { v4 as uuidv4 } from 'uuid';
import useBanner from '../hooks/useBanner';
import useLetter from '../hooks/useLetter';

const Letter = () => {

  const { addLetterImage } = useLetter()

  const [file, setFile] = useState(null);

  const handlefilechange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async (id) => {
    if(!file){
      alert('Please choose some file')
    } else {
      const imagename = uuidv4()
    const formData = new FormData()
    formData.append("file", file)
    formData.append("imagename",imagename)
    formData.append("letterId", 1)
      console.log(formData)
      const rep = await addLetterImage(formData)
      if(rep.success) {
        setFile(null)
        alert('Letter Image Uploaded Successfully')
      }
      
    }
    
  }

  return (
    <div className='px-4'>
        <div className="sm:flex-auto">
              <h1 className="text-base font-semibold leading-6 text-gray-900 mt-5">Franchise Letter Upload</h1>
              <p className="mt-2 text-sm text-gray-700">
                Upload your Franchise Letter here.
              </p>
            </div>
        {/* banner  */}
        <div>
          <ul className=" flex flex-col justify-center gap-2 mt-6 ">
            {/* Banner 1  */}
            <div className=' flex  gap-4'>
            <input type='file' onChange={handlefilechange} accept="image/*" className=" px-2 py-2 bg-[#e62e56] text-white cursor-pointer" />
            <button onClick={()=>handleUpload(1)} className=" px-2 py-2 bg-[#e62e56] text-white cursor-pointer">Upload Frenchise Letter Image</button>
            </div>
            
            
          </ul>
        </div>
    </div>
  )
}

export default Letter