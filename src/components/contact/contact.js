import React, { useEffect } from 'react';
import Paper from '../utils/Paper';
import Card from '../utils/Card';
import '../../styles/contact.scss';
import LinkedIn from '../../images/linkedin.svg';
import Github from '../../images/github.svg';
import Gmail from '../../images/gmail.svg';
import Iphone from '../../images/iphone.svg';


export default function Contact({ getCurrentSection }) {

  const emailBody = 'Hey%20Josh%2C%OA%OAI%20saw%20your%20portfolio%20page%20and%20wanted%20to%20reach%20out.%OA%OACheers%2C%OA[insert%20name%20]';

  let contactData = [
    { title: 'LinkedIn', link: 'https://www.linkedin.com/in/joshua-waalkes', linkText:'My LinkedIn', iconSrc: LinkedIn},
    { title: 'Github', link: 'https://github.com/WaalkesJoshua/MyPortfolio', linkText: "Source Code", iconSrc: Github},
    { title: 'Email', link: `mailto:josh.waalkes21@gmail.com?subject=Saying%20Hello&body=${emailBody}`, linkText: 'Email me @ \n Josh.Waalkes21@gmail.com', iconSrc: Gmail},
    { title: 'Phone', body: 'Call or Text! 970-623-9866', iconSrc: Iphone},
  ];

  const overflowItems = (data) => {
    const count = data.length % 3;
    return data.splice(data.length - count, data.length);
  }

  const lastRow = overflowItems(contactData);

  useEffect(() => {
    getCurrentSection();
  }, []);

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <section id="contact-cards">
        <h3>Lets Connect</h3>
        <Paper>
          <div className="card-data-grid">
            {contactData.map((data, index) => {
              const { title, body, iconSrc, link, linkText } = data;
              return (
                <Card key={index} title={title} body={body} iconSrc={iconSrc} link={link} linkText={linkText} />
              )
            })}
          </div>
          <div className="lastRow">
            {lastRow.map((data, index) => {
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