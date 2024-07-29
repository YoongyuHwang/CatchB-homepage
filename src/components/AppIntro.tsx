import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #282c34;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const TextContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const AppIntro: React.FC = () => {
  return (
    <Container>
      <TextContainer>
        <h1>야구에 혁신을 더하다</h1>
        <p>AI를 더해 간편해진 야구 아카데미 / 레슨 예약 서비스 Catch B</p>
      </TextContainer>
    </Container>
  );
};

export default AppIntro;
