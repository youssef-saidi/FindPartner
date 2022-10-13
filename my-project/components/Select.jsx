import React, { useState } from 'react';

const Select = ({info}) => {
    const [apparence, setapparence] = useState(false);
    const [value, setvalue] = useState(info.selectedValue);
    const items = (info.values)?.map((item) => {
        return (
            <span onClick={() => { setvalue(item); setapparence(!apparence) }} className='px-2 py-1 border-b border-slate-300 cursor-pointer hover:bg-slate-200'>{item}</span>
        )
    })
    return (
        <div>
            <label className="font-cookie text-lg font-semibold">{info.label}</label>
            <div className='mt-3 relative'>
                <h2 className='border-2 border-black rounded block p-4 md:w-96 w-80 text-base appearance-none outline-none bg-transparent text-black text-sm pt-5 font-medium'>{value}</h2>
                <img onClick={() => { setapparence(!apparence) }} className='absolute top-4 right-3 w-6 h-6 cursor-pointer' src="image/fleche.png" alt="" srcset="" />
                {apparence &&
                    <div className='z-40 absolute top-15 rounded-sm md:w-96 w-80 flex flex-col text-black text-sm font-medium border-2 border-black mt-0.5 bg-white'>
                       {items}
                    </div>}
            </div>
        </div>
    );
}
export default Select;