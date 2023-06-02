import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
    const {googleAuthProvider} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleAuthProvider()
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate('/')
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