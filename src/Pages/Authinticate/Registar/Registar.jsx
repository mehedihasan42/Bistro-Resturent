import React, { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleLogin from '../../SocialLogin/GoogleLogin';
import Login from '../Login/Login';

const Registar = () => {

  const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const {signUp,updateProfilePicture} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";


  const onSubmit = data => {
    signUp(data.email,data.password)
    .then(result=>{

      const loggedUser = result.user;
      console.log(loggedUser)

      updateProfilePicture(data.name)
      .then(()=>{

        const saveCart = {name:data.name,email:data.email}
        fetch('http://localhost:5000/users',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(saveCart)
        })
        .then(res=>res.json())
        .then(data=>{
         if(data.insertedId){
          reset()
          Swal.fire({
            title: 'SignUp Success',
            icon: 'success',
            confirmButtonText: 'Success'
          })
          navigate('/');
         }
        })
      })
      .catch(error=>console.log(error))
    })
  };

    

    // const handleSignUp = event =>{
    //     event.preventDefault()
    //     const form = event.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(name,email,password)

    //     signUp(email,password)
    //     .then(result=>{
    //       const user = result.user;
    //       console.log(user)
    //     })
    // }

    return (
       <>
       <Helmet>
        <title>Bistro Boss | Registar </title>
       </Helmet>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content w-2/3 flex-col lg:flex">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Sign Up</h1>
    </div>
    <div className="card lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
      <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register("name",{ required: true })} type="text" name='name' placeholder="Name" className="input input-bordered" />
          {errors.name && <span className='text-red-600'>Input your name</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register("email",{
             required: true
           })} type="email" name='email' placeholder="email" className="input input-bordered" />
          {errors.email?.type==='required' && <span className='text-red-600'>Input your email</span>}
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password",{
             required: true,
             minLength: 6,
             maxLength: 20,
             pattern:/(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/
           })} name='password' placeholder="password" className="input input-bordered" />
          {errors.password?.type==='required' && <span className='text-red-600'>Password is required</span>}
          {errors.password?.type==='minLength' && <span className='text-red-600'>Password must be 6 charecter</span>}
          {errors.password?.type==='maxLength' && <span className='text-red-600'>Password must be less then 20 charecter</span>}
          {errors.password?.type==='pattern' && <span className='text-red-600'>Password must be one special charecter one small letter and one capital letter</span>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-orange-400">Sign Up</button>
        </div>
      </form>
   <GoogleLogin/>
   <p className='text-center'><small>Already have an account?<Link
   className='text-orange-500 font-bold' to='/login'>Login</Link></small></p>
    </div>
  </div>
</div>
       </>
    );
};

export default Registar;