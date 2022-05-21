import styled from 'styled-components';

export const Wrapper = styled.main`
  background-color: #06092b;
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  padding: 2rem;
  width: 25rem;
  margin-bottom: 2rem;
  animation: rotateAnimation 15s linear infinite;

  @keyframes rotateAnimation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
`;

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: normal;
`;
