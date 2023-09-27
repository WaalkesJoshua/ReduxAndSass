import React from 'react';
import { HomeLink, AboutLink, ContactLink } from './Navlist';
import Menu from './Menu';
import { useTheme } from '../styles/ThemeProvider';
import '../styles/navbar.scss';


export default function Navbar({ sections }) {
  const { theme } = useTheme();


  const navbarStyle = {
    '--navbar-background': theme.primary,
    '--navbar-button': theme.button,
    '--text-color': theme.text,
    '--portal-border': theme.secondary,
    '--portal-background': theme.highlight,
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
      <div id="navbar-button-container">
      {sections.map((section) => {
        return (
          <button
            className="section-nav-button"
            key={section.id}
            onClick={() => scrollToSection(section.id)}
          >
            {section.heading}
          </button>
        )
      })}
      </div>
    </div>
  )
}