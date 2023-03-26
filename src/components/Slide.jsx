import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as hi2 from 'react-icons/hi2'

  const CustomSlider = ({ children, settings }) => (
    <Slider {...settings}>
      {children}
    </Slider>
  );

  const RightArrow = ({ className, style, onClick }) => (
  <button onClick={onClick} className={className} style={{...style}}>
    <hi2.HiChevronRight />
  </button>
);

const LeftArrow = ({ className, style, onClick }) => (
  <button onClick={onClick} className={className} style={{...style, backgroundColor: 'black'}}>
    <hi2.HiChevronLeft />
  </button>
);

export const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  
  const images = [
    'https://img.zoechip.com/resize/1278x768/aa/33/aa339e48d99bfc4c962ea95dbe5f0fa7/aa339e48d99bfc4c962ea95dbe5f0fa7.jpg',
    'https://img.zoechip.com/resize/1278x768/f6/23/f623deaea2107717d129a52cd6f72252/f623deaea2107717d129a52cd6f72252.jpg',
    'https://img.zoechip.com/resize/1278x768/64/54/6454697be5467e53604ec0887b733a7d/6454697be5467e53604ec0887b733a7d.jpg',
  ];

  return (
    <div>  
      <CustomSlider settings={settings}>
        {images.map((image, i) => (
          <button key={i} className=''>
            <img src={image} className='h-[70vh] w-full object-cover object-top' />
          </button>
        ))}  
      </CustomSlider>
    </div>
  );
};