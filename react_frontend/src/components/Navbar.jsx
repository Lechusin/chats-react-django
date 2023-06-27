import React from 'react';
import {useNavigate, useParams} from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useParams();
  const logOut = () => {
    navigate("/login")
  }
  
  return (
    <div className='navbar d-flex p-0 align-items-center justify-content-between bg-dark text-light'>
      <span className='logo  fs-5 p-1'>SisDis G4</span>
      <span></span>
      <div className="user p-1">
        <span className='fs-6 p-1'>{user}</span>
        <button className='btn btn-dark btn-sm border-light p-1' onClick={logOut}>Cerrar Sesión</button>
      </div>
      
    </div>

  )
}
