import React from 'react';
import { HomeLink, AboutLink, ContactLink } from './Navlist';
import Menu from './Menu';
import { useTheme } from '../styles/ThemeProvider';


export default function Navbar({ sections }) {
  const { theme } = useTheme();


  const navbarStyle = {
    backgroundColor: theme.primary
  }

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div
      id="navbar"
      style={navbarStyle}
    >
      <Menu />
      {sections.map((section) => {
        return (
          <button
            className="navbar-button"
            key={section.id}
            // style={buttonStyle}
            onClick={() => scrollToSection(section.id)}
          >
            {section.heading}
          </button>
        )
      })}
    </div>
  )
}