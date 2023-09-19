import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';

export default function App() {
  return (
    <Router>

      <aside>
        < Menu />
      </aside>
      <Routes>
        <Route exact path='/home' element={< Home />}></Route>
        <Route exact path='/about' element={< About />}></Route>
        <Route exact path='/contact' element={< Contact />}></Route>
        <Route path='*' element={<Navigate to='/home' />}>
        </Route>
      </Routes>
    </Router>
  )
}
