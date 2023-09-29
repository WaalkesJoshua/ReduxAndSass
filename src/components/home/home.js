import React, { useEffect, Suspense } from 'react';
const Resume = React.lazy(() => import('./Resume'));
import '../../styles/home.scss';
import { useTheme } from '../../styles/ThemeProvider';
import Seperator from '../utils/Seperator';
import Carousel from '../utils/Carousel';
import Paper from '../utils/Paper';
import Card from '../utils/Card';


export default function Home({ getCurrentSection }) {
  const { theme } = useTheme();

  const highlightData = [
    { title: "something about me", body: "aint that neat" },
    { title: "something else", body: "wow" },
    { title: "all about me", body: "how about that" },
    { title: "me me me", body: "aint that cool" }
  ];

  const techStackData = [
    { title: "tech1", body: "some techf" },
    { title: "tech2", body: "wow, how techy" },
    { title: "tech3", body: "how about that tech" },
    { title: "tech4", body: "cool stuff" }
  ];

  const style = {
  };

  useEffect(() => {
    getCurrentSection();
  }, []);

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
      <Seperator />
      <section id="highlights-section">
        <h3>Highlights</h3>
        <Carousel id="highlight-car" cardData={highlightData} />
      </section>
      <Seperator />
      <section id="tech-stack-section">
        <h3>Tech Stack</h3>
        <Paper>
          <div className="card-data-grid">
            {techStackData.map((data, index) => {
              const { title, body } = data;
              return (
                <Card key={index} title={title} body={body} />
              )
            })}
          </div>
        </Paper>
      </section>
    </div>
  )
}