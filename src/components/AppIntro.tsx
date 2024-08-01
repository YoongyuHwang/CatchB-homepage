import React from 'react';
import Slider from 'react-slick';
import './AppIntro.css';
import mlbimage1 from '../assets/images/main.png';
import mlbimage2 from '../assets/images/main.png';
import mlbimage3 from '../assets/images/main.png';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const AppIntro: React.FC = () => {
  return (
    <div className="app-intro-container">
      <div className="image-container">
        <div className="phone-frame">
          <Slider {...sliderSettings} className="appintro-slider-container">
            <div>
              <img src={mlbimage1} alt="Screen 1" className="screen-image" />
            </div>
            <div>
              <img src={mlbimage2} alt="Screen 2" className="screen-image" />
            </div>
            <div>
              <img src={mlbimage3} alt="Screen 3" className="screen-image" />
            </div>
          </Slider>
        </div>
      </div>
      <div className="text-container">
        <h1>야구에 혁신을 더하다</h1>
        <p>AI를 더해 간편해진 야구 아카데미 / 레슨 예약 서비스 Catch B</p>
      </div>
    </div>
  );
};

export default AppIntro;
