import React from 'react'
import MenuItems from './MenuItems'
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DarkModeToggle from './DarkModeToggle';


const Header = () => {
  return (
    <div className='flex max-w-6xl p-4 mx-auto justify-between'>
        <div className='flex gap-8'>
        <MenuItems Icon={AiFillHome} address='/' text='Home'/>
        <MenuItems Icon={BsFillInfoCircleFill} address='/about' text='About'/>
        </div>
        
        <div className='flex items-center gap-2'>
        <DarkModeToggle/>
            <p className='px-2 py-1 text-2xl font-bold rounded-lg bg-amber-500'>IMDb</p>
            <p>Clone</p>
        </div>
    </div>
  )
}

export default Header
