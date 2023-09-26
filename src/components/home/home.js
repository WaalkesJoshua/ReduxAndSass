import React, { useEffect } from 'react';
import Resume from './Resume';
import '../../styles/home.scss';
import { useTheme } from '../../styles/ThemeProvider';


export default function Home({ getCurrentSection }) {
  const { theme } = useTheme();

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
        < Resume />
      </section>
    </div>
  )
}