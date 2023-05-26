import React from 'react';

const FoodCart = ({item}) => {
    const {name,recipe,image,price} = item
    return (
        <div className="card w-72 md:w-96 glass">
  <figure><img src={image} alt="car!"/></figure>
  <p className='absolute right-3 p-2 rounded top-2 bg-slate-900 text-white'>${price}</p>
  <div className="card-body text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline bg-slate-300 border-0 border-b-4 border-b-orange-500 hover:bg-orange-500 mx-auto mt-4">Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCart;