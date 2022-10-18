import React from 'react';
import Contact from '../components/contact';

const Contacts = () => {
    
    if (typeof window !== 'undefined'){
        // Connaitre width de l'ecran
        console.log(window.innerWidth ) 
    }
    return (
        <div className='h-full pt-2 bg-white rounded-tl-4xl pt-6'>
            <div className='relative px-8 pb-3'>
                <input placeholder='Search...' className='border border-slate-500 rounded w-full h-10 pl-2 pr-9' type="text" />
                <img className='absolute top-2 right-10 w-6 h-6' src="/image/searchIcon.png" alt="" srcset="" />
            </div>
            <div className='divide-y overflow-y-scroll h-full md:pb-28 px-2'>
                <Contact />
            </div>
        </div>
    );
}
export default Contacts;