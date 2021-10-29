import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import "./AddOffer.css"
const AddOffer = () => {
     const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data =>{
      axios.post(`http://localhost:5000/addoffer`,data)
      .then(res=>{
          if(res.data.acknowledged){
              toast("Offer added Successfully")
          }
      })
  };

   return (
     <>
       <div class="addoffer">
         <form onSubmit={handleSubmit(onSubmit)}>
           <input placeholder='Country Name' {...register('country',{ required: true })} />
           <input placeholder='Place Name' {...register('place',{ required: true })} />
           <input type='number' placeholder='Price' {...register('price',{ required: true })} />
           <input placeholder='Img Url' {...register('img' ,{ required: true })} />
           <input type='submit' />
         </form>
       </div>
     </>
   );
};

export default AddOffer;