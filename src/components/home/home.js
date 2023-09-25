import React from 'react';
import Resume from './Resume';


export default function Home () {

  //created resumeReducer to handle pulling data from google apis

  return (
    <div
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