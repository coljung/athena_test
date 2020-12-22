import React, { useState } from "react";
// Import Swiper React components
import SwiperCore, { Controller } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";

//Import Styles
import "./reviews.scss";

// install Swiper's Controller component
SwiperCore.use([Controller]);

const ReviewsModule = () => {
  const [controlledSwipper, setControlledSwipper] = useState(null);
  const quotes = [
    {
      text:
        "Hands down the best razor I have ever used. It effortlessly glides over my skin, leaving it silky smooth. I actually look forward to shaving now",
      name: "HANNAH C.",
    },
    {
      text:
        "I love everything about these products. They all have a very clean subtle smell, they make my skin feel super smooth, and I have very sensitive skin and it doesn’t bother me one bit. ",
      name: "ZOE D.",
    },
    {
      text:
        "The best razor I’ve ever used! I have very sensitive skin and these don’t bother me one bit, and the shaving cream is also killer!",
      name: "KELSI V.",
    },
    {
      text:
        "All in all, 11/10, will be ordering again. Mostly because it’s a subscription service and that’s how this works... but also because I am now truly, madly, deeply in love.",
      name: "MEGAN S.",
    },
    {
      text:
        "Best razor I have ever used, literally. I tried the other brands for months and this completely blows it out of the water!",
      name: "JERUSA A.",
    },
  ];
  const [quoteIndex, setQuoteIndex] = useState(0);
  return (
    <section className="reviews-module">
      <div className="slider-quotes">
        <h2>Smiles All Around</h2>
        <p>{quotes[quoteIndex].text}</p>
        <img src={process.env.PUBLIC_URL + "/img/5stars.png"} alt="" />
        <p>{quotes[quoteIndex].name}</p>
      </div>
      <div className="slider-images">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          id="main"
          navigation
          pagination
          loop={true}
          controller={{ control: controlledSwipper }}
          onSlideChange={(swiper) => {
            console.log(swiper);
            setQuoteIndex(swiper.realIndex);
          }}
        >
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + "/img/01.jpg"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + "/img/02.jpg"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + "/img/03.jpg"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + "/img/04.jpg"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + "/img/05.jpg"} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="slider-images">
        <Swiper
          id="controller"
          onSwiper={setControlledSwipper}
          loop={true}
          className="second-slider"
        >
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + "/img/02.jpg"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + "/img/03.jpg"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + "/img/04.jpg"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + "/img/05.jpg"} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={process.env.PUBLIC_URL + "/img/01.jpg"} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default ReviewsModule;
