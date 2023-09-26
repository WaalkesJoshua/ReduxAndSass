import React from 'react';
import ThemeToggle from './utils/ThemeToggle';
import { HomeLink, AboutLink, ContactLink } from './Navlist';

export default function Menu() {

  return (
    <>
      <ThemeToggle />
      <HomeLink />
      <ContactLink />
      <AboutLink />
    </>
  )
}