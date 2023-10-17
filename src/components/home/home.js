import React, { useEffect, Suspense } from 'react';
const Resume = React.lazy(() => import('./Resume'));
import '../../styles/home.scss';
import { useTheme } from '../../styles/ThemeProvider';
import Seperator from '../utils/Seperator';
import Carousel from '../utils/Carousel';
import Paper from '../utils/Paper';
import Card from '../utils/Card';
import JSIcon from '../../images/javascript.svg';
import ReactIcon from '../../images/react.svg';
import ReduxIcon from '../../images/redux.svg';
import CSS3Icon from '../../images/css3.svg';
import SassIcon from '../../images/sass.svg';
import HTML5Icon from '../../images/html5.svg';
import NodeJSIcon from '../../images/nodejs.svg';
import ExpressIcon from '../../images/express.svg';
import JavaIcon from '../../images/java.svg';
import SpringIcon from '../../images/spring.svg';
import PostgreIcon from '../../images/postgresql.svg';
import JestIcon from '../../images/jest.svg';
import BabelIcon from '../../images/babel.svg';
import MavenIcon from '../../images/apache-maven.svg';
import WebpackIcon from '../../images/webpack-icon.svg';


export default function Home({ getCurrentSection }) {
  const { theme } = useTheme();
  const windowWidth = window.innerWidth;


  const techStackData = [
    { iconSrc: JSIcon, title: "Javascript", body: "ES5, ES6+" },
    { iconSrc: ReactIcon, title: "React" },
    { iconSrc: ReduxIcon, title: "Redux" },
    { iconSrc: CSS3Icon, title: "CSS3" },
    { iconSrc: SassIcon, title: "Sass" },
    { iconSrc: HTML5Icon, title: "HTML5" },
    { iconSrc: NodeJSIcon, title: "NodeJS" },
    { iconSrc: ExpressIcon, title: "ExpressJS" },
    { iconSrc: JavaIcon, title: "Java" },
    { iconSrc: SpringIcon, title: "Spring", body: "Spring and Spring-boot" },
    { iconSrc: PostgreIcon, title: "PostgreSQL" },
    { iconSrc: JestIcon, title: "Jest" },
    { iconSrc: BabelIcon, title: "Babel" },
    { iconSrc: MavenIcon, title: "Maven" },
    { iconSrc: WebpackIcon, title: "Webpack5" },
  ];

  const highlightData = [
    {body:"Integrated in-house react component libraries, elevating the UI's responsiveness and user-centric features while aligning to business requirements."},
    {body:"Enhanced the UI to conditionally render based on new data received from API calls, by extending the Redux reducer to manage new state"},
    {body:"Evaluated proposed technical solutions, based on consuming application's change requests, to size and strategize for the project efforts."},
    {body:"Proactively acquired proficiency in Java and Spring Boot while on the job, demonstrating the initiative to become a valuable contributor to a newly assigned team"},
    {body:"Delivered a reliable API service within prescribed timeframes, enhancing its stability and reducing risk of post-release issues through unit testing with JUnit, while attributing to 86% code coverage"},
    {body:"Contributed to successful large-scale, multi-application deployments, orchestrating precise timing and coordination through effective utilization of Jira and Cutover"},
    {body:"Championed the adoption of proper HTTP methodology, resulting in the adherence to coding best practices throughout the development process"},
    {body:"Authored a comprehensive regression testing suite, enabling efficient post-deployment end-to-end testing of critical API services, achieving 75% code coverage using Cucumber and TestNG"},
  ];

  const overflowItems = (data) => {
    const count = data.length % 3;
    return data.splice(data.length - count, data.length);
  };

  const techsStackDataLastRow = overflowItems(techStackData);

  const style = {
  };

  useEffect(() => {
    getCurrentSection();
  }, [windowWidth]);

  return (
    <div
      className="home-container"
      style={style}
    >
      <h1>Home Page</h1>
      <section id="resume-section">
        <h3>Resume</h3>
        <Suspense fallback={<div>Loading...</div>}>
          < Resume />
        </Suspense>
      </section>
      <Seperator type="Hiker" />
      <section id="highlights-section">
        <h3>Highlights</h3>
        <Carousel id="highlight-car" cardData={highlightData} />
      </section>
      <Seperator type="Biker" />
      <section id="tech-stack-section">
        <h3>Tech Stack</h3>
        <Paper>
          <div className="card-data-grid">
            {techStackData.map((data, index) => {
              const { title, body, iconSrc } = data;
              return (
                <Card key={index} title={title} body={body} iconSrc={iconSrc} />
              )
            })}
          </div>
          <div className="lastRow">
            {techsStackDataLastRow.map((data, index) => {
              const { title, body, iconSrc, link, linkText } = data;
              return (
                <Card key={index} title={title} body={body} iconSrc={iconSrc} link={link} linkText={linkText} />
              )
            })}
          </div>
        </Paper>
      </section>
    </div>
  )
}