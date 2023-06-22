import React from 'react'
import { MessageR } from './Message-received'
import { MessageS } from './Message-send'
import { GeneralContext } from '../context'
export const Messages = () => {
  const {actualChat} = React.useContext(GeneralContext);
  const hora = new Date()
  return (
    <div className='messages p-2 bg-ligth overflow-auto'>
        {
          actualChat.mensajes ? (
            actualChat.mensajes.map((mensaje)=>(
              mensaje.tipo==="e" ? (
                <MessageS key={`${mensaje.mensaje} ${hora.getTime()}`} msg={mensaje.mensaje}  />
              ) : (
                <MessageR key={`${mensaje.mensaje} ${hora.getTime()}`} msg={mensaje.mensaje}  />
              )
            ))
          ) : (
          <div className="d-flex justify-content-center m-5">
            <div className="alert alert-success mt-5">
              <h1 className="alert-heading">Bienvenido a SisDis G4</h1>
              <p>La aplicación SisDis G4, permite la comunicación entre usuarios mediante la plataforma Rabbit MQ</p>
              <hr/>
              <p className="mb-0">Selecione un Chat para iniciar la conversación</p>
            </div>
          </div>
          )
        }
    </div>
    
  )
}
