import React from 'react';
import { useNavigate } from 'react-router-dom';


export function HomeLink({closeMenu}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
    closeMenu();
  }
  return (
    <button onClick={handleClick} className="nav-button">Home</button>
  )
}

export function AboutLink({closeMenu}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about");
    closeMenu();
  }
  return (
    <button onClick={handleClick} className="nav-button">Learn About Me</button>
  )
}

export function ContactLink({closeMenu}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
    closeMenu();
  }
  return (
    <button onClick={handleClick}className="nav-button">Contact Me</button>
  )
}