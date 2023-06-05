import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet';
import { FaTrashAlt,FaUsers } from 'react-icons/fa';
import { MdAdminPanelSettings } from 'react-icons/md';
import Swal from 'sweetalert2';

const AllUsers = () => {
  const token = localStorage.getItem('access-token')
    const {data:users=[],refetch} = useQuery(['users'],async()=>{
        const res = await fetch('http://localhost:5000/users',{
          headers:{
            authorization:`bearer ${token}`
          }
        })
        return res.json();
    })

    const handleMakeAdmin = user =>{
          fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method:'PATCH'
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
            if(data.modifiedCount){
              refetch()
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an admin now`,
                showConfirmButton: false,
                timer: 1500
              })
            }
          })
    }

    const handleDelete = user =>{
       
    }

    return (
        <div className="w-full">
          <Helmet>
                <title>Bistro Boss | All Users</title>
          </Helmet>
         <h2 className='text-center font-bold text-xl'>Total Users:{users.length}</h2>
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
              users.map((user,index)=>
               
                <tr key={user._id}>
                  <th>{index+1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {
                      user.role === 'admin'?<button className="btn bg-red-500 text-white p-6 btn-xs">
                         <MdAdminPanelSettings/>
                      </button>:
                      <button
                    onClick={()=>handleMakeAdmin(user)}
                    className="btn bg-red-500 text-white p-6 btn-xs"><FaUsers/>
                    </button>
                    }
                  </td>
                  <td>
                  <button
                    onClick={()=>handleDelete(user)}
                    className="btn bg-red-500 text-white p-6 btn-xs"><FaTrashAlt/>
                    </button>
                  </td>
                </tr>
             
                )
          }
           </tbody>
         
        </table>
      </div>
    );
};

export default AllUsers;