import React from 'react';

const Bouton = ({value}) => {
    return (
        <div className="md:w-72 w-64">
            <button className="bgPink w-full rounded text-white py-3 tracking-wide mt-10 cursor-pointer font-cookie" type="submit">{value}</button>
        </div>
    );
}

export default Bouton;
