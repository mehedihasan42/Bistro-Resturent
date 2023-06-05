import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageItems = () => {
    const [menu,,refetch] = useMenu()
    const[axiosSecure] = useAxiosSecure()

    const handleDeleteItem = item =>{
      Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/menu/${item._id}`)
          .then(res=>{
            console.log(res.data);
            if(res.data.deletedCount){
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
        <div>
           <SectionTitle heading='MANAGE ALL ITEMS' subHeading='Hurry Up!'></SectionTitle>
           <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
 
   <thead>
      <tr>
        <th>#</th>
        <th>Item Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Item Update</th>
        <th>Item Delete</th>
      </tr>
    </thead>
   
    <tbody>
      {
        menu.map((item,index)=>
            <tr key={item._id}>
            <th>
             {index+1}
            </th>
            <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
            </td>
            <td>
            <div>
                  <div className="font-bold">{item.name}</div>
                </div>
            </td>
            <td>
             {item.price}
            </td>
            <td><button className='btn bg-[#D1A054]'><BiEdit/></button></td>
            <th>
              <button
              onClick={()=>handleDeleteItem(item)}
               className="btn bg-[#B91C1C]"><RiDeleteBinLine/></button>
            </th>
          </tr>
            )
      }
     
    </tbody>
    {/* foot */} 
  </table>
</div>
        </div>
    );
};

export default ManageItems;