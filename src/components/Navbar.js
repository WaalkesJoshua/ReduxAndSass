import React from 'react';
import {HomeLink, AboutLink, ContactLink} from './Navlist';


export default function Navbar () {
  return (
    <>
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