import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
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
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Order No</th>
                <th>image</th>
                <th>Country</th>
                <th>Place</th>
                <th>Your Address</th>
                <th>status</th>
                <th>Action</th>
              </tr>
            </thead>
            {addOffer?.map((pd, index) => (
              <tbody>
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    {' '}
                    <img
                      src={pd.img}
                      className='w-25 h-25 rounded-circle'
                      alt=''
                    />{' '}
                  </td>
                  <td>{pd?.country}</td>
                  <td>{pd?.place}</td>
                  <td>{pd?.address}</td>
                  {pd?.status === 'Approved' ? (
                    <td className='text-primary'>{pd?.status}</td>
                  ) : (
                    <td className='text-warning'>{pd?.status}</td>
                  )}
                  <button
                    onClick={() => handleDelete(pd._id)}
                    className='btn mt-2 bg-danger p-2'
                  >
                    Delete
                  </button>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
      </div>
    );
};

export default MyOrder;