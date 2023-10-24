import React from 'react';
import '../styles/footer.scss';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  }


  return (
    <div id="footer-container">
      <div id="footer-links">
          <a className="footer-link" href="https://github.com/WaalkesJoshua/MyPortfolio" target="_blank">Source Code</a>
          <a className="footer-link" href="https://www.linkedin.com/in/joshua-waalkes" target="_blank">Linked In</a>
      </div>
      <p id="copyright">©2023 Josh Waalkes Portfolio</p>
      <div id="footer-navigation">
        <button className="footer-nav-link" onClick={() => handleClick("/")}>Home</button>
        <button className="footer-nav-link" onClick={() => handleClick("/contact")}>Contact Info</button>
        <button className="footer-nav-link" onClick={() => handleClick("/about")}>About Me</button>
      </div>
    </div>
  )
}