import React from 'react';
import { useNavigate } from "react-router-dom";

const ProtectedRouteAuth = ({ component: Component, ...props  }) => {
    let history = useNavigate();
  return (
    props.loggedIn ?  history(-1)  : <Component {...props} />
)}

export default ProtectedRouteAuth;