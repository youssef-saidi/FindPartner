import React, { useState } from 'react';

const MsgEntred = (info) => {
    const [apparence, setapparence] = useState(false);
    return (
        <div>
            <div className='flex flex-row mt-2'>
                <img className={apparence?'relative bottom-6 w-12 h-12 mr-2 sm:mr-4 rounded-full self-end':'w-12 h-12 mr-2 sm:mr-4 rounded-full self-end'} src={info.info.imgUser} alt="" />
                <div className={apparence?'sm:w-4/5 w-5/6 relative mb-6':'sm:w-4/5 w-5/6 relative'}>
                    <p onClick={() => { setapparence(!apparence) }} className='drop-shadow p-2 bg-white rounded-md'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, expedita eaque sit laborum praesentium obcaecati excepturi, doloribus placeat corporis amet ipsum est, odio dolores nam necessitatibus? Architecto reprehenderit necessitatibus praesentium!</p>
                    {apparence &&
                        <span className='right-0 -bottom-5 absolute text-gray-700 flex justify-end text-xs font-semibold'>17 OCT., 15:24</span>
                    }
                </div>
            </div>
        </div>
    );
}
export default MsgEntred;