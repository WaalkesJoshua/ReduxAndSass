import React from 'react';
import HikerSVG from '../../images/hiker.svg';
import BikerSVG from '../../images/bike.svg';

export default function Seperator({ type }) {
  let SVG = null;
  switch (type) {
    case "Hiker":
      SVG = HikerSVG;
      break;
    case "Biker":
      SVG = BikerSVG;
      break;
    default:
      SVG = null;
  }

  return (
    <div className="svg-seperator">
      <div className="repeating-svg-container">
        <p className="repeating-svg" />
        <p className="repeating-svg" />
        <p className="repeating-svg" />
        <p className="repeating-svg" />
        <p className="repeating-svg" />
        <img className="repeating-svg" src={SVG} alt={`${type} SVG`} />
        <p className="repeating-svg" />
        <p className="repeating-svg" />
        <p className="repeating-svg" />
        <p className="repeating-svg" />
      </div>
    </div>
  )
}