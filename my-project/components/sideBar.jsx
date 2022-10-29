import Link from 'next/link';
import React from 'react';

const SideBar = () => {
    return (
        <div className='w-screen h-full flex flex-col items-start overflow-hidden z-50 absolute sm:relative sm:w-80 bgPink font-cookie font-medium text-md text-white pl-10 pt-32'>
            <Link href={"/getInTouch"} className='cursor-pointer py-1'>Find Your Partner</Link>
            <button className='cursor-pointer py-1'>Donate</button>
            <button className='cursor-pointer py-1'>Help</button>
            <button className='cursor-pointer py-1'>LogOut</button>
        </div>
    );
}

export default SideBar;