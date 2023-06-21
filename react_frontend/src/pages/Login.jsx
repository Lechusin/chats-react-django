import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {useNavigate} from "react-router-dom";
import '../styles/Styles.scss';

export const Login = () => {
  const navigate = useNavigate();
  const logIn= (event) =>{
    event.preventDefault();
    console.log("Entro")
    navigate("/home")
  }
  return (
    <div className='forma d-flex align-items-center justify-content-center bg-secondary'>
        <div className="cont overflow-hidden d-flex border  rounded-4" >
            <div className=" d-flex flex-column align-items-center fromWrapper bg-primary">
              <span className='fw-bold text-white fs-1'>SisDis G4</span>
              <span className='fw-bold text-white fs-4'>Ingresar </span>
              <form onSubmit={logIn}>
              
                <div className="mb-2">
                  <label className="fw-bold text-white form-label">Usuario:</label>
                  <input type="text" placeholder='Escriba su usuario...' className="form-control"/>
                </div>
                <div className="mb-2">
                  <label className="fw-bold text-white form-label">Contraseña:</label>
                  <input type="password" placeholder='Escriba su contraseña...' className="form-control"/>
                </div>
                
                <button type="submit" className="btn btn-dark">Ingresar</button>  
              </form>
              <div className="d-flex p-1 text-white form-text">
                <p>No tienes una cuenta</p> <button className='btn btn-link text-white' onClick={() => navigate("/register")}>Registrarse</button>
              </div>
            </div>
        </div>
    </div>
  )
}
