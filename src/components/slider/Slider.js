import React, {useState, useEffect} from 'react';
import style from './Slider.module.css';
import sliderArrow from '../../assets/icons/arrow.svg';

import image1 from '../../assets/img/banner.png';
import image2 from '../../assets/img/banner2.png';
import image3 from '../../assets/img/banner3.png';

const Slider = () => {
  const slides = [image1, image2, image3];
  const [currSlide, setCurrSlide] = useState(0);

  const nextSlide = () => {
    setCurrSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrSlide(index);
  };

  return (
    <div className={style.slider}>
      <div className={style.slider_images}>
        <img
          src={slides[currSlide]}
          alt={`Slide ${currSlide + 1}`}
          className={style.slider_image}
        />
      </div>

      <button
        className={style.slider_arrow_top}
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <div className={style.slider_arrow_top_content}>
          <p>Change old book on new</p>
          <img src={sliderArrow} alt="slider arrow up" />
        </div>
      </button>
      <button
        className={style.slider_arrow_bottom}
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <div className={style.slider_arrow_bottom_content}>
          <p>Top 100 books 2022</p>
          <img src={sliderArrow} alt="slider arrow down" />
        </div>
      </button>

      <div className={style.slider_dots}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${style.slider_dot} ${
              currSlide === index ? style.active : ''
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
