import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.mainbg};
  color: ${p => p.theme.colors.white};
`;

export const Title = styled.h2`
  font-size: 50px;
`;
