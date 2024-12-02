import React from 'react'
import { FaLuggageCart, FaSearch, FaUser, FaWhatsapp } from "react-icons/fa";

function Header() {
  return (
    <div>
        <header>
        <div className="w-full flex items-center justify-between  px-4 py-2 shadow-md">
            <div className="w-1/3 flex items-center justify-around">
                <img className='h-12' src="	https://img.thecdn.in/278804/cat/284549_cat-1730035020233.jpg?height=200&format=webp" alt="" />
                <div className="">
                    <h1 className='font-bold t'>HOME GOING SERVICE</h1>
                    <p className='text-sm px-1 -m-1'>All documentary solutions</p>
                </div>
            </div>
            <div className="w-1/2 flex justify-center ">
                <div className="flex justify-center items-center border rounded-xl px-1 py-1 w-[90%]">
                <input type="text"
                className='outline-none w-full'
                  placeholder='Search '
                />
                <FaSearch />
                </div>
                
            </div>
            <div className="w-1/3 flex gap-6 justify-center">
            <FaUser className='text-2xl' />
            <FaLuggageCart className='text-2xl'/>
            <FaWhatsapp className='text-2xl' />
            </div>
        </div>
        
      </header>
    </div>
  )
}

export default Header