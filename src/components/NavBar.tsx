import React from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/images/logo.png'; // 로고 이미지 추가
import './NavBar.css'; // CSS 파일 추가

const NavBar: React.FC = () => {
  return (
    <nav className="NavBar">
      <img src={logo} alt="Logo" className="NavBar-logo" />
      <div className="NavBar-items">
        <Link to="appIntro" smooth={true} duration={500} className="NavBar-item">앱소개</Link>
        <Link to="events" smooth={true} duration={500} className="NavBar-item">이벤트</Link>
        <Link to="notices" smooth={true} duration={500} className="NavBar-item">공지사항</Link>
        <Link to="preOrder" smooth={true} duration={500} className="NavBar-item">사전예약</Link>
        <Link to="howToUse" smooth={true} duration={500} className="NavBar-item">캐치비 이용하기</Link>
      </div>
    </nav>
  );
};

export default NavBar;
