import React from 'react'
import Image from 'next/image'
import { Socials } from '@/constants/index'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20'>
        <div className='flex flex-row gap-3 items-center'>
            <div className='relative'>
                <Image 
                src="/assets/letter-k.png"
                alt="logo"
                width={40}
                height={40}
                className="w-full h-full object-contain rounded-full"
                />
            </div>
            <h1 className='text-white text-[25px] font-semibold'>Full-Stack Engineer</h1>
        </div>

        <div className='flex flex-row gap-5 mb-2'>
            {Socials.map((social) => (
                <Link key={social.name} href={social.href}>
                <Image 
                    key={social.name}
                    src={social.src}
                    alt={social.name}
                    width={28}
                    height={28}
                />
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Navbar