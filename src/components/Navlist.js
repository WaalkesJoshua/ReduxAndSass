import React from 'react';
import { Link } from 'react-router-dom';


export function HomeLink() {
  return (
    <button>
      <Link to="/home"> An amazing home page </Link>
    </button>
  )
}

export function AboutLink() {
  return (
    <button>
      <Link to="/about"> About this guy </Link>
    </button>
  )
}

export function ContactLink() {
  return (
    <button>
      <Link to="/contact"> Contact Me </Link>
    </button>
  )
}