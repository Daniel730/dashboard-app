import styled from 'styled-components';
import { Primary } from './style';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const Content404 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  height: 100vh;
  overflow: hidden;
  flex-direction: column;
  font-family: 'Open Sans', sans-serif;
`;

export const TopTitle = styled.div`
  color: ${Primary};
  font-size: 35px;
  font-weight: 700;
`;

export const MainTitle = styled.div`
  font-size: 90px;
  font-weight: 800;
  color: ${Primary};
`;

export const TextBlur = styled.p`
  color: #b6becc;
`;

export const A = styled.a`
  color: ${Primary};
  text-decoration: none;
  :hover {
    opacity: 0.8;
  }
`;
