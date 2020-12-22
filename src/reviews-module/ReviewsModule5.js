import React, { Component } from "react";
// Import Swiper React components
import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";

import "owl.carousel/dist/assets/owl.theme.default.css";

//Import Styles
import "./reviews.scss";

class ReviewsModule extends Component {
  render() {
    return (
      <section className="reviews-module">
        <div className="slider-images">
          <OwlCarousel items={1} className="owl-theme" loop margin={8}>
            <div>
              <img src={process.env.PUBLIC_URL + "/img/01.jpg"} alt="" />
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + "/img/02.jpg"} alt="" />
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + "/img/03.jpg"} alt="" />
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + "/img/04.jpg"} alt="" />
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + "/img/05.jpg"} alt="" />
            </div>
          </OwlCarousel>
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
