import React from 'react';
import { useTheme } from '../../styles/ThemeProvider';

export default function Card({ title, body, id, iconSrc }) {
  return (
    <div className="card" id={id || ""} >
      {iconSrc ?
        <img className="card-icon" src={iconSrc} />
        : null}
      {title ?
        <div className="card-title">{title}</div>
        : null}
      {body ?
        <div className="card-body">{body} </div>
        : null}
    </div>
  )
}