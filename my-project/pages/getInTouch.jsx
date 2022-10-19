import React from 'react';
import Button from '../components/button';

const GetInTouch = () => {
    return (
        <div className='bgPink h-screen w-screen relative flex flex-col justify-center items-center'>
            <h2 className='absolute top-2 right-4 text-white font-cookie'>Beta Version</h2>
            <img className='rounded-full border border-4 w-52 h-52' src="image/nour.jpg" alt="" srcSet="" />
            <h2 className='text-white font-cookie font-semibold p-4'>Fake Name</h2>
            <a href='/chat' className='mt-6'>
                <Button value="Get In Touch" type="submit" bgColor="#FFFFFF" />
            </a>
            <p className='font-medium font-cookie text-white text-2xl place-self-center absolute bottom-5'>Hope That’s what you want</p>
        </div>
    );
}

export default GetInTouch;