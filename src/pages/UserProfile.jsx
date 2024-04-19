import React, { useState } from 'react'
import Button from '../components/Button'

const UserProfile = () => {

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
            <img className=' w-12 h-12' src="https://t4.ftcdn.net/jpg/00/64/67/27/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg" alt="default profile" />
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
            <p className=''>name: uerName</p>
            <p>Affailate code: code3456</p>
            <p>linked media account</p>
        </div>
        
    </div>
  )
}

export default UserProfile