import React from 'react'
import Slider from "react-slick";

import slider1 from "../../Assets//images/e4.jpg"
import slider3 from "../../Assets//images/e2.jpg"
import slider2 from "../../Assets//images/e3.jpg"

export default function MainSlider() {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };

  return <>
  <div className="row gx-0 mt-4 mb-3">
    <div className="">

    <Slider {...settings}>
         <img height={500} className='w-100' src={slider1} alt="photoSlider" />
         <img height={500} className='w-100' src={slider2} alt="photoSlider" />
         <img height={500} className='w-100' src={slider3} alt="photoSlider" />
        </Slider>
    </div>
    
  </div>
  


  </>
}
