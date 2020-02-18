import styled, { css, keyframes } from 'styled-components'
import { rgba } from 'polished'

export const Title = styled.h1`
  font-family: ${props => props.theme.fonts.styled};
  font-size: ${props => (props.type === 'intro' ? '6rem' : '1.5rem')};
  text-align: center;
  color: ${props => props.theme.colors.titleBaseColor};
  text-shadow: 0 5px 5px rgba(0, 0, 0, 0.25);
  letter-spacing: ${props =>
    props.type === 'intro' ? '0.3125rem' : '0.125rem'};

  ${props =>
    props.type === 'intro' &&
    css`
      line-height: 1.2;
      transform: rotate(-13deg);
      animation: ${pulseSlow} 5s ease-in-out infinite;
    `}
`

export const SpanFirstLetter = styled.span`
  color: ${props => props.theme.colors.titleFirstLetter};
`

export const SpanSecondLetter = styled.span`
  color: ${props => props.theme.colors.titleSecondLetter};
`

export const SpanThirdLetter = styled.span`
  color: ${props => props.theme.colors.titleThirdLetter};
`

export const SpanPhrase = styled.span`
  display: ${props => (props.type === 'intro' ? 'block' : 'inline-block')};
  font-size: ${props => (props.type === 'intro' ? '2.5rem' : '1.5rem')};
  font-weight: normal;
  margin-left: ${props => (props.type === 'intro' ? '0' : '0.4375rem')};
  letter-spacing: 0;
`

export const StartButton = styled.button`
  font-size: 1rem;
  color: ${props => props.theme.colors.startButtonTextColor};
  background-color: ${props =>
    rgba(props.theme.colors.startButtonBgColor, 0.2)};
  border: 0;
  border-radius: 0.625rem;
  padding: 0.75rem 0.625rem;
  margin-top: 3rem;
  transform: rotate(-3deg);
  transition: all 0.2s ease-out;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.startButtonTextHoverColor};
    background-color: ${props =>
      rgba(props.theme.colors.startButtonBgColor, 0.7)};
  }
`

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
`
