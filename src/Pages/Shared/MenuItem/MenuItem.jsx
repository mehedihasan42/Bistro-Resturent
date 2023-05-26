import React from 'react';

const MenuItem = ({item}) => {
  const {name,recipe,image,price} = item
    return (
        <div className='lg:flex m-12 lg:my-8 space-x-5'>
            <img style={{borderRadius:'0 200px 200px 200px'}} className='w-32 rounded-lg mx-auto lg:mx-0' src={image} alt="" />
            <div>
                <h3 className='uppercase text-xl'>{name}</h3>
                <p>{recipe}</p>
            </div>
            <div>
            <p className='text-yellow-600'>${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;