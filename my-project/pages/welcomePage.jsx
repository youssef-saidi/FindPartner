import Link from 'next/link';
import React from 'react';
import Button from '../components/button';

const WelcomePage = () => {
    return (
        <div className='bgPink h-screen w-screen relative flex flex-col justify-center items-center'>
            <h2 className='absolute top-2 right-4 text-white font-cookie'>Beta Version</h2>
            <img className='rounded-full border border-4 w-64 h-64' src="image/nour.jpg" alt="" srcset="" />
            <h2 className='text-white font-cookie font-semibold p-4'>Fake Name</h2>
            <div className='mt-6 flex flex-col items-center justify-center'>
                <a href="/getInTouch">
                    <Button value="Find a random partner" type="submit" bgColor="#FFFFFF" />
                </a>
                <div className='mt-4'>
                    <a href="/chat">
                        <Button value="Go to Chat" type="submit" bgColor="#FFFFFF" />
                    </a>
                </div>
            </div>
            <p className='font-medium font-cookie text-white text-2xl place-self-center absolute bottom-5'>Hope That’s what you want</p>
        </div>
    );
}

export default WelcomePage;
