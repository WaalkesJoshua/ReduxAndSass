import React from 'react';
import { HomeLink, AboutLink, ContactLink } from './Navlist';

export default function Menu() {

  const style = {
    backgroundColor: 'red'
  }

  return (
    <div style = {style}>
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
    </div>

  )
}