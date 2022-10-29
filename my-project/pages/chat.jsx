import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/navbar';
import NoConversation from '../components/noConversation';
import SideBar from '../components/sideBar';
import Contacts from './contacts';
import Conversation from './Conversation';

const Chat = () => {
    const apparence = useSelector((state) => state.sideBar.apparence)
    const conversationApparence = useSelector((state) => state.conversation.apparence)
    return (
        <div className='bgPink h-screen w-screen overflow-hidden'>
            <Navbar />
            <div className='flex flex-row h-full'>
                {apparence && <SideBar />}
                <div className='flex flex-row divide-x-2 relative h-full rounded-tl-4xl bg-slate-100'>
                    <div className='w-1/4'>
                        <Contacts />
                    </div>
                    <div className='w-3/4'>
                        {conversationApparence &&
                            <NoConversation />
                        }
                        <Conversation />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Chat;