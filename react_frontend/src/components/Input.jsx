import React from 'react'
import { GeneralContext } from '../context'


export const Input = () => {  
  const {actualChat, agregarMensaje} = React.useContext(GeneralContext);
  const [text, setText] = React.useState("");
  const sendMessage= (event) =>{
    agregarMensaje(actualChat.usuario,text);
    setText("");
  }
  return (
    <div className='input bg-dark text-dark d-flex align-items-center justify-content-between'>
      <textarea  
        placeholder='Escribe algo...' 
        className='overflow-hidden border-0  text-break bg-light rounded'
        value={text}
        onChange={(e) => setText(e.target.value)}>
      </textarea>
      <div className="send p-2">
        <button className='btn btn-dark border borde-light p-2' onClick={sendMessage}>Enviar</button>
      </div>
      
    </div>
  )
}
