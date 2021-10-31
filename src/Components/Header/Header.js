import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink ,Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../Hooks/useAuth';
import './Header.css'
const Header = () => {
  const{user,logOut}=useAuth()
    const logOutHandler=()=>{
      logOut()
      toast('LogOut Successfully !');
    }
    return (
        <>  
          <Navbar className="navbar" variant='dark'  sticky='top' collapseOnSelect expand='md'>
            <Container>
              <Navbar.Brand   as={Link} to="/home"><span className="brand">TravelBd</span></Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
              <Nav className='ms-auto navlink d-md-flex d-block flex-colums align-items-center'>
                <NavLink activeClassName="selected"  to="/home">Home</NavLink>
                 {user?.email && <div className="d-md-flex">
                   <NavLink activeClassName="selected"  to="/myorder">MyOrder</NavLink>
                 <NavLink activeClassName="selected"  to="/manageallorder">ManageAllOrder</NavLink>
                 <NavLink activeClassName="selected" to="/addoffer">AddOffer</NavLink>
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