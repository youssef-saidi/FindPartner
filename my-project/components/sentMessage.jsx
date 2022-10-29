import React, { useState } from 'react';

const SentMessage = () => {
    const [apparence, setapparence] = useState(false);
    return (
        <div>
            <div className='flex justify-end mt-2 drop-shadow'>
                <p onClick={()=>{setapparence(!apparence)}} className='sm:w-4/5 w-5/6 p-2 bg-pink-300 rounded-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic tempore maiores, quas eligendi iure numquam consectetur explicabo autem repudiandae corrupti a minus assumenda nemo debitis possimus odit, deserunt recusandae!</p>
            </div>
            {apparence &&
                <span className='text-gray-700 flex justify-end text-xs font-semibold'>17 OCT., 15:24</span>
            }
        </div>
    );
}
export default SentMessage;