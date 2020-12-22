import React, { Component } from "react";
// Import Swiper React components
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

// Import Swiper styles
import "pure-react-carousel/dist/react-carousel.es.css";

//Import Styles
import "./reviews.scss";

class ReviewsModule extends Component {
  render() {
    return (
      <section className="reviews-module">
        <div className="slider-images">
          <CarouselProvider
            naturalSlideWidth={400}
            naturalSlideHeight={400}
            totalSlides={5}
          >
            <Slider>
              <Slide index={0}>
                <img src={process.env.PUBLIC_URL + "/img/01.jpg"} alt="" />
              </Slide>
              <Slide index={1}>
                <img src={process.env.PUBLIC_URL + "/img/02.jpg"} alt="" />
              </Slide>
              <Slide index={2}>
                <img src={process.env.PUBLIC_URL + "/img/03.jpg"} alt="" />
              </Slide>
              <Slide index={3}>
                <img src={process.env.PUBLIC_URL + "/img/04.jpg"} alt="" />
              </Slide>
              <Slide index={4}>
                <img src={process.env.PUBLIC_URL + "/img/05.jpg"} alt="" />
              </Slide>
            </Slider>
          </CarouselProvider>
        </div>
      </section>
    );
  }
}

export default ReviewsModule;
// <div className="slider-quotes">
//   <h2>Smiles All Around</h2>
//   <p>Hands down the best razor I have ever used. It effortlessly glides over my skin, leaving it silky smooth. I actually look forward to shaving now.</p>
//   <img src={process.env.PUBLIC_URL + '/img/5stars.png'} alt="" />
//   <p>Megan</p>
//
// </div>
