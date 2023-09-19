import React from 'react';
import { HomeLink, AboutLink, ContactLink } from './Navlist';

export default function Menu() {

  return (
    <>
      <ul>
        <li>
          <button>
            <HomeLink />
          </button>
        </li>
        <li>
          <button>
            <ContactLink />
          </button>
        </li>
        <li>
          <button>
            <AboutLink />
          </button>
        </li>
      </ul>
    </>

  )
}