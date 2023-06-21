import React from 'react'

export const Input = () => {
  return (
    <div className='input bg-dark text-dark d-flex align-items-center justify-content-between'>
      <textarea  placeholder='Escribe algo...' className='overflow-hidden border-0  text-break bg-light rounded'></textarea>
      <div className="send p-2">
        <button className='btn btn-dark border borde-light p-2'>Enviar</button>
      </div>
    </div>
  )
}
