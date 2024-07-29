import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #f1f1f1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Events: React.FC = () => {
  return (
    <Container>
      <h2>이벤트</h2>
      <p>진행 중인 이벤트를 확인하세요.</p>
    </Container>
  );
};

export default Events;
