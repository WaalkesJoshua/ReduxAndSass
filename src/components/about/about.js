import React, {useEffect} from 'react';
import Carousel from '../utils/Carousel';


export default function About ({getCurrentSection}) {

  useEffect(() => {
    getCurrentSection();
  }, []);

  const aboutMeData = [
    {title: "something about me", body: "aint that neat"},
    {title: "something else", body: "wow"},
    {title: "all about me", body: "how about that"},
    {title: "me me me", body: "aint that cool"}
  ];

  return (
    <>
    <h1>About Page</h1>
    <section id="aboutMeCarousel">
      <h3>Fun Facts</h3>
    <Carousel cardData={aboutMeData} />
    </section>
    </>
  )
}