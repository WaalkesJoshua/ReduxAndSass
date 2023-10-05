import React, { useState } from 'react';
import Card from './Card';


export default function Carousel({ cardData }) {
  const dataArr = Array.isArray(cardData) ? cardData : [cardData];
  const numCards = dataArr.length - 1;
  const [cardIndex, setCardIndex] = useState(0);
  const nextCard = dataArr[cardIndex > 0 ? cardIndex - 1 : numCards];
  const prevCard = dataArr[cardIndex < numCards ? cardIndex + 1 : 0];
  const currentCard = dataArr[cardIndex];


  const handlePrevClick = () => {
    setCardIndex(cardIndex > 0 ? cardIndex - 1 : numCards);
  }

  const handleNextClick = () => {
    setCardIndex(cardIndex < numCards ? cardIndex + 1 : 0);
  }

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={handlePrevClick}>Previous</button>
      <div className="slides">
        <div className={`carousel-card`} >
          <Card title={prevCard.title}
            body={prevCard.body}
          />
        </div>
        <div className={`carousel-card center`} >
          <Card title={currentCard.title}
            body={currentCard.body}
          />
        </div>
        <div className={`carousel-card`} >
          <Card title={nextCard.title}
            body={nextCard.body}
          />
        </div>
      </div>
      <button className="carousel-button next" onClick={handleNextClick}>Next</button>
    </div>
  )
}