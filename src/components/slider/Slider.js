import React, {useState} from "react"
import './Slider.css'
import sliderArrow from '../../assets/icons/arrow.svg'

const Slider = ({slides}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
 
  const handleJumpToSlide = (index) => {
    if (index === currentSlide) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(index);
    }
  };

  const jumpToSlide = slideIndex => {
    setCurrentSlide(slideIndex);
  }


  return (
    <div className="slider">
        <div className="slider-images"> 
          <div className="slider-image" style={{backgroundImage: `url(${slides[currentSlide].url})`}}>
          </div>
        </div>
       
        <button
          className="slider-arrow-top" 
          key={1} 
          onClick={() => handleJumpToSlide(1)}
        >
          <div className="slider-arrow-top-content">
            <p>Change old book on new</p>
            <img src={sliderArrow} alt="slider arrow" />
          </div>
        </button>
        <button 
          className="slider-arrow-bottom" 
          key={2} 
          onClick={() => handleJumpToSlide(2)}
        >
          <div className="slider-arrow-bottom-content">
              <p>top 100 books 2022</p>
            <img src={sliderArrow} alt="slider arrow" />
          </div>
        </button> 

        <div className="slider-dots">
            {slides.map((slide, slideIndex) => (
              <div 
              key={slideIndex} 
              className={slideIndex === currentSlide ? 'active-dot' : 'dot'} 
              onClick={() => jumpToSlide(slideIndex)}
              ></div>
            ))}
        </div>
        
    </div>
    
  )
};

export default Slider;