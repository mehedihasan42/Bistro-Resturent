import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {

    const {data:user=[],refetch} = useQuery(['users'],async()=>{
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })

    return (
      
        <div className="overflow-x-auto">
        <table className="table">
          {
              user.length
          }
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default AllUsers;