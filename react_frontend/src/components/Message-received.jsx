import React from 'react'

export const MessageR = ({msg=''}) => {
  return (
    <div className='message m-1'>
      <div className="messageContent rounded border border-primary">
        <p className='p-1' > {msg} </p>
      </div>
      
    </div>
  )
}
