import React, { useState } from 'react';
import ThemeToggle from './utils/ThemeToggle';
import { HomeLink, AboutLink, ContactLink } from './Navlist';
import { MdDensityMedium as MenuIcon } from 'react-icons/md';
import { createPortal } from 'react-dom';
// import '../styles/navbar.scss';


export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div id="drop-down-menu">
      <button
        id="menu-icon-button"
        onClick={handleMenuClick}
      >
        <MenuIcon />
      </button>
      {menuOpen && createPortal(
        <div id="menu-list">
          <ThemeToggle closeMenu={handleMenuClick} />
          <HomeLink closeMenu={handleMenuClick} />
          <ContactLink closeMenu={handleMenuClick}/>
          <AboutLink closeMenu={handleMenuClick}/>
        </div>,
        document.getElementById("navbar")
      )}
    </div>
  )
}