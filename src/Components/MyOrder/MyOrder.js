import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../Hooks/useAuth';
 toast.configure();

const MyOrder = () => {
    const{user} =useAuth()
    const email =user.email
    const [addOffer,setAddOffer] =useState([])
   useEffect(()=>{
      axios.get(`https://secure-everglades-00863.herokuapp.com/myorder/${email}`)
        .then((res) => setAddOffer(res.data));
   },[addOffer])
    const handleDelete=(id)=>{
        const res = window.confirm('Are you want to delete Offer?');
        if(res){
        axios.delete(`https://secure-everglades-00863.herokuapp.com/deletemyorder/${id}`)
        .then((res) =>{
          if(res.data.deletedCount==1){
             toast('Offer delete Successfully');
          } });
        }
    }



    return (
      <div className='py-5'>
        <title>MyOffer Page..</title>
        <h1> Your added Offers: {addOffer.length}</h1>

      <div>
        <Container>
          {addOffer.map(pd=><div >
            <div className="bg-info shadow py-1 d-md-flex align-items-center justify-content-around m-4 rounded">
              <img src={pd.img} className=" rounded-circle" height="100px" width="100px"  alt="" />
               <div>
                 <h6>{pd.place}</h6>
                 <p className="text-light">OrderId:{pd._id}</p>
               </div>
               <h6>{pd.country}</h6>
               <h6>{pd.address}</h6>
               <h6>{pd.number}</h6>
                 {pd?.status === 'Approved' ? (
                    <span className=' bg-primary rounded-3 p-1'>{pd?.status}</span>
                  ) : (
                    <span className=' bg-warning rounded-3 p-1'>{pd?.status}</span>
                  )}
                    <button
                    onClick={() => handleDelete(pd._id)}
                    className='ms-1 ms-md-0 btn bg-danger p-1'
                  >
                    Delete
                  </button>
              </div>
          </div>)}
        </Container>
      </div>
      </div>
    );
};

export default MyOrder;