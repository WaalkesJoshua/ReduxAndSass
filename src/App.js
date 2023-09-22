import React from 'react';
import './styles/styles.scss';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import { useTheme } from './styles/ThemeProvider';

export default function App() {
  const { theme } = useTheme();

  const style = {
    backgroundColor: theme.background,
    color: theme.text,
    primaryColor: theme.primary,
    secondaryColor: theme.secondary
  }

  return (
    <div className="app" style={ style }>
      <Router homepage="/ReduxAndSass">
        <Navbar />
        <Routes>
          <Route exact path='/home' element={< Home />} />
          <Route path='*' element={< Navigate to='/home' />} />
          <Route exact path='/about' element={< About />} />
          <Route exact path='/contact' element={< Contact />} />
        </Routes>
      </Router>
    </div>
  )
}
