import React from 'react'

export const MessageR = ({msg=''}) => {
  return (
    <div className='message p-2'>
      <div className="messageInfo">
        <span className='small fst-italic p-2'>Usuario</span>
      </div>
      <div className="messageContent rounded border border-primary">
        <p className='p-2' > {msg} </p>
      </div>
      
    </div>
  )
}
