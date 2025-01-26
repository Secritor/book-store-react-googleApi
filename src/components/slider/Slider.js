import React, {useState, useEffect} from "react"
import './Slider.css'
import sliderArrow from '../../assets/icons/arrow.svg'

const Slider = ({slides}) => {


  return (
    <div className="slider">
        <div className="slider-images"> 
          <div className="slider-image" style={{backgroundImage: `url()`}}>
          </div>
        </div>
       
        <button
          className="slider-arrow-top" 
        >
          <div className="slider-arrow-top-content">
            <p>Change old book on new</p>
            <img src={sliderArrow} alt="slider arrow" />
          </div>
        </button>
        <button 
          className="slider-arrow-bottom" 
        >
          <div className="slider-arrow-bottom-content">
              <p>top 100 books 2022</p>
            <img src={sliderArrow} alt="slider arrow" />
          </div>
        </button> 

        <div className="slider-dots">

        </div>
        
    </div>
    
  )
};

export default Slider;