import React from 'react'
import { Messages } from './Messages'
import { Input } from './Input'
import { GeneralContext } from '../context'


export const Chat = () => {
  const {actualChat} = React.useContext(GeneralContext);
  return (
    <div className='chat bg-light'> 
      <div className="chatInfo d-flex align-items-center justify-content-space-between bg-primary text-light">
        <span>{actualChat.usuario}</span>
      </div>
      <Messages/>
      <Input/>
    </div>
    
  )
}
