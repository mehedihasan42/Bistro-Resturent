import React, { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha }
 from 'react-simple-captcha';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  // const captcheRef = useRef(null)
  const [disabled,setDisabled] = useState(true)
  const {signIn} = useContext(AuthContext)
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || "/";

  useEffect(()=>{
    loadCaptchaEnginge(6); 
  },[])

    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        signIn(email,password)
        .then(result=>{
          const user = result.user;
          console.log(user)
          Swal.fire({
            title: 'Login Success',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        })
        navigate(from, { replace: true });
    }

    const handleCaptcha = e =>{
        const user_captcha_value = e.target.value;
       if(validateCaptcha(user_captcha_value)==true){
          setDisabled(false)
       }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-2/3 flex-col lg:flex">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now</h1>
          </div>
          <div className="card lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text w-96">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input type="text" onBlur={handleCaptcha} name='captcha' placeholder="type the captcha above" className="input input-bordered"
                />
              </div>
              {/*TODO - make button disable for captcha */}
              <div className="form-control mt-6">
                <button disabled={false} className="btn bg-orange-400">Login</button>
              </div>
            </form>
            <p><small>New Here?<Link to='/registar'>Registar</Link></small></p>
          </div>
        </div>
      </div>
    );
};

export default Login;