import React from 'react';
import { Sidebar } from '../components/Sidebar';
import { Chat } from '../components/Chat';
//import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Styles.scss';

export const Home = () => {
  return (
    <div className='home d-flex align-items-center justify-content-center bg-secondary' >
      <div className='cont overflow-hidden d-flex border border-secondary rounded-4'>
        <Sidebar/>
        <Chat/>
      </div>
      
    </div>
  )
}
