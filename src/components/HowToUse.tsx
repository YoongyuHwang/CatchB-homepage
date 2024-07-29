import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #d1d1d1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HowToUse: React.FC = () => {
  return (
    <Container>
      <h2>캐치비 이용하기</h2>
      <p>앱 사용 방법을 안내합니다.</p>
    </Container>
  );
};

export default HowToUse;
