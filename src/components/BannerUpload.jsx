import React from 'react'

const BannerUpload = () => {
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
          <ul className=" flex justify-center gap-2 mt-6 ">
            <li className=" px-2 py-2 bg-green-700 text-white cursor-pointer">Upload Banner - 1</li>
            <li className=" px-2 py-2 bg-blue-700 text-white cursor-pointer">Upload Banner - 2</li>
            <li className=" px-2 py-2 bg-red-700 text-white cursor-pointer">Upload Banner - 3</li>
            <li className=" px-2 py-2 bg-yellow-400 text-white cursor-pointer">Upload Banner - 4</li>
          </ul>
        </div>
    </div>
  )
}

export default BannerUpload