import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  
  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <div>
                <img src={slide.image} alt='fitting' className='image' />
                <img src={slide.image1} alt='fitting image' className='image'/>
                <img src={slide.image2} alt='fitting image1' className='image'/>
                <img src={slide.image3} alt='fitting image2' className='image'/>
                <img src={slide.image4} alt='fitting image3' className='image'/>
                <img src={slide.image5} alt='fitting image4' className='image'/>
                <img src={slide.image6} alt='fitting image5' className='image'/>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
