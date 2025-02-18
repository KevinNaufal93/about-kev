"use client"

import { NavLinks } from '@/constants/index';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Navigation = () => {
    const [isRouting, setIsRouting] = useState(false);
    const path = usePathname();
    const [prevPath, setPrevPath] = useState("/");

    useEffect(() =>{
        if(prevPath !== path) {
            setIsRouting(true)
        }
    }, [path, prevPath])

    useEffect(() => {
      if(isRouting) {
        setPrevPath(path);
        const timeout = setTimeout(() => {
            setIsRouting(false)
        }, 1200)
        return () => {clearTimeout(timeout)}
      }
    }, [isRouting])
    

  return ( 
    <div 
    style={{left: "20%"}}
    className='absolute z-[50] -bottom-20 w-[50%] md:w-[20%] max-h-[150px] rounded-full flex justify-between items-center border border-white py-7'>
        {NavLinks.map((nav) => ( 
            <Link
            key={nav.name}
            href={nav.link}
            className="mb-16 pl-4 min-w-[20%]"
            >
            <nav.icon className={`w-[24px] h-[24px] ${path === nav.name ? 'text-purple-800' : 'text-white' }`}/>
            </Link>
        ))}
    </div>
  )
}

export default Navigation