"use client"
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react'

interface NavbarItemProps{
 title:string;
 param:string;
}

const NavbarItem:React.FC<NavbarItemProps> = ({title,param}) => {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre')
  return (
    <Link className={` hover:text-amber-600 font-extrabold text-lg ${genre===param ? `underline decoration-amber-500 decoration-4 underline-offset-8 rounded-lg`:''}`} href={`/?genre=${param}`}>
      {title}
    </Link>
  )
}

export default NavbarItem
