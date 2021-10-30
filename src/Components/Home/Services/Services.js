
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services,setServices] =useState([])
    useEffect(()=>{
        fetch('https://secure-everglades-00863.herokuapp.com/offers')
          .then((res) => res.json())
          .then((data) => setServices(data));
    },[services])
    
    return (
      <div>
        <Container>
          <div className='py-5'>
            <h2>BEST OFFERS</h2>
            <p>CHECK OUT OUR BEST PROMOTION TOURS</p>
            {services.length === 0 ? (
              <Spinner animation='border' variant='primary' />
            ) : (
              <Row xs={1} sm={2} md={3}>
                {services.map((service) => (
                  <Col key={service._id}>
                    <Card className='m-2'>
                      <img className='img-fluid' src={service.img} alt='' />
                      <p>{service.country}</p>
                      <h2>{service.place}</h2>
                      <div className='d-flex  justify-content-around align-items-center p-1'>
                        <h5 className='text-primary'>${service.price}</h5>
                        <Link to={`/book/${service._id}`}>
                          <button className='btn bg-warning'>Book Now</button>
                        </Link>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}
          </div>
        </Container>
      </div>
    );
};

export default Services;