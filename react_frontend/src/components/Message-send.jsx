import React from 'react'

export const MessageS = ({msg=''}) => {
  return (
    <div className='message m-1 d-flex justify-content-end' >
      <div className="messageContent m-1 alert alert-primary p-0 rounded border border-primary">
        <p className='p-1' > {msg} </p>
      </div>
      
    </div>
  )
}