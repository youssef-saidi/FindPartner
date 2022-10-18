import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeApparence } from '../app/slices/sideSlice';

const Navbar = () => {
    const dispatch = useDispatch()
    const [apparence, setapparence] = useState(true);
    return (
        <div className='sticky top-0 w-screen h-16 bgPink flex flex-row items-center place-content-between'>
            <div className='flex flex-row justify-center items-center p-4'>
                <img onClick={() => { dispatch(changeApparence()) }} className='w-7 h-7 cursor-pointer' src="/image/navIcon.png" alt="" srcset="" />
                <h1 className='text-white font-cookie font-semibold text-xl px-4'>App Name</h1>
            </div>
            <div className='relative'>
                <img className='cursor-pointer w-12 h-12 mr-4 rounded-full border border-4' src="/image/nour.jpg" alt="" srcset="" />
                <div className='absolute h-60 w-16 bg-red-700 z-50 top-0 right-0'>

                </div>
            </div>
        </div>
    );
}

export default Navbar;