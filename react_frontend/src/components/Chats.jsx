import React from 'react';
import { GeneralContext } from '../context';

export const Chats = () => {
  const { chats, setChats, setActualChat } = React.useContext(GeneralContext);

  return (
    <div className='chats p-1'>
      {
        chats ? (
          chats.map((chat) => (
            <div className="userChat d-flex align-items-center justify-content-center btn btn-primary" key={chat.usuario} onClick={()=>setActualChat(chat)}>
              <div className="userChatInfo">
                <span>{chat.usuario}</span>
              </div>
            </div>
          ))
        ): (
          <div></div>
        )
        
      }
    </div>

  )
}
