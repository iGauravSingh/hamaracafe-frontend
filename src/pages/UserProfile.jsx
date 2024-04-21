import React, { useState } from 'react'
import Button from '../components/Button'

const UserProfile = ({imageUrl, userName, affiliateCode, website, youtube, instagram}) => {

    const [pass, setPass] = useState(false)

    const handleImageChange  = () => {

    }

    const handlePassChangeForm =() => {
        setPass(true)
    }

    const handleCancelPassChangeForm =() => {
        setPass(false)
    }


  return (
    <div>
        {/* image  */}
        <div className=' flex items-center gap-8 mt-2 font-serif'>
            <img className=' w-12 h-12' src={imageUrl} alt="default profile" />
            <p className=' border-2 border-[#e62e56] px-2 py-2 text-[#e62e56] cursor-pointer'>Change Image</p>
            {!pass && <p onClick={handlePassChangeForm} className=' border-2 border-[#e62e56] px-2 py-2 text-[#e62e56] cursor-pointer'>Change Password</p>}
            {pass && (
                <div className=' flex flex-col'>
                <p onClick={handleCancelPassChangeForm} className=' text-green-800 text-end cursor-pointer'>cancel</p>
                <label htmlFor="pass">New Password</label>
                <input className=' border-2 border-[#e62e56] outline-none' id='pass' name='pass' type="text" />
                <label htmlFor="conpass">Confirm Password</label>
                <input className=' border-2 border-[#e62e56] outline-none' id='conpass' name='conpass' type="text" />
                <button className=' border-2 border-[#e62e56] px-1 py-1 text-[#e62e56] cursor-pointer mt-2'>Submit</button>
                </div>
            )}
        </div>

        {/* user detail  */}
        <div className=' mt-4 flex flex-col gap-2'>
            <p className=''>name: {userName}</p>
            <p>Affailate code: {affiliateCode}</p>
            <p>linked media account</p>
            <ul>
                <li>Youtube: {youtube}</li>
                <li>Instagram: {instagram}</li>
                <li>Website: {website}</li>
            </ul>
        </div>
        
    </div>
  )
}

export default UserProfile