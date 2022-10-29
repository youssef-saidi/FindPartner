import React, { useEffect, useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import MsgEntred from '../components/msgEntred';
import { useSelector } from 'react-redux';
import SentMessage from '../components/sentMessage';

const Conversation = () => {
    const [apparence, setapparence] = useState(false);
    const [emoji, setemoji] = useState(false);
    const userInfo = useSelector((state) => state.conversation.activeConversation)
    console.log("conversation",userInfo)
    return (
        <div className='bg-slate-100 h-full p-4 relative z-10'>
            <div className='flex flex-row items-center z-50 place-content-between rounded-lg sticky top-0 border-b py-3 bg-white'>
                <div className='flex flex-row items-center'>
                    <img className='w-5 h-5 ml-3 md:hidden' src="/image/flecheRetour.png" alt="" />
                    <img className='w-12 h-12 m-2 rounded-full' src={userInfo.imgUser} alt="" />
                    <h1 className='text-lg font-semibold'>{userInfo.userName}</h1>
                </div>
                <div className='flex flex-col z-50'>
                    <div onClick={() => { setapparence(!apparence) }} className='flex flex-row items-center mr-8 py-2 px-5 bg-slate-200 rounded-3xl cursor-pointer'>
                        <h3 className='text-md font-semibold'>Settings</h3>
                        <img className='w-5 h-5 ml-2' src="/image/settings.png" alt="" />
                    </div>
                    {apparence &&
                        <div className='mt-2 rounded absolute w-auto bg-white z-50 top-16 right-8 border-2 border-gray-600'>
                            <h3 className='z-50 text-md font-semibold flex justify-end py-2 px-4 hover:text-red-600 cursor-pointer'>Supprimer la conversation</h3>
                        </div>
                    }
                </div>
            </div>
            <div className='overflow-y-scroll h-screen md:h-full bg-slate-100 md:mb-32 pt-2 md:pb-52'>
                <MsgEntred info={userInfo} />
                <SentMessage />
                <MsgEntred info={userInfo} />
                <SentMessage />
                <MsgEntred info={userInfo} />
                <SentMessage />
                <MsgEntred info={userInfo} />
                <SentMessage />
                <MsgEntred info={userInfo} />
                <SentMessage />
                <MsgEntred info={userInfo} />
                <SentMessage />
            </div>
            <div className='sticky bottom-0 h-16 flex flex-row items-center bg-slate-100'>
                <div className='flex flex-row bg-white py-2 pl-5 rounded-full h-12 w-full'>
                    <input className='h-8 w-full' type="text" />
                    <div className="relative">
                        <img onClick={() => { setemoji(!emoji) }} className='w-11 h-11 mr-2 mt-1 cursor-pointer relative -top-2' src="/image/smile.png" alt="" />
                        {emoji &&
                            <div className='absolute right-0 bottom-12'>
                                <EmojiPicker />
                            </div>
                        }
                    </div>
                </div>
                <img className='w-8 h-8 ml-2' src="/image/sendIcon.png" alt="" />
            </div>
        </div>
    );
}
export default Conversation;