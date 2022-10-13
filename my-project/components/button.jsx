import React from 'react';

const Button = ({value ,type}) => {
    return (
        <input className='bg-white font-cookie py-4 rounded font-medium cursor-pointer w-64' type={type?"submit":"button"} value={value} />
    );
}

export default Button;
