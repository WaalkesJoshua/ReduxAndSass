import React, { useState } from 'react';
import Card from './Card';
import Slider from 'react-slick';
import "../../styles/utilStyles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// export default function Carousel({ cardData }) {
//   const dataArr = Array.isArray(cardData) ? cardData : [cardData];
//   const numCards = dataArr.length - 1;
//   const [cardIndex, setCardIndex] = useState(0);
//   const nextCard = dataArr[cardIndex > 0 ? cardIndex - 1 : numCards];
//   const prevCard = dataArr[cardIndex < numCards ? cardIndex + 1 : 0];
//   const currentCard = dataArr[cardIndex];


//   const handlePrevClick = () => {
//     setCardIndex(cardIndex > 0 ? cardIndex - 1 : numCards);
//   }

//   const handleNextClick = () => {
//     setCardIndex(cardIndex < numCards ? cardIndex + 1 : 0);
//   }

//   return (
//     <div className="carousel-container">
//       <button className="carousel-button prev" onClick={handlePrevClick}>
//         <p>P</p>
//         <p>R</p>
//         <p>E</p>
//         <p>V</p>
//         <p>I</p>
//         <p>O</p>
//         <p>U</p>
//         <p>S</p>
//       </button>
//       {numCards > 0 ?
//       <div className="slides">
//         <div className={`carousel-card`} >
//         <Card
//             iconSrc={prevCard.iconSrc}
//             title={prevCard.title}
//             body={prevCard.body}
//           />
//         </div>
//         <div className={`carousel-card center`} >
//           <Card
//             iconSrc={currentCard.iconSrc}
//             title={currentCard.title}
//             body={currentCard.body}
//           />
//         </div>
//         <div className={`carousel-card`} >
//         <Card
//             iconSrc={nextCard.iconSrc}
//             title={nextCard.title}
//             body={nextCard.body}
//           />
//         </div>
//       </div>
//       : <p> Loading... </p> }

//       <button className="carousel-button next" onClick={handleNextClick}>
//         <p>N</p>
//         <p>E</p>
//         <p>X</p>
//         <p>T</p>
//       </button>
//     </div>
//   )
// }

export default function Carousel({ cardData }) {
  let settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    // autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    adaptiveHeight: true
  }

  return (
    <div className="carousel-container" >
    <Slider {...settings}>
      {cardData.map((card, index) => (
        <div key={index} className="slider-card-container">
        <Card
        body={card.body}
        />
        </div>
        ))}

      {/* <div>hi</div>
      <div>hi=ey</div>
      <div>hilsdjv</div>
      <div>hiello</div>
      <div>hihowyd</div> */}


    </Slider>
        </div>
  )
}