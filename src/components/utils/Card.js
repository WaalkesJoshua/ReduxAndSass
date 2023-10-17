import React from 'react';
import { useTheme } from '../../styles/ThemeProvider';

export default function Card({ title, body, id, iconSrc, link, linkText }) {
  return (
    <div className="card" id={id || ""} >
      {iconSrc ?
        <img className="card-icon" src={iconSrc} loading="lazy" />
        : null}
      {title ?
        <div className="card-title">{title}</div>
        : null}
      {body ?
        <div className="card-body">{body} </div>
        : null}
      {link && linkText ?
        <a className="card-link" href={link} target="_blank">{linkText} </a>
        : null}
    </div>
  )
}