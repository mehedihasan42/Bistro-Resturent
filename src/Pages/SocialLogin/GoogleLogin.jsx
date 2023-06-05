import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const GoogleLogin = () => {
    const {googleAuthProvider} = useAuth()
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleAuthProvider()
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)

            const saveCart = {name:loggedUser.displayName,email:loggedUser.email}
            fetch('http://localhost:5000/users',{
              method:'POST',
              headers:{
                'content-type':'application/json'
              },
              body:JSON.stringify(saveCart)
            })
            .then(res=>res.json())
            .then(()=>{
              navigate('/');
            })
        })

    }

    return (
        <div>
              <div className="divider">OR</div>
          <div className='text-center'>
          <button className='btn btn-gost btn-circle text-3xl' onClick={handleGoogleSignIn}>
                <FcGoogle />
            </button>
          </div>
        </div>
    );
};

export default GoogleLogin;