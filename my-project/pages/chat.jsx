import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/navbar';
import SideBar from '../components/sideBar';
import Contacts from './contacts';
import Conversation from './Conversation';

const Chat = () => {
    const apparence = useSelector((state) => state.sideBar.apparence)
    return (
        <div className='bgPink h-screen w-screen overflow-hidden'>
            <Navbar />
            <div className='flex flex-row h-full'>
                {apparence&&<SideBar />}
                <div className='flex flex-row divide-x-2 relative h-full'>
                    <div className='w-1/4'>
                        <Contacts />
                    </div>
                    <div className='w-3/4'>
                        <Conversation />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;