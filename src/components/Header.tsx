import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import mlbimage1 from '../assets/images/mlbimage1.jpg';
import mlbimage2 from '../assets/images/mlbimage2.jpg';
import mlbimage3 from '../assets/images/mlbimage3.jpg';

const HeaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 어두운 오버레이 */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
`;

const SliderContainer = styled(Slider)`
  .slick-prev, .slick-next {
    z-index: 1;
  }
`;

const sliderSettings = {
  dots: true,
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
    <HeaderContainer>
      <SliderContainer {...sliderSettings}>
        <div>
          <Image src={mlbimage1} alt="MLB Image 1" />
          <Overlay>
            <div>
              <h1>야구에 혁신을 더하다</h1>
              <p>AI를 더해 간편해진 야구 아카데미 / 레슨 예약 서비스 Catch B</p>
            </div>
          </Overlay>
        </div>
        <div>
          <Image src={mlbimage2} alt="MLB Image 2" />
          <Overlay>
            <div>
              <h1>야구에 혁신을 더하다</h1>
              <p>AI를 더해 간편해진 야구 아카데미 / 레슨 예약 서비스 Catch B</p>
            </div>
          </Overlay>
        </div>
        <div>
          <Image src={mlbimage3} alt="MLB Image 3" />
          <Overlay>
            <div>
              <h1>야구에 혁신을 더하다</h1>
              <p>AI를 더해 간편해진 야구 아카데미 / 레슨 예약 서비스 Catch B</p>
            </div>
          </Overlay>
        </div>
      </SliderContainer>
    </HeaderContainer>
  );
};

export default Header;
