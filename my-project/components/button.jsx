import React from 'react';

const Button = ({value ,type,bgColor}) => {
    return (
        <input style={{backgroundColor:bgColor,color:(bgColor=="#DB2777")&&"#FFFFFF"}} className='font-cookie py-4 rounded font-medium cursor-pointer w-64' type={type?"submit":"button"} value={value} />
    );
}

export default Button;
