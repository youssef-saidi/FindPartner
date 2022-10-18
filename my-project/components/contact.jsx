import React from 'react';

const Contact = () => {
    return (
        <a href='/conversation' className='flex flex-row py-2 items-center px-2 hover:bg-gray-100 cursor-pointer'>
            <div className='relative'>
                <img className='w-16 h-16 mr-4 rounded-full' src="/image/nour.jpg" alt="" srcset="" />
                <div style={{boxShadow:"0 0 5px red",backgroundColor:"red"}} className='w-3 h-3 rounded-full absolute top-1 right-4 z-30'></div>
            </div>
            <div className='flex flex-col'>
                <h2 className='text-md font-semibold'>Ayechi Nour</h2>
                <p className='text-sm font-medium'>vous: nhebek barcha</p>
            </div>
        </a>
    );
}
export default Contact;