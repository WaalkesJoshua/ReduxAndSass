import React from 'react';
import Card from './Card';

export default function Carousel ({ cardData }) {

  const dataArr = Array.isArray(cardData) ? cardData : [cardData];

  return (
    <>
      {dataArr.map((data, index) => {
        const { title, body } = data;
        return (
          <Card key={index} title={title} body={body} />
        )
      })}
    </>
  )
}