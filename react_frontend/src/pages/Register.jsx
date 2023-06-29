import React from 'react'
//import 'bootstrap/dist/css/bootstrap.css';
import {Link, useNavigate} from "react-router-dom";
import '../styles/Styles.scss';
import axios from 'axios';

async function addUser(user,pass){
  const axio = axios.create({baseURL: 'http://127.0.0.1:8000'});
  try{
    const response = await axio.post('/register',{name:user,password:pass});
    //console.log('response data  ', response.data)
    return response.data;
  }
  catch(e){
    return null;
  }
} 

async function isUser(user){
  const axio = axios.create({baseURL: 'http://127.0.0.1:8000'});
  try{
    const response = await axio.get(`/mgdb/is-user/${user}`);
    console.log('response data  ', response.data)
    return response.data;
  }
  catch(e){
    return null;
  }
}


export const Register = () => {
  const [err, setErr] = React.useState(false);
  const [err1, setErr1] = React.useState(false);
  const [err2, setErr2] = React.useState(false);
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordR, setPasswordR] = React.useState("");
  const navigate = useNavigate();
  const handleSubmit= async (event) =>{
    event.preventDefault();
    // aqui la verificacion
    if (!(user === "1")){
      setErr(false);
      if (password === passwordR) {
        setErr1(false);
        //Comprobacion nombre de usuario
        const res=await isUser(user);
        if(res==null){//Error Server
          setErr2(true)
        }
        else if(!res){//usuario disponible
          setErr2(false)
          const id=await addUser(user,password)
          if (id==null) {//error en el server
            setErr2(true);
          }
          else{//Registrador y logeado
            setErr(false)
            setErr2(false);
            navigate(`/home/${user}`);
          }
        }
        setErr(true);
        
      } else{        
        setErr1(true);
      }
    } else{
      setErr(true);
    }

  }
  return (
    <div className='forma d-flex align-items-start justify-content-center bg-secondary'>
        <div className="cont overflow-hidden d-flex border mt-4 rounded-4" >
            <div className=" d-flex flex-column align-items-center fromWrapper bg-primary">
              <span className='logo text-white fw-bold fs-1'>SisDis G4</span>
              <span className='title text-white fw-bold fs-4'>Registrar </span>
              <form onSubmit={handleSubmit}>
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
              <div className="mb-2">
                <label className="fw-bold text-white form-label">Contraseña:</label>
                <input type="password" 
                  placeholder='Escriba una contraseña...' 
                  className="form-control" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}  
                  required
                />
              </div>
              <div className="mb-1">
                <label className="fw-bold text-white form-label">Repita la Contraseña:</label>
                <input type="password" 
                  placeholder='Repita la contraseña...' 
                  className="form-control" 
                  value={passwordR}
                    onChange={(e) => setPasswordR(e.target.value)}  
                  required
                />
                <div className="p-1 mt-2 lh-1 text-white bg-dark rounded form-text small">
                Su contraseña debe tener entre 8 y 20 caracteres, contener letras y números, y no debe contener espacios, caracteres especiales ni emoji.
                </div>
              </div>
              <div className="mb-2">
                {err && <div className='alert alert-danger p-1 mb-1'>El usuario ya existe</div>}
                {err1 && <div className='alert alert-danger p-1 mb-1'>Su contraseña no coincide </div>}
                {err2 && <div className='alert alert-danger p-1 mb-1'>Error en el servidor, intentelo luego </div>}
              </div>
              <button type="submit" className="btn btn-dark">Registrar</button>  
              </form>
              <div className="d-flex text-white">
              <p className='p-1'>Ya tienes una cuenta</p> <Link className='text-white p-1' to={"/login"}> Ingresar </Link>
              </div>
              
            </div>
        </div>
    </div>
  )
}
