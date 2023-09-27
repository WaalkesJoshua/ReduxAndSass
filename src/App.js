import React, {useState, useEffect} from 'react';
import './styles/globalStyles.scss';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import { useTheme } from './styles/ThemeProvider';


export default function App() {
  const { theme } = useTheme();
  const [sections, setSections] = useState([]);

  const getCurrentSection = () => {
    let sections = Array.from(document.querySelectorAll('section')).map((section) => ({
      id: section.id,
      heading: section.querySelector('h3').textContent
    }));

    setSections(sections);
  }

  const style = {
    backgroundColor: theme.background,
    color: theme.text,
    '--button-background' : theme.button,
    '--button-hover-background': theme.secondary
  }

  return (
    <div className="app" style={ style }>
      <Router basename="/MyPortfolio">
      {/* <Router> */}
        <Navbar sections={sections} />
        <Routes>
          <Route exact path='/home' element={< Home getCurrentSection={getCurrentSection} />} />
          <Route path='*' element={< Navigate to='/home' />} />
          <Route exact path='/about' element={< About getCurrentSection={getCurrentSection} />} />
          <Route exact path='/contact' element={< Contact getCurrentSection={getCurrentSection} />} />
        </Routes>
      </Router>
    </div>
  )
}
