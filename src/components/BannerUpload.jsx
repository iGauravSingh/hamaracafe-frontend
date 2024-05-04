import React, { useState } from 'react'

import { v4 as uuidv4 } from 'uuid';
import useBanner from '../hooks/useBanner';

const BannerUpload = () => {

  const { addBannerImage } = useBanner()

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
    formData.append("buttonId", id)
      // console.log(formData)
      const repp = await addBannerImage(formData)
      setFile(null)
      if(repp?.success){
        alert('Image uploaded succefully')
      }
    }
    
  }

  return (
    <div className='px-4'>
        <div className="sm:flex-auto">
              <h1 className="text-base font-semibold leading-6 text-gray-900 mt-5">Banner Upload</h1>
              <p className="mt-2 text-sm text-gray-700">
                Upload your banners here by clicking on that banner button.
              </p>
            </div>
        {/* banner  */}
        <div>
          <ul className=" flex flex-col justify-center gap-2 mt-6 ">
            {/* Banner 1  */}
            <div className=' flex  gap-4'>
            <input type='file' onChange={handlefilechange} accept="image/*" className=" px-2 py-2 bg-green-700 text-white cursor-pointer" />
            <button onClick={()=>handleUpload(1)} className=" px-2 py-2 bg-green-700 text-white cursor-pointer">Upload Banner 1</button>
            </div>
            
            {/* Banner 2  */}
            {/* <li className=" px-2 py-2 bg-blue-700 text-white cursor-pointer">Upload Banner - 2</li> */}
            <div className=' flex gap-4'>
            <input type='file' onChange={handlefilechange} accept="image/*" className=" px-2 py-2 bg-blue-700 text-white cursor-pointer" />
            <button onClick={()=>handleUpload(2)} className=" px-2 py-2 bg-blue-700 text-white cursor-pointer">Upload Banner 2</button>
            </div>

            {/* Banner 3  */}
            {/* <li className=" px-2 py-2 bg-red-700 text-white cursor-pointer">Upload Banner - 3</li> */}
            <div className=' flex gap-4'>
            <input type='file' onChange={handlefilechange} accept="image/*" className=" px-2 py-2 bg-red-700 text-white cursor-pointer" />
            <button onClick={()=>handleUpload(3)} className=" px-2 py-2 bg-red-700 text-white cursor-pointer">Upload Banner 3</button>
            </div>

            {/* Banner 4  */}
            {/* <li className=" px-2 py-2 bg-yellow-400 text-white cursor-pointer">Upload Banner - 4</li> */}
            <div className=' flex gap-4'>
            <input type='file' onChange={handlefilechange} accept="image/*" className=" px-2 py-2 bg-yellow-400 text-white cursor-pointer" />
            <button onClick={()=>handleUpload(4)} className=" px-2 py-2 bg-yellow-400 text-white cursor-pointer">Upload Banner 4</button>
            </div>
          </ul>
        </div>
    </div>
  )
}

export default BannerUpload