import React from 'react';
import {useNavigate, useParams} from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useParams();
  const logOut = () => {
    navigate("/login")
  }
  
  return (
    <div className='navbar d-flex align-items-center p-2 justify-content-between bg-dark text-light'>
      <span className='logo'>SisDis G4</span>
      <div className="user mb-2">
        <span className='p-2 text-sm'>{user}</span>
        <button className='btn btn-dark border border-light' onClick={logOut}>Cerrar Sesión</button>
      </div>
      
    </div>

  )
}
