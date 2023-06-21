import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {useNavigate} from "react-router-dom";
import '../styles/Styles.scss';

export const Register = () => {
  const navigate = useNavigate();
  const handleSubmit= (event) =>{
    event.preventDefault();
    console.log("Entro")
    navigate("/login")
  }
  return (
    <div className='forma d-flex align-items-center justify-content-center bg-secondary'>
        <div className="cont overflow-hidden d-flex border  rounded-4" >
            <div className=" d-flex flex-column align-items-center fromWrapper bg-primary">
              <span className='logo text-white fw-bold fs-1'>SisDis G4</span>
              <span className='title text-white fw-bold fs-4'>Registrar </span>
              <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label className="fw-bold text-white form-label">Usuario:</label>
                <input type="text" placeholder='Escriba su usuario...' className="form-control" required/>
              </div>
              <div className="mb-2">
                <label className="fw-bold text-white form-label">Contraseña:</label>
                <input type="password" placeholder='Escriba una contraseña...' className="form-control" required/>
              </div>
              <div className="mb-3">
                <label className="fw-bold text-white form-label">Repita la Contraseña:</label>
                <input type="password" placeholder='Repita la contraseña...' className="form-control" required/>
                <div className="p-2 lh-1 text-white bg-dark rounded form-text small">
                Su contraseña debe tener entre 8 y 20 caracteres, contener letras y números, y no debe contener espacios, caracteres especiales ni emoji.
                </div>
              </div>
              <button type="submit" className="btn btn-dark">Registrar</button>  
              </form>
              <div className="d-flex text-white">
              <p>Ya tienes una cuenta</p> <button className='btn btn-link text-white' onClick={() => navigate("/login")}> Ingresar</button>
              </div>
              
            </div>
        </div>
    </div>
  )
}
