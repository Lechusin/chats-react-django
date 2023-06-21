import React from 'react'
import { MessageR } from './Message-received'
import { MessageS } from './Message-send'
export const Messages = () => {
  return (
    <div className='messages p-2 bg-ligth overflow-auto'>
        <MessageR msg=' hola'/>    
        <MessageS msg='hola'/>
        <MessageR msg=' como estasf dgdgf dsdhfgdf fhdh fgdggf gfhghf'/>
    </div>
    
  )
}
