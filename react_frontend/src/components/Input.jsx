import React from 'react'
import { GeneralContext } from '../context';
import toast,{Toaster} from 'react-hot-toast';
export const Input = () => {  
  const {actualChat, agregarMensaje} = React.useContext(GeneralContext);
  const [text, setText] = React.useState("");
  const {ws_receive,ws_send} = React.useContext(GeneralContext);
  const sendMessage= (event) =>{
    const msg={"receiver":actualChat.usuario,"msg":text}
    ws_send.send(JSON.stringify(msg))
    agregarMensaje(actualChat.usuario,text);
    setText("");
  }
  
  ws_receive.onmessage=function (event){
    const json = JSON.parse(event.data);
    try {
      if(actualChat.usuario!==json.sender){
        toast(`Nuevo mensaje de ${json.sender}!`, {
          icon: '🔔',
        });
      }
      agregarMensaje(json.sender,json.message,"r")
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='input bg-dark text-dark d-flex align-items-center justify-content-between'>
      <div><Toaster/></div>
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
