import React from 'react';
import Carousel from '../utils/Carousel';


export default function About () {

  const aboutMeData = [
    {title: "something about me", body: "aint that neat"},
    {title: "something else", body: "wow"},
    {title: "all about me", body: "how about that"},
    {title: "me me me", body: "aint that cool"}
  ]

  return (
    <>
    <h1>About Page</h1>
    <Carousel cardData={aboutMeData} />
    </>
  )
}