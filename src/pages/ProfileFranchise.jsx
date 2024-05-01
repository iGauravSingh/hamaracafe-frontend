import React, { useState } from 'react'
import Button from '../components/Button'
import { v4 as uuidv4 } from 'uuid';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const ProfileFranchise = ({userid,imageUrl, userName,about}) => {

    const navigate = useNavigate()
    const { imageUpload, logout, changePassword } = useAuth()
    const [pass, setPass] = useState(false)
    const [file, setFile] = useState(null);

    const [passText, setPassText] = useState('')
    const [conPassText, setConPassText] = useState('')

    

    const handleImageChange  = () => {

    }

    const handlePassChangeForm =() => {
        setPass(true)
    }

    const handleCancelPassChangeForm =() => {
        setPass(false)
    }

    const handlepasswordSubmit  =() => {
      if(passText || conPassText){
      if(passText === conPassText){
        changePassword({password: passText})
      } else {
        alert('Password And Confirm Password Value Should Be Same.')
      }
    } else {
      alert('password feild cannot be empty')
    }
    }


    // Image Change

    

  const handlefilechange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if(!file){
      alert('Please choose some file')
    } else {
        console.log('userid',userid)
      const imagename = uuidv4()
    const formData = new FormData()
    formData.append("file", file)
    formData.append("imagename",imagename)
    formData.append("userid",userid)
      console.log(formData)
      const imgup = await imageUpload(formData)
      console.log(imgup)
      setFile(null)
      if(imgup.success){
        alert('profile picture updated please login again to see change')
      }
    }
    
  }

    //


  return (
    <div>
        {/* image  */}
        <div className=' flex items-center gap-8 mt-2 font-serif'>
            <div>
            <img className=' w-12 h-12' src={imageUrl} alt="default profile" />
            <input type='file' onChange={handlefilechange} accept="image/*" className=" w-[14rem] px-2 py-2 bg-[#e62e56] text-white cursor-pointer mt-2" />
            </div>
            <p onClick={handleUpload} className=' border-2 border-[#e62e56] px-2 py-2 text-[#e62e56] cursor-pointer'>Change Image</p>
            {/* {!pass && <p onClick={handlePassChangeForm} className=' border-2 border-[#e62e56] px-2 py-2 text-[#e62e56] cursor-pointer'>Change Password</p>}
            {pass && (
                <div className=' flex flex-col'>
                <p onClick={handleCancelPassChangeForm} className=' text-green-800 text-end cursor-pointer'>cancel</p>
                <label htmlFor="pass">New Password</label>
                <input value={passText} onChange={(e) => setPassText(e.target.value)} className=' border-2 border-[#e62e56] outline-none' id='pass' name='pass' type="text" required />
                <label htmlFor="conpass">Confirm Password</label>
                <input value={conPassText} onChange={(e) => setConPassText(e.target.value)} className=' border-2 border-[#e62e56] outline-none' id='conpass' name='conpass' type="text" required />
                <button onClick={handlepasswordSubmit} className=' border-2 border-[#e62e56] px-1 py-1 text-[#e62e56] cursor-pointer mt-2'>Submit</button>
                </div>
            )} */}
        </div>

        {/* user detail  */}
        <div className=' mt-4 flex flex-col gap-2'>
            <p className=''>name: {userName}</p>
            <p>About: {about}</p>
            
        </div>
        
    </div>
  )
}

export default ProfileFranchise