import React from 'react';
import Slider from 'react-slick';
import './Header.css';
import mlbimage1 from '../assets/images/mlbimage1.jpg';
import mlbimage2 from '../assets/images/mlbimage2.jpg';
import mlbimage3 from '../assets/images/mlbimage3.jpg';

const sliderSettings = {
  dots: false, // dots 설정을 false로 변경
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
};

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <Slider {...sliderSettings} className="slider-container">
        <div>
          <img src={mlbimage1} alt="MLB 1" className="header-image" />
          <div className="overlay">
            <div className="header-text-container">
              <h1>
                야구에 <span className="highlight-green">혁</span>
                <span className="highlight-yellow">신</span>을 더하다
              </h1>
              <p>
                AI를 더해 <span className="highlight-yellow">간</span>
                <span className="highlight-green">편</span>해진 야구 아카데미 / 레슨 예약 서비스
              </p>
              <h2 className="highlight-bold">Catch B</h2>
              <button className="download-button">앱 다운로드</button>
            </div>
          </div>
        </div>
        <div>
          <img src={mlbimage2} alt="MLB 2" className="header-image" />
          <div className="overlay">
            <div className="header-text-container">
              <h1>
                야구에 <span className="highlight-green">혁</span>
                <span className="highlight-yellow">신</span>을 더하다
              </h1>
              <p>
                AI를 더해 <span className="highlight-yellow">간</span>
                <span className="highlight-green">편</span>해진 야구 아카데미 / 레슨 예약 서비스
              </p>
              <h2 className="highlight-bold">Catch B</h2>
              <button className="download-button">앱 다운로드</button>
            </div>
          </div>
        </div>
        <div>
          <img src={mlbimage3} alt="MLB 3" className="header-image" />
          <div className="overlay">
            <div className="header-text-container">
              <h1>
                야구에 <span className="highlight-green">혁</span>
                <span className="highlight-yellow">신</span>을 더하다
              </h1>
              <p>
                AI를 더해 <span className="highlight-yellow">간</span>
                <span className="highlight-green">편</span>해진 야구 아카데미 / 레슨 예약 서비스
              </p>
              <h2 className="highlight-bold">Catch B</h2>
              <button className="download-button">앱 다운로드</button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Header;
