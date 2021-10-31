import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';
import './Book.css'

const Book = () => {
    const {offersid}=useParams()
    const {user} =useAuth()
     const [singleOffer,setSingleOffer]=useState({})
     const {_id ,img,country,place,price} =singleOffer

    useEffect(()=>{
        axios.get(`https://secure-everglades-00863.herokuapp.com/booking/${offersid}`)
        .then(res=>setSingleOffer(res.data))
    },[])

// form----
  const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
  const onSubmit = data =>{
    const status="Pending"
     
      const newData ={ ...data,id:_id,img,country,place,price ,status}
      
      axios.post('https://secure-everglades-00863.herokuapp.com/addedOffer',newData)
      .then(res=>{
          console.log(res)
          if(res.data.acknowledged){
              alert(" Offer successfully Added !!")
              reset()
          }
      })
  };
    return (
      <div>
        <Row>
          <h2 className='py-5'>See details and Place Our Order </h2>
          <Col>
            <h6>Offers Details about Place </h6>
            <div className='ms-2 p-2 shadow mb-4'>
              <img src={img} className='img-fluid' alt='' />
              <h6>Country : {country}</h6>
              <h4>Place : {place}</h4>
              <h6>Price Only : {price}</h6>
            </div>
          </Col>

          <Col>
            <h4>Please give some details</h4>
            <div className="addOrder border border-info rounded m-3 shadow">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register('username')} />
                <input defaultValue={user.email} readOnly  {...register('email')} />
                <input placeholder="Address" {...register('address',{ required: true })} /> 
                {errors.address && <span className="text-danger">Address is required</span>}
                <input type="number" placeholder="Mobile No" {...register('number',{ required: true })} /> 
               {errors.number && <span className="text-danger">Mobile no is required</span>}
                <input  defaultValue={new Date()}  {...register('date')} /> 
                <input className="btn btn-secondary" type='submit' value="Add order" />
              </form>
            </div>
          </Col>
        </Row>
      </div>
    );
};

export default Book;