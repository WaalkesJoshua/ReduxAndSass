import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';

export default function App() {
  return (
    <Router homepage="/ReduxAndSass">
      <Navbar/>
      <Routes>
        <Route exact path='/home' element={< Home />} />
        <Route path='*' element={< Navigate to='/home' />} />

        <Route exact path='/about' element={< About />} />

        <Route exact path='/contact' element={< Contact />} />
      </Routes>
    </Router>
  )
}
