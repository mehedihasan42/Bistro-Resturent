import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();
  // const image_hosting_url=`https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting_token}`

  const onSubmit = async (data) => {
    const apiKey = import.meta.env.VITE_Image_Upload_token; 
    const imageFile = data.image[0];

    const formData = new FormData();
    formData.append('image', imageFile);

    try {
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      const imageUrl = result.data.url;
      const {name,category,price,details} = data;
      const newData = {name,category,price:parseFloat(price),details,image:imageUrl}
      console.log(newData)
      const addNewItem = {newData}
      fetch('http://localhost:5000/menu',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify({addNewItem})
      })
      .then(res=>res.json())
      .then((data)=>{
        if(data.insertedId){
            reset()
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'Item added successfully',
              showConfirmButton: false,
              timer: 1500
            })
        }
      })
     
      

      // console.log(data)
    } catch (error) {
      // console.error('Error uploading image:', error);
    }
  };
  // console.log(errors);
 
  return (
    <div className="hero w-full bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <form onSubmit={handleSubmit(onSubmit)}
         className="card flex-shrink-0 shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Recipe name*</span>
              </label>
              <input 
              {...register("name", {required: true, maxLength: 120})}
              type="text" placeholder="Recipe name" className="input input-bordered" />
            </div>
            <div className='lg:flex gap-3'>
              <div className="form-control">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
                <select defaultValue="Category"
                {...register("category", { required: true})}
                 className="select select-bordered w-full max-w-xs">
                  <option disabled selected>Category</option>
                  <option>Pizza</option>
                  <option>Burgur</option>
                  <option>Salad</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price*</span>
                </label>
                <input
                 {...register("price", {required: true, maxLength: 120})}
                 type="text" placeholder="Price" className="input input-bordered" />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Recipe Details*</span>
              </label>
              <input
               {...register("details", {required: true, maxLength: 120})}
               type="text" placeholder="Recipe Details" className="input input-bordered h-36" />
            </div>

            <div>
            <input
            {...register('image')} 
             type="file" className="file-input file-input-bordered file-input-xs w-full max-w-xs" />
            </div>

            <div className="form-control mt-6">
            <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;