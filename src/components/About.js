import React, { useEffect } from 'react';
import Carousel from './utils/Carousel';
import Paper from './utils/Paper';
import Seperator from './utils/Seperator';
import '../styles/about.scss';
import anglesLanding from '../images/jpgs/angels-landing.jpg';
import archJump from '../images/jpgs/arch-jump.jpg';
import coupleBridge from '../images/jpgs/couple-bridge.jpg';
import coupleQuandry from '../images/jpgs/couple-quandry.jpg';
import goggles from '../images/jpgs/goggles.jpg';
import jaimeBackpack from '../images/jpgs/jaime-backpack.jpg';
import jaimeHammock from '../images/jpgs/jaime-hammock.jpg';
import jeepTree from '../images/jpgs/jeep-tree.jpg';
import laSals from '../images/jpgs/laSals.jpg';
import libertyGoats from '../images/jpgs/liberty-goats.jpg';
import palisadeRim from '../images/jpgs/palisade-rim.jpg';
import quandrySummit from '../images/jpgs/quandry-summit.jpg';
import wilsonCamp from '../images/jpgs/wilson-peak-camp.jpg';
import wilsonLake from '../images/jpgs/wilson-peak-lake.jpg';
import estherPumpkin from '../images/jpgs/esther-pumkins.jpeg';
import familyWedding from '../images/jpgs/family-wedding.jpeg';
import joshEsther from '../images/jpgs/josh-esther.jpeg';






export default function About({ getCurrentSection }) {

  useEffect(() => {
    getCurrentSection();
  }, []);

  const interestData = [
    {title: 'Hiking', body: 'The Go-To for any hangout. As long as it\'s not too hot, I love a good nature walk!'},
    {title: 'Mountain Biking', body: 'I\'m pretty new to Mtn Biking, but my family is big into it so I\'m just working on not going over the handlebars!'},
    {title: 'Software Engineering', body: 'I know, I know... Boo for saying "Software Engineering" as an interest, but I do love it. There\'s a reason I changed career paths!'},
    {title: 'Disc Golf', body: 'I LOVE disc golf. As of late, I rarely have time for it, but I am obsessed with this sport!'},
    {title: 'Health', body: 'Having a family sure puts things in perspective. I wouldn\'t say health is something fun, but I do put quite a bit of effort towards it.'},
    {title: 'Fishing', body: 'I haven\'t been fishing in a while, but some of the most peaceful days I\'ve ever experienced were with a flyrod in hand.'},
    {title: 'Backpacking', body: 'I love getting out, testing my mettle and learning better ways to spend extended time in nature. All about good exercise and great company!'},
  ];

  return (
    <div className="about-container">
      <h1>Learn About Me</h1>
      <section id="interest-carousel">
        <h3>Interests</h3>
        <Carousel cardData={interestData} />
      </section>
      <section id="trips-family">
        <h3>Trips And Family</h3>
        <div className="pic-columns">
          <Paper>
            <img className="col-picture" src={anglesLanding} loading="lazy" />
            <img className="col-picture" src={familyWedding} loading="lazy" />
            <img className="col-picture" src={goggles} loading="lazy" />
            <img className="col-picture" src={jaimeBackpack} loading="lazy" />
            <img className="col-picture" src={estherPumpkin} loading="lazy" />
            <img className="col-picture" src={jaimeHammock} loading="lazy" />
            <img className="col-picture" src={wilsonLake} loading="lazy" />
            <img className="col-picture" src={jeepTree} loading="lazy" />
          </Paper>
          <Paper>
            <img className="col-picture" src={coupleBridge} loading="lazy" />
            <img className="col-picture" src={libertyGoats} loading="lazy" />
            <img className="col-picture" src={coupleQuandry} loading="lazy" />
            <img className="col-picture" src={palisadeRim} loading="lazy" />
            <img className="col-picture" src={archJump} loading="lazy" />
            <img className="col-picture" src={quandrySummit} loading="lazy" />
            <img className="col-picture" src={laSals} loading="lazy" />
            <img className="col-picture" src={joshEsther} loading="lazy" />
            <img className="col-picture" src={wilsonCamp} loading="lazy" />
          </Paper>
        </div>
      </section>
    </div>
  )
}