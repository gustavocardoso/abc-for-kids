import styled from "styled-components";
import { darken, lighten } from "polished";

export const Container = styled.div`
  ${({ theme }) => theme.mixins.flexAlign()}
  width: 100%;
  background-color: ${({ theme }) => theme.colors.keyboardBgColor};
  padding: 1.5rem;

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    background-color: red;
  }

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    background-color: #444;
  }
`;

export const LettersContainer = styled.div`
  ${({ theme }) => theme.mixins.flexAlign()}
  width: 100%;
  height: 100%;
  display: grid;
  /*   grid-template-columns: repeat(auto-fill, minmax(50px, 1fr)); */
  grid-gap: 0.6rem;
  grid-template-columns: 50px 50px 50px 50px 50px 50px;
  grid-template-rows: 50px 50px 50px 50px 50px;
  justify-content: space-between;
  align-content: space-around;

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    width: 70%;
  }
`;

const basicButton = styled.button`
  ${({ theme }) => theme.mixins.flexAlign()}
  position: relative;
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 0px 1px 0px #ffffff;
  color: ${({ theme }) => theme.colors.keyboardLetterTextColor};
  background: linear-gradient(
    to bottom,
    ${({ theme }) => lighten(0.8, theme.colors.keyboardLetterBgColor)} 20%,
    ${({ theme }) => darken(0.1, theme.colors.keyboardLetterBgColor)} 100%
  );
  background-color: ${({ theme }) => theme.colors.keyboardLetterBgColor};
  border-radius: 0.4rem;
  border: 1px solid
    ${({ theme }) => lighten(0.7, theme.colors.keyboardLetterBorderColor)};
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  cursor: pointer;
  outline: 0;
  transition: all 0.1s ease;

  &:active,
  .active {
    color: ${({ theme }) => theme.colors.keyboardLetterTextColorActive};
    background: ${({ theme }) => theme.colors.keyboardLetterBgColorActive};
    border: 1px solid ${({ theme }) => theme.colors.keyboardLetterBgColorActive};
    box-shadow: none;
  }

  .buttonText {
    display: inline-block;
    font-size: 0.8rem;
    font-weight: normal;
    margin-left: 0.4rem;
  }
`;

export const LetterButton = styled(basicButton)`
  width: 50px;
  height: 50px;

  &:nth-child(25) {
    grid-column: 3;
  }

  &:nth-child(26) {
    grid-column: 4;
  }

  &.active {
    color: ${({ theme }) => theme.colors.keyboardLetterTextColorActive};
    background: ${({ theme }) => theme.colors.keyboardLetterBgColorActive};
    border: 1px solid ${({ theme }) => theme.colors.keyboardLetterBgColorActive};
    box-shadow: none;
  }

  &:active {
    background: ${({ theme }) =>
      darken(0.2, theme.colors.keyboardLetterBgColorClick)};
    transform: scale(0.95);
  }
`;

export const PlaySoundButton = styled(basicButton)`
  height: 50px;
  grid-column: 1 / span 2;
  grid-row: 5;
`;

export const PlayWordButton = styled(basicButton)`
  height: 50px;
  grid-column: 5 / span 2;
  grid-row: 5;
`;

export const Icon = styled.img`
  width: 20px;
`;
