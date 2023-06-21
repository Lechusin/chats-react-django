import React from 'react'

export const MessageS = ({msg=''}) => {
  return (
    <div className='message p-2 d-flex justify-content-end' >
      <div className="messageContent rounded border border-primary">
        <p className='p-2' > {msg} </p>
      </div>
      
    </div>
  )
}
