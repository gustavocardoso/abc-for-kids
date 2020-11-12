import styled, { css, keyframes } from "styled-components";

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.styled};
  font-size: ${({ type }) => (type === "intro" ? "6rem" : "1.3rem")};
  line-height: 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.titleBaseColor};
  letter-spacing: ${({ type }) =>
    type === "intro" ? "0.3125rem" : "0.125rem"};
  margin-top: 6px;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);

  ${({ type }) =>
    type === "intro" &&
    css`
      line-height: 1.2;
      transform: rotate(-3deg);
      margin-top: 0;
      animation: ${pulseSlow} 5s ease-in-out infinite;
    `}
`;

export const SpanFirstLetter = styled.span`
  color: ${({ theme }) => theme.colors.titleFirstLetter};
`;

export const SpanSecondLetter = styled.span`
  color: ${({ theme }) => theme.colors.titleSecondLetter};
`;

export const SpanThirdLetter = styled.span`
  color: ${({ theme }) => theme.colors.titleThirdLetter};
`;

export const SpanPhrase = styled.span`
  display: ${({ type }) => (type === "intro" ? "block" : "inline-block")};
  font-size: ${({ type }) => (type === "intro" ? "2.5rem" : "1.2rem")};
  font-weight: normal;
  margin-left: ${({ type }) => (type === "intro" ? "0" : "0.4375rem")};
  letter-spacing: 0;
`;

const pulseSlow = keyframes`
  from {
    transform: rotate(-3deg) scale3d(1, 1, 1);
  }

  50% {
    transform: rotate(-3deg) scale3d(1.1, 1.1, 1.1);
  }

  to {
    transform: rotate(-3deg) scale3d(1, 1, 1);
  }
`;
