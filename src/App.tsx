import React from 'react';
import { Element } from 'react-scroll';
import Header from './components/Header'; // Header 컴포넌트 추가
import AppIntro from './components/AppIntro';
import Events from './components/Events';
import Notices from './components/Notices';
import PreOrder from './components/PreOrder';
import HowToUse from './components/HowToUse';
import Footer from './components/Footer';
import NavBar from './components/NavBar'; // NavBar 컴포넌트 추가
import './App.css'; // CSS 파일 추가

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Element name="appIntro" className="Section">
        <AppIntro />
      </Element>
      <Element name="events" className="Section">
        <Events />
      </Element>
      <Element name="notices" className="Section">
        <Notices />
      </Element>
      <Element name="preOrder" className="Section">
        <PreOrder />
      </Element>
      <Element name="howToUse" className="Section">
        <HowToUse />
      </Element>
      <Footer />
    </div>
  );
};

export default App;
