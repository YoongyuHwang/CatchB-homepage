import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <p>회사명: (주)캐치비</p>
      <p>사업자 등록 번호: 00-000-00-00000</p>
      <p>대표: 홍길동</p>
      <p>전화: 010-0000-0000</p>
      <p>주소: 서울특별시 강남구 역삼동 123-4F</p>
      <p>서비스 이용약관 개인정보처리방침</p>
      <p>&copy; 2023 Catch B. All rights reserved.</p>
    </footer>
  );
};

export default Footer;