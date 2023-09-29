import React from 'react';
import { HomeLink, AboutLink, ContactLink } from './Navlist';
import Menu from './Menu';
import { useTheme } from '../styles/ThemeProvider';
import '../styles/navbar.scss';


export default function Navbar({ sections }) {
  const { theme } = useTheme();


  const style = {
    '--global-background': theme.background,
    '--theme-primary': theme.primary,
    '--theme-secondary': theme.secondary,
    '--theme-highlight': theme.highlight,
    '--theme-error': theme.error,
    '--theme-button': theme.button,
    '--theme-text': theme.text,
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
      style={style}
    >
      <span id="wave" />
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