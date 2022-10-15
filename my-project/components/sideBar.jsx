import React from 'react';

const SideBar = () => {
    return (
        <div className='w-screen sm:w-80 bgPink font-cookie font-medium text-md text-white pl-10 pt-32'>
            <h2 className='cursor-pointer py-1'>Find Your Partner</h2>
            <h2 className='cursor-pointer py-1'>Donate</h2>
            <h2 className='cursor-pointer py-1'>Help</h2>
            <h2 className='cursor-pointer py-1'>LogOut</h2>
        </div>
    );
}

export default SideBar;