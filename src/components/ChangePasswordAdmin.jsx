import React, { useState } from 'react'
import useAdmin from '../hooks/useAdmin'

const ChangePasswordAdmin = () => {

  const [pass, setPass] = useState('')
  const [conPass, setConPass] = useState('')

  const { changePassword } = useAdmin()

  const handlePassChange = (e) => {
    setPass(e.target.value)
  }

  const handleConPassChange = (e) => {
    setConPass(e.target.value)
  }

  const handleSubmit = () => {
    if(pass && conPass && pass !== conPass){
      alert('Password and Cofirm Password are different')
      return
    } else if(pass === '' || conPass === ''){
      alert('Password feild can not be empty')
      return
    }
    changePassword({password: pass})
  }

  return (
    <div className=' px-6'>
        <div className="sm:flex-auto">
              <h1 className="text-base font-semibold leading-6 text-gray-900 mt-5">Change Admin Password</h1>
              <p className="mt-2 text-sm text-gray-700">
                Change Your Admin Account Password Here.
              </p>
            </div>
        <div className='flex items-center mt-7 '>
        <div className=' flex flex-col w-[300px]'>
                
                <label htmlFor="pass">New Password</label>
                <input value={pass} onChange={handlePassChange} className=' border-2 border-[#e62e56] outline-none' id='pass' name='pass' type="text" />
                <label htmlFor="conpass">Confirm Password</label>
                <input value={conPass} onChange={handleConPassChange} className=' border-2 border-[#e62e56] outline-none' id='conpass' name='conpass' type="text" />
                <button onClick={handleSubmit} className=' border-2 border-[#e62e56] px-1 py-1 text-[#e62e56] cursor-pointer mt-2'>Submit</button>
                </div>
    </div>
    </div>
  )
}

export default ChangePasswordAdmin