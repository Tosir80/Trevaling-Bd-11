import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <div style={{ background: '#0b234a' ,color:"white",padding:"20px"}}>
        <Row>
          <Col>
           <h4> <Link to='/home'>TravelBd</Link></h4>
            <p>ShareTrip is the best travel agency in Bangladesh.</p>
          </Col>
          <Col>
            <h6>Contact</h6>
            <p>Mirpur-10, Dhaka,Bangladesh</p>
            <p>+8801779794012</p>
            <p>tosiruzzamantosir@gmail.com</p>
          </Col>
          <Col>
            <h6>Help</h6>
            <p>FQA</p>
            <p>Support Center</p>
            <p>Privacy Policy</p>
          </Col>
        </Row>
      </div>
    );
};

export default Footer;