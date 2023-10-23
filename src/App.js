import React, { useState, useEffect } from 'react';
import './styles/globalStyles.scss';
import './styles/utilStyles.scss';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/Contact/Contact';
import { useTheme } from './styles/ThemeProvider';


export default function App() {
  const { theme } = useTheme();
  const [sections, setSections] = useState([]);
  const isMobile = (window.innerWidth <= 768);

  const getCurrentSection = () => {
    let sections = Array.from(document.querySelectorAll('section')).map((section) => ({
      id: section.id,
      heading: section.querySelector('h3').textContent
    }));

    setSections(sections);
  }

  const style = {
    '--global-background': theme.background,
    '--theme-primary': theme.primary,
    '--theme-secondary': theme.secondary,
    '--theme-highlight': theme.highlight,
    '--theme-error': theme.error,
    '--theme-button': theme.button,
    '--theme-shadow': theme.boxShadow,
    '--theme-text': theme.text,
    '--theme-altText': theme.altText
  }

  return (
    <div className="app" style={style}>
      <Router basename="/MyPortfolio">
        <Navbar sections={sections} isMobile={isMobile} />
        <Routes>
          <Route path='/' element={< Home getCurrentSection={getCurrentSection} />} />
          <Route exact path='/about' element={< About getCurrentSection={getCurrentSection} />} />
          <Route exact path='/contact' element={< Contact getCurrentSection={getCurrentSection} />} />
        </Routes>
      </Router>
    </div>
  )
}
