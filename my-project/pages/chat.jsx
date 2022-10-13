import React from 'react';
import Contact from '../components/contact';
import Navbar from '../components/navbar';

const Chat = () => {
    return (
        <div className='bg-white h-screen w-screen'>
            <Navbar />
            <div className='flex flex-row divide-x-2'>
                <div className='w-1/4'>
                    <Contact />
                </div>
                <div className='w-3/4'>

                </div>
            </div>
        </div>
    );
}

export default Chat;