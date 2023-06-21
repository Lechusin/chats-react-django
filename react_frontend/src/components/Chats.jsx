import React from 'react'

export const Chats = () => {
  return (
    <div className='chats p-1'>
      <div className="userChat d-flex align-items-center justify-content-center btn btn-primary">
        <div className="userChatInfo">
          <span>Mateo</span>
        </div>
      </div>
      <div className="userChat d-flex align-items-center justify-content-center btn btn-primary" >
        <div className="userChatInfo">
          <span>Juan</span>
        </div>
      </div>
    </div>
    
  )
}
