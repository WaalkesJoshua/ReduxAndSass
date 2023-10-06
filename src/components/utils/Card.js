import React from 'react';
import {useTheme} from '../../styles/ThemeProvider';

export default function Card({ title, body, id }) {

  return (
    <div className="card" id={id || ""} >
      <div className="card-title">{title}</div>
      <div className="card-body">{body} </div>
    </div>
  )
}