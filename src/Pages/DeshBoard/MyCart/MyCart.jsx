import React from 'react';
import { Helmet } from 'react-helmet';
import useCart from '../../../hooks/useCart';
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';

const MyCart = () => {
    const { cart,refetch } = useCart()
    const total = cart.reduce((sum, item) => item.price + sum, 0)

    const handleDelete = item =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
             fetch(`http://localhost:5000/carts/${item._id}`,{
                method:'DELETE'
             })
             .then(res=>res.json())
             .then(data=>{
                if(data.deletedCount>0){
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
             })
            }
          })
    }

    return (
        <div className='w-full'>
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <div className='uppercase font-semibold flex justify-evenly h-[60px] items-center'>
                <h3 className='text-3xl'>Total-items:{cart.length}</h3>
                <h3 className='text-3xl'>Total-items:${total}</h3>
                <button className="btn btn-warning btn-sm">Pay</button>
            </div>
            <div className="">
                <table className="table w-full">

                    <thead>
                        <tr className='bg-[#D1A054]'>
                            <th></th>
                            <th>Price</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    
                        {
                            cart.map((item, index) =>
                            <tbody key={item._id}>
                             <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <td>{index + 1}</td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    ${item.price}
                                </td>
                                <th>
                                    <button
                                 onClick={()=>handleDelete(item)}
                                 className="btn bg-red-500 text-white p-6 btn-xs"><FaTrashAlt className='' /></button>
                                </th>
                            </tr>
                            </tbody>
                            )
                        }


                 
                </table>
            </div>
        </div>
    );
};

export default MyCart;