import React, { useContext } from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';


const PrivateRouter = () => {
  const { currentUser } = useContext(AuthContext);
  return ( currentUser ? <Outlet/> : <Navigate to='/devblog/login' />);
}

export default PrivateRouter;