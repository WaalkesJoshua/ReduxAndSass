import React from 'react';
import {HomeLink, AboutLink, ContactLink} from './Navlist';
import Menu from './Menu';
import {useTheme} from '../styles/ThemeProvider';


export default function Navbar () {
  const {theme} = useTheme();

  return (
    <>
    <Menu />
      <button>
        <HomeLink/>
      </button>
      <button>
        <ContactLink/>
      </button>
      <button>
        <AboutLink/>
      </button>
    </>
  )
}