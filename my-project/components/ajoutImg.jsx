import React from 'react';
import _ from 'lodash';

const AjoutImg = ({ inputInfo ,handleChange ,formErrors }) => {
    const displayError = (key) => {
        if (!_.isEmpty(formErrors[key])) return <div className="pt-1 text-red-500 font-semibold">{formErrors[key]}</div>
    }
    return (
        <div className="outlin">
            <label htmlFor={inputInfo.name} className="font-cookie text-lg font-semibold">Image</label>
            <div className="outlin relative w-full mt-3">
                <input
                    onBlur={handleChange}
                    type="file"
                    name="image"
                    placeholder=" "
                    className="border-2 border-black rounded block p-4 md:w-96 w-80 text-base appearance-none outline-none bg-transparent text-black text-sm pt-5 font-medium"
                />
            </div>
            {displayError(inputInfo.name)}
        </div>
    );
}
export default AjoutImg;