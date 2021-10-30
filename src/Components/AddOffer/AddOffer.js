import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import "./AddOffer.css"
const AddOffer = () => {
     const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data =>{
      axios.post(`https://secure-everglades-00863.herokuapp.com/addoffer`,data)
      .then(res=>{
          if(res.data.acknowledged){
              toast("Offer added Successfully")
          }
      })
  };

   return (
     <>
       <title>AddOffer Page..</title>
       <h2 className="py-5">Add your Favorite Place </h2>
       <div class='addoffer'>
         <form onSubmit={handleSubmit(onSubmit)}>
           <input
             placeholder='Country Name'
             {...register('country', { required: true })}
           />
           <input
             placeholder='Place Name'
             {...register('place', { required: true })}
           />
           <input
             type='number'
             placeholder='Price'
             {...register('price', { required: true })}
           />
           <input
             placeholder='Img Url'
             {...register('img', { required: true })}
           />
           <input type='submit' />
         </form>
       </div>
     </>
   );
};

export default AddOffer;