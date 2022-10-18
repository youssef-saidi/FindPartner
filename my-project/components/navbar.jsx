import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeApparence } from '../app/slices/sideSlice';

const Navbar = () => {
    const dispatch = useDispatch()
    const [apparence, setapparence] = useState(false);
    return (
        <div className='sticky top-0 w-screen h-16 bgPink flex flex-row items-center place-content-between z-40'>
            <div className='flex flex-row justify-center items-center p-4'>
                <img onClick={() => { dispatch(changeApparence()) }} className='w-7 h-7 cursor-pointer' src="/image/navIcon.png" alt="" srcset="" />
                <h1 className='text-white font-cookie font-semibold text-xl px-4'>App Name</h1>
            </div>
            <div className='relative z-40'>
                <img onClick={()=>{setapparence(!apparence)}} className='active:scale-90 hover:opacity-90 cursor-pointer w-12 h-12 mr-4 rounded-full border border-2' src="/image/nour.jpg" alt="" srcset="" />
                {apparence&&
                <div className='rounded	absolute w-64 bg-white z-40 top-12 right-4 border-2 border-gray-600'>
                    <div className='flex flex-row items-center p-2'>
                        <img className='cursor-pointer w-12 h-12 mr-4 rounded-full border border-2' src="/image/nour.jpg" alt="" srcset="" />
                        <h2 className='text-md font-semibold'>Ayechi Nour</h2>
                    </div>
                    <h3 className='text-md font-semibold flex justify-end mt-2 py-2 px-4 bg-slate-100 hover:text-red-600 cursor-pointer'>Log out</h3>
                </div>}
            </div>
        </div>
    );
}

export default Navbar;