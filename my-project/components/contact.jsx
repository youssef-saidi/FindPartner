import React from 'react';

const Contact = () => {
    return (
        <a href='/conversation' className='flex flex-row py-2 items-center px-2 hover:bg-gray-100 cursor-pointer'>
            <div className='relative'>
                <img className='w-16 h-16 mr-4 rounded-full' src="/image/nour.jpg" alt="" srcset="" />
                <div style={{boxShadow:"red 0px 54px 55px, red 0px -1px 2px, red 0px 0px 0px, red 0px 1px 3px, red 0px -1px 3px",backgroundColor:"red"}} className='w-2.5 h-2.5 rounded-full absolute top-2 right-4 z-30'></div>
            </div>
            <div className='flex flex-col'>
                <h2 className='text-md font-semibold'>Ayechi Nour</h2>
                <p className='text-sm font-medium'>vous: nhebek barcha</p>
            </div>
        </a>
    );
}
export default Contact;