import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #ffffff;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Notices: React.FC = () => {
  return (
    <Container>
      <h2>공지사항</h2>
      <p>최신 공지사항을 확인하세요.</p>
    </Container>
  );
};

export default Notices;
