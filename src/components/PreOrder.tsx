import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #e1e1e1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PreOrder: React.FC = () => {
  return (
    <Container>
      <h2>사전예약</h2>
      <p>지금 사전예약하세요.</p>
    </Container>
  );
};

export default PreOrder;
