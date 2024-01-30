'use client';
import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className=' flex flex-row gap-4 w-full bg-orange-400 h-auto'>
        <Image 
        src='https://cdn.doordash.com/static/img/favicon@2x.ico' alt='logo'  
         width={60}
        height={10}
        />

        <div className='flex flex-row items-center justify-center '>
          <span className='font-bold text-black text-center'>DOORDASH</span>
        </div>
        <div>
          <div>
            <button>SignIn</button>
          </div>
          <div>
            <button>Sign Up</button>
          </div>
        </div>
    </div>
  )
}

export default Navbar;
