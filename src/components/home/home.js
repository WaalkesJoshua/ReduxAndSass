import React from 'react';
import Resume from './Resume';
import '../../styles/home.scss'


export default function Home () {

  return (
    <div
    className="home-container"
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    }}>
    <h1>Home Page</h1>
    < Resume/>
    </div>
  )
}