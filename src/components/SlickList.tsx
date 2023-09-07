import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type SlickListProps = {
  images: string[];
};

const SlickList: React.FC<SlickListProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
  centerPadding: '60px',
  };

  return (
    <div className="slick-list-container">
      <Slider {...settings}>
        {images.map((image: any, index: any) => (
          <div key={index}>
            <img src={image} alt={`${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickList;
