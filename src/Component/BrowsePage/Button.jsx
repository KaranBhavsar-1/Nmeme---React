import React from 'react'

function Button({text , change,setMemeType }) {
  return (
    <div>
      <button className='ml-2 mt-2 bg-blue-800 rounded px-2 py-2 font-medium arial text-black text-xl'
      onClick={()=>{
        // localStorage.setItem("MemeType", `/${change}`)
        // console.log(localStorage.getItem("MemeType"));
        setMemeType(`/${change}`);
      }
      }>{text}</button>
    </div>
  )
}

export default Button
