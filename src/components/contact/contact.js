import React from 'react';
import Paper from '../utils/Paper';


export default function Contact () {

  const testData = [{title: "cool thing", body: "This is a body about a cool thing"},
    {title: "another thing", body: "This is a body about a another thing"},
    {title: "last one", body: "This is a body about the last thing"}]

  return (
    <>
    <h1>Contact Page</h1>
    <Paper cardData={testData} />
    </>
  )
}