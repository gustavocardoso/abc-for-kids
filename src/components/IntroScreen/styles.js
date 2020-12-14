import styled from 'styled-components'
import { rgba } from 'polished'

export const StartButton = styled.button`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.startButtonTextColor};
  background-color: ${({ theme }) =>
    rgba(theme.colors.startButtonBgColor, 0.2)};
  border: 0;
  border-radius: 0.625rem;
  padding: 0.75rem 0.625rem;
  margin-top: 3rem;
  transform: rotate(-3deg);
  transition: all 0.2s ease-out;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.startButtonTextHoverColor};
    background-color: ${({ theme }) =>
      rgba(theme.colors.startButtonBgColor, 0.7)};
  }

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    font-size: 1.2rem;
    padding: 1rem;
  }
`
