import React from 'react'
//import 'bootstrap/dist/css/bootstrap.css';
import {Link, useNavigate} from "react-router-dom";
import '../styles/Styles.scss';

export const Login = () => {
  const navigate = useNavigate();
  const [err, setErr] = React.useState(false);
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const logIn= (event) =>{
    event.preventDefault();
    // validacion de credenciales
    setErr(true);
    navigate(`/home/${user}`);
  }
  return (
    <div className='forma d-flex align-items-start  justify-content-center bg-secondary'>
        <div className="cont overflow-hidden d-flex border mt-4 rounded-4 " >
            <div className=" d-flex flex-column align-items-center fromWrapper bg-primary">
              <span className='fw-bold text-white fs-1'>SisDis G4</span>
              <span className='fw-bold text-white fs-4'>Ingresar </span>
              <form onSubmit={logIn}>
              
                <div className="mb-2">
                  <label className="fw-bold text-white form-label">Usuario:</label>
                  <input type="text" 
                    placeholder='Escriba su usuario...' 
                    className="form-control"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-1">
                  <label className="fw-bold text-white form-label">Contraseña:</label>
                  <input type="password" 
                    placeholder='Escriba su contraseña...' 
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-2">
                  {err && <div className='alert alert-danger p-1 mb-1'>Sus credenciales son incorrectas </div>}
                </div>
                <button type="submit" className="btn btn-dark">Ingresar</button>  
              </form>
              <div className="d-flex text-white">
                <p className='p-1'>No tienes una cuenta </p> <Link className='text-white p-1' to={"/register"}> Registrarse </Link> 
              </div>
            </div>
        </div>
    </div>
  )
}
