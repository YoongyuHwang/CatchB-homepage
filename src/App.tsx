import React from 'react';
import styled from 'styled-components';
import { Link, Element } from 'react-scroll';
import Header from './components/Header'; // Header 컴포넌트 추가
import AppIntro from './components/AppIntro';
import Events from './components/Events';
import Notices from './components/Notices';
import PreOrder from './components/PreOrder';
import HowToUse from './components/HowToUse';
import Footer from './components/Footer';
import logo from './assets/images/logo.png'; // 로고 이미지 추가

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
`;

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: #fff;
  color: #333;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  z-index: 1000;
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 20px;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled(Link)`
  margin: 0 15px;
  cursor: pointer;
  color: #333;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Section = styled(Element)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Header /> {/* Header 컴포넌트를 AppIntro 위에 추가 */}
      <NavBar>
        <Logo src={logo} alt="Logo" />
        <NavItems>
          <NavItem to="appIntro" smooth={true} duration={500}>앱소개</NavItem>
          <NavItem to="events" smooth={true} duration={500}>이벤트</NavItem>
          <NavItem to="notices" smooth={true} duration={500}>공지사항</NavItem>
          <NavItem to="preOrder" smooth={true} duration={500}>사전예약</NavItem>
          <NavItem to="howToUse" smooth={true} duration={500}>캐치비 이용하기</NavItem>
        </NavItems>
      </NavBar>
      <Section name="appIntro">
        <AppIntro />
      </Section>
      <Section name="events">
        <Events />
      </Section>
      <Section name="notices">
        <Notices />
      </Section>
      <Section name="preOrder">
        <PreOrder />
      </Section>
      <Section name="howToUse">
        <HowToUse />
      </Section>
      <Footer />
    </AppContainer>
  );
};

export default App;
