import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const ExtraSection = () => {
    return (
      <div>
        <Container>
          <h3 className='py-3'>About TravelBD</h3>
          <Row className='py-5' sm={1} md={2}>
            <Col>
              <img className='img-fluid' src='img/extra/1.jpg' alt='' />
            </Col>
            <Col>
              <h1>World Best Travel Agency Company Since 2015.</h1>
              <p>
                Based in La Jolla, California, Classic Journeys offers 100
                itineraries throughout 50 countries on six different continents.
                Their eclectic, handcrafted trips are extremely popular across
                the travel market and have earned a multitude of travel awards
                throughout the past decade. Classic Journeys caters not only to
                high-end clients who desire tailor-made, luxurious trips but
                also to young adults and single travelers who want to travel to
                remote areas. Whether the tour takes adventurers to Africa or
                Europe, Classic Journeys provides novel ways to travel. Their
                culture and walking tours are popular in countries such as
                Greece and Italy where ancient sites can be fused with delicious
                market food.
              </p>
            </Col>
          </Row>

          <Row className='py-3'>
            <h1 className='py-3'>CUSTOMER'S HAPPY MEMORIES</h1>
            <Col className='d-flex'>
              <img className='img-fluid' src='img/extra/2.jpg' alt='' />
              <div>
                <img className='img-fluid p-1' src='img/extra/3.jpg' alt='' />
                <img className='img-fluid p-1' src='img/extra/4.jpg' alt='' />
                <img className='img-fluid p-1' src='img/extra/5.jpg' alt='' />
                <img className='img-fluid p-1' src='img/extra/6.jpg' alt='' />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default ExtraSection;