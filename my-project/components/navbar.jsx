import React from 'react';

const Navbar = () => {
    return (
        <div className='fixed w-screen h-16 bgPink flex flex-row items-center place-content-between'>
            <div className='flex flex-row justify-center items-center p-4'>
                <img className='w-7 h-7 cursor-pointer' src="/image/navIcon.png" alt="" srcset="" />
                <h1 className='text-white font-cookie font-semibold text-xl px-4'>App Name</h1>
            </div>
            <img className='w-12 h-12 mr-4 rounded-full border border-4' src="/image/nour.jpg" alt="" srcset="" />
        </div>
    );
}

export default Navbar;