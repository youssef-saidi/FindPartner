import React from 'react';
import Contact from '../components/contact';
import Conversation from '../components/conversation';
import Navbar from '../components/navbar';

const Chat = () => {
    return (
        <div className='bg-white h-screen w-screen overflow-hidden'>
            <Navbar />
            <div className='flex flex-row divide-x-2 relative h-full'>
                <div className='w-1/4'>
                    <Contact />
                </div>
                <div className='w-3/4'>
                    <Conversation />
                </div>
            </div>
        </div>
    );
}

export default Chat;