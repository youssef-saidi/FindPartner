import React from 'react';

const Conversation = () => {
    return (
        <div className='bg-slate-100 h-full p-4 relative z-10'>
            <div className='flex flex-row items-center rounded-lg sticky top-0 border-b py-3 bg-white'>
                <a href="/contact">
                    <img className='w-5 h-5 ml-3 md:hidden' src="/image/flecheRetour.png" alt="" srcset="" />
                </a>
                <img className='w-12 h-12 m-2 rounded-full' src="/image/nour.jpg" alt="" srcset="" />
                <h1 className='text-lg font-semibold ml-2'>Ayechi Nour</h1>
            </div>
            <div className='overflow-y-scroll h-screen md:h-full bg-slate-100 md:mb-32 pt-2 md:pb-52'>
                <div className='w-4/5 flex flex-row mt-2'>
                    <img className='w-12 h-12 mr-4 rounded-full self-end' src="/image/nour.jpg" alt="" srcset="" />
                    <p className='p-2 bg-slate-200 rounded-md'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, expedita eaque sit laborum praesentium obcaecati excepturi, doloribus placeat corporis amet ipsum est, odio dolores nam necessitatibus? Architecto reprehenderit necessitatibus praesentium!</p>
                </div>
                <div className='flex justify-end mt-2'>
                    <p className='w-4/5 p-2 bg-blue-200 rounded-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic tempore maiores, quas eligendi iure numquam consectetur explicabo autem repudiandae corrupti a minus assumenda nemo debitis possimus odit, deserunt recusandae!</p>
                </div>
                <div className='w-4/5 flex flex-row mt-2'>
                    <img className='w-12 h-12 mr-4 rounded-full self-end' src="/image/nour.jpg" alt="" srcset="" />
                    <p className='p-2 bg-slate-200 rounded-md'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, expedita eaque sit laborum praesentium obcaecati excepturi, doloribus placeat corporis amet ipsum est, odio dolores nam necessitatibus? Architecto reprehenderit necessitatibus praesentium!</p>
                </div>
                <div className='flex justify-end mt-2'>
                    <p className='w-4/5 p-2 bg-blue-200 rounded-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic tempore maiores, quas eligendi iure numquam consectetur explicabo autem repudiandae corrupti a minus assumenda nemo debitis possimus odit, deserunt recusandae!</p>
                </div>
                <div className='w-4/5 flex flex-row mt-2'>
                    <img className='w-12 h-12 mr-4 rounded-full self-end' src="/image/nour.jpg" alt="" srcset="" />
                    <p className='p-2 bg-slate-200 rounded-md'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, expedita eaque sit laborum praesentium obcaecati excepturi, doloribus placeat corporis amet ipsum est, odio dolores nam necessitatibus? Architecto reprehenderit necessitatibus praesentium!</p>
                </div>
                <div className='flex justify-end mt-2'>
                    <p className='w-4/5 p-2 bg-blue-200 rounded-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic tempore maiores, quas eligendi iure numquam consectetur explicabo autem repudiandae corrupti a minus assumenda nemo debitis possimus odit, deserunt recusandae!</p>
                </div>
                <div className='w-4/5 flex flex-row mt-2'>
                    <img className='w-12 h-12 mr-4 rounded-full self-end' src="/image/nour.jpg" alt="" srcset="" />
                    <p className='p-2 bg-slate-200 rounded-md'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, expedita eaque sit laborum praesentium obcaecati excepturi, doloribus placeat corporis amet ipsum est, odio dolores nam necessitatibus? Architecto reprehenderit necessitatibus praesentium!</p>
                </div>
                <div className='flex justify-end mt-2'>
                    <p className='w-4/5 p-2 bg-blue-200 rounded-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic tempore maiores, quas eligendi iure numquam consectetur explicabo autem repudiandae corrupti a minus assumenda nemo debitis possimus odit, deserunt recusandae!</p>
                </div>
                <div className='w-4/5 flex flex-row mt-2'>
                    <img className='w-12 h-12 mr-4 rounded-full self-end' src="/image/nour.jpg" alt="" srcset="" />
                    <p className='p-2 bg-slate-200 rounded-md'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, expedita eaque sit laborum praesentium obcaecati excepturi, doloribus placeat corporis amet ipsum est, odio dolores nam necessitatibus? Architecto reprehenderit necessitatibus praesentium!</p>
                </div>
                <div className='flex justify-end mt-2'>
                    <p className='w-4/5 p-2 bg-blue-200 rounded-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic tempore maiores, quas eligendi iure numquam consectetur explicabo autem repudiandae corrupti a minus assumenda nemo debitis possimus odit, deserunt recusandae!</p>
                </div>
                <div className='w-4/5 flex flex-row mt-2'>
                    <img className='w-12 h-12 mr-4 rounded-full self-end' src="/image/nour.jpg" alt="" srcset="" />
                    <p className='p-2 bg-slate-200 rounded-md'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, expedita eaque sit laborum praesentium obcaecati excepturi, doloribus placeat corporis amet ipsum est, odio dolores nam necessitatibus? Architecto reprehenderit necessitatibus praesentium!</p>
                </div>
                <div className='flex justify-end mt-2'>
                    <p className='w-4/5 p-2 bg-blue-200 rounded-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic tempore maiores, quas eligendi iure numquam consectetur explicabo autem repudiandae corrupti a minus assumenda nemo debitis possimus odit, deserunt recusandae!</p>
                </div>
            </div>
            <div className='sticky bottom-0 h-16 flex flex-row items-center bg-slate-100'>
                <div className='flex flex-row bg-white p-2 rounded-full h-12 w-full'>
                    <input className='h-8 w-full' type="text" />
                    <img className='w-7 h-7 mr-1 cursor-pointer' src="/image/heartIcon.png" alt="" srcset="" />
                </div>
                <img className='w-8 h-8 ml-2' src="/image/sendIcon.png" alt="" srcset="" />
            </div>
        </div>
    );
}
export default Conversation;