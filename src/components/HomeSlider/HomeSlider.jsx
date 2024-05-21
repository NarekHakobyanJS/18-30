import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slider } from '../../db';
const HomeSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

  return (
    <Slider {...settings}>
        {
            slider.map((el, index) => <img key={index} src={el}/>)
        }
    </Slider>
  )
}

export default HomeSlider