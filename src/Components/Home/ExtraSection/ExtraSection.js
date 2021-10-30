import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';


const ExtraSection = () => {
    return (
      <div>
        <Container>
          {/* About TravelBD section */}
          <h3 className='py-3'>About TravelBD</h3>
          <Row className='py-5' xs={1} sm={1} md={2}>
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
          {/*CUSTOMER'S HAPPY MEMORIES section  */}
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
          {/* ------ */}
          <Row xs={1} md={2} className="py-5">
            <Col>
               <div className="py-5">
                 <Form>
                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                      Email
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control   placeholder="email@example.com" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                      Password
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control type="password" placeholder="Password" />
                    </Col>
                  </Form.Group>
                  <input className="btn btn-control btn-outline-primary" type="submit" value="Subscribe" />
                </Form>
               </div>
            </Col>
            <Col>
            <h3>Popular Tourism Countries</h3>
            <p>The World Tourism rankings are compiled by the United Nations World Tourism Organization as part of their World Tourism Barometer publication, which is released three times throughout the year.</p>
            </Col>

          </Row>
        </Container>
      </div>
    );
};

export default ExtraSection;