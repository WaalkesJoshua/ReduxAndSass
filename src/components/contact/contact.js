import React, { useEffect } from 'react';
import Paper from '../utils/Paper';


export default function Contact({ getCurrentSection }) {

  const testData = [{ title: "cool thing", body: "This is a body about a cool thing" },
  { title: "another thing", body: "This is a body about a another thing" },
  { title: "last one", body: "This is a body about the last thing" }]

  useEffect(() => {
    getCurrentSection();
  }, []);

  return (
    <>
      <h1>Contact Page</h1>
      <section id="contact-cards">
        <h3>Lets Connect</h3>
        <Paper cardData={testData} />
      </section>
    </>
  )
}