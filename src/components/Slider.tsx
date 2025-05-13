import React, {useState} from 'react';
import style from 'styles/Slider.module.css';
import sliderArrow from 'assets/icons/arrow.svg';

import image1 from 'assets/img/banner.png';
import image2 from 'assets/img/banner2.png';
import image3 from 'assets/img/banner3.png';

const slides: string[] = [image1, image2, image3];

const Slider: React.FC = () => {
  const [currSlide, setCurrSlide] = useState<number>(0);

  const nextSlide = (): void => {
    setCurrSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = (): void => {
    setCurrSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number): void => {
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

        <button
          className={style.slider_arrow_top}
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <div className={style.slider_arrow_top_content}>
            <p className={style.botton_subtitle}>Change old book on new</p>
            <img src={sliderArrow} alt="slider arrow up" />
          </div>
        </button>

        <button
          className={style.slider_arrow_bottom}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <div className={style.slider_arrow_bottom_content}>
            <p className={style.botton_subtitle}>Top 100 books 2022</p>
            <img src={sliderArrow} alt="slider arrow down" />
          </div>
        </button>
      </div>

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
