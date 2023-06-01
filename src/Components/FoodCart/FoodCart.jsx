import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const FoodCart = ({ item }) => {
  const { _id, name, recipe, image, price } = item;
  const { user } = useContext(AuthContext)
  const [,refetch] = useCart()
  const navigate = useNavigate()
  const location = useLocation()

  const handleAddToCart = item => {
    console.log(item)
    if (user && user?.email) {
      const cartItem = {menuItemId:_id,name,image,price,recipe,email:user?.email}
      fetch('http://localhost:5000/carts',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(cartItem)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Add to cart successfully',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
    }
    else{
      Swal.fire({
        title: 'Please Login for order food',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now'
      }).then((result) => {
        if (result.isConfirmed) {
           navigate('/login',{state:{ from: location }})
        }
      })
    }
  }

  return (
    <div className="card w-72 md:w-96 glass">
      <figure><img src={image} alt="car!" /></figure>
      <p className='absolute right-3 p-2 rounded top-2 bg-slate-900 text-white'>${price}</p>
      <div className="card-body text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline bg-slate-300 border-0 border-b-4 border-b-orange-500 hover:bg-orange-500 mx-auto mt-4">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;