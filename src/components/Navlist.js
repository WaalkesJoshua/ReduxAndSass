import React from 'react';
import { Link } from 'react-router-dom';

export function HomeLink() {
  return (
    <>
      <Link to="/home"> An amazing home page </Link>
    </>
  )
}

export function AboutLink() {
  return (
    <>
      <Link to="/about"> About this guy </Link>
    </>
  )
}

export function ContactLink() {
  return (
    <>
      <Link to="/contact"> Contact Me </Link>
    </>
  )
}