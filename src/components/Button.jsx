import React from 'react'



const Button = ({buttonText,onnClick}) => {

    const handleClick =() => {
        onnClick()
    }


  return (
    <div>
        <button onClick={handleClick} className=' px-4 py-2 bg-[#e62e56] text-white rounded-lg'>{buttonText}</button>
    </div>
  )
}

export default Button