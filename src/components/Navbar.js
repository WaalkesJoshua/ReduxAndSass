import React from 'react';
import {HomeLink, AboutLink, ContactLink} from './Navlist';
import Menu from './Menu';


export default function Navbar () {
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