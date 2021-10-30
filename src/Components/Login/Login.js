import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { toast } from 'react-toastify';
import useAuth from '../Hooks/useAuth';


const Login = () => {
    const { user, signInUsingGoogle } = useAuth();
    
    // for redirect page previous Route ...
    const location = useLocation();
    const history = useHistory();
    const redirect = location.state?.from || location;

 const handleGoogleBtn = () => {
   signInUsingGoogle().then((result) => {
     history.push(redirect);
        if (user?.email) {
          toast('Login Successfully');
        }
   });

 };

  return (
    <div>
      <title>Login page...</title>
      <button className='my-5 bg-warning btn ' onClick={handleGoogleBtn}>
        Login With Google
      </button>
    </div>
  );
};

export default Login;
