import React from 'react'
import { Messages } from './Messages'
import { Input } from './Input'

export const Chat = () => {
  return (
    <div className='chat bg-light'> 
      <div className="chatInfo d-flex align-items-center justify-content-space-between bg-primary text-light">
        <span>JUAN</span>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}
