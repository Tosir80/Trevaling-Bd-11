import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../Hooks/useAuth';

const Header = () => {
  const{user,logOut}=useAuth()
    const logOutHandler=()=>{
      logOut()
      toast('LogOut Successfully !');
    }
    return (
        <>  
          <Navbar bg='primary' variant='dark'  sticky='top' collapseOnSelect expand='md'>
            <Container>
              <Navbar.Brand  as={Link} to="/home">TravelBd</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
              <Nav className='ms-auto'>
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                 {user?.email && <div className="d-md-flex">
                   <Nav.Link as={Link} to="/myorder">MyOrder</Nav.Link>
                 <Nav.Link as={Link} to="/manageallorder">ManageAllOrder</Nav.Link>
                 <Nav.Link as={Link} to="/addoffer">AddOffer</Nav.Link>
                 </div> }
                  <div className="d-md-flex">
                    {user?.email? <button className="btn btn-warning" onClick={logOutHandler}>LogOut</button> : <Nav.Link as={Link} to="/login">Login</Nav.Link> }
                <div className="w-25 p-1 mx-auto"><img src={user?.photoURL} className="img-fluid rounded-circle" alt="" /></div>
                  </div>
              </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

    
        </>
   
    );
};

export default Header;