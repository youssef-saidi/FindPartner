import React from 'react';

const Input = ({ inputInfo }) => {
    const displayError = (key) => {
        // if (!_.isEmpty(formErrors[key])) return <div className="pt-3 text-red-700">{formErrors[key]}</div>
    }
    const handleChange = (e) => {
        //   updateFormData({
        //     ...formData,
        //     [e.target.name]: e.target.value.trim()
        //   });
    };
    return (
        <div className="outlin">
            <label htmlFor={inputInfo.type} className="font-cookie text-lg font-semibold">{inputInfo.label}</label>
            <div className="outlin relative w-full mt-3">
                <input
                    onChange={handleChange}
                    type={inputInfo.type}
                    name={inputInfo.type}
                    placeholder=" "
                    className="border-2 border-black rounded block p-4 md:w-96 w-80 text-base appearance-none outline-none bg-transparent text-black text-sm pt-5 font-medium"
                />
                <label htmlFor={inputInfo.type} className="absolute top-0 text-base bg-transparent p-4 duration-300 origin-0 pointer-events-none text-gray-400 font-cookie">{inputInfo.label}</label>
            </div>
            {displayError(inputInfo.erreur)}
        </div>
    );
}
export default Input;