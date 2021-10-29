import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import './ManagleOrder.css'
const MangeAllOrder = () => {
    const [allOrder, setAllOrder] =useState([])
    
    useEffect(()=>{
        axios.get('http://localhost:5000/manageallorder')
        .then(res=>setAllOrder(res.data))
    },[allOrder])
const handleDelete=(id)=>{
    const res = window.confirm('Are you want to delete Offer?')
    if(res){
     axios.delete(`http://localhost:5000/deletemanageorder/${id}`)
    .then(res=>{
          if(res.data.deletedCount==1){
            toast('Offer delete Successfully');
        }}
        )} 
    }
const handleApproved=(id)=>{
     axios.put(`http://localhost:5000/status/${id}`)
    .then(res=>{
        if(res.data. modifiedCount ==1){
            toast("Approved done !!")
        }
    })
    }

    return (
        <>
         <div className="my-5">
             <h2>All Manageable Orders : {allOrder.length}</h2>
             <Row xs={1} sm={2} md={4}>
               {allOrder.map(order=><div key={order._id}>
                  <Card className="border p-3 m-1 shadow-lg">
                   <img src={order.img} className="img-fluid" alt="" />
                   <h2>Place: {order.place}</h2>
                   <h6>Country:{order.country} </h6>
                     <h3 className="text-primary">Who Orders:</h3>
                     <p>{order.email}</p>
                     <p>No:{order.number}</p>
                     <div className="d-flex justify-content-around">
                          <button onClick={()=>handleDelete(order._id)} className='btn bg-danger p-2'>Delete</button>
                           <button onClick={()=>handleApproved(order._id)} 
                           className={order?.status=="Pending"? "pending" : "approved"}
                           >{order.status}</button>
                     </div>
                    </Card>
                </div>)}
             </Row>
         </div>
        </>
    );
};

export default MangeAllOrder;