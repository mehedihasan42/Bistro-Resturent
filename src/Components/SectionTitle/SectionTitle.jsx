import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='text-center'>
            <p className='text-yellow-600'>---{subHeading}---</p>
            <div className="divider w-64 mx-auto"></div>
            <h3 className='text-3xl'>{heading}</h3>
            <div className="divider w-64 mx-auto"></div>
        </div>
    );
};

export default SectionTitle;