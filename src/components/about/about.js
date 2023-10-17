import React, { useEffect } from 'react';
import Carousel from '../utils/Carousel';
import Seperator from '../utils/Seperator';
import '../../styles/about.scss';


export default function About({ getCurrentSection }) {

  useEffect(() => {
    getCurrentSection();
  }, []);

  const interestData = [];
  const tripData = [];
  const familyData = [];

  

  return (
    <div className="about-container">
      <h1>Learn About Me</h1>
      <section id="interest-carousel">
        <h3>Interests</h3>
        <Carousel cardData={interestData} />
      </section>
      <Seperator type="Biker"/>
      <section id="trips-carousel">
        <h3>Trips</h3>
        <Carousel cardData={tripData} />
      </section>
      <Seperator type="Hiker"/>
      <section id="family-carousel">
        <h3>Family</h3>
        <Carousel cardData={familyData} />
      </section>
    </div>
  )
}