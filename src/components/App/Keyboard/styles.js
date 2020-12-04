import styled from "styled-components";
import { darken, lighten } from "polished";

export const Container = styled.div`
  ${({ theme }) => theme.mixins.flexAlign()}
  width: 100%;
  background-color: ${({ theme }) => theme.colors.keyboardBgColor};
  padding: 1.5rem 1rem;

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
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
    width: 60%;
    height: 60%;
  }

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    width: 40%;
    height: 40%;
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
    ${({ theme }) => lighten(0.1, theme.colors.keyboardLetterBgColor)} 90%,
    ${({ theme }) => darken(0.2, theme.colors.keyboardLetterBgColor)} 100%
  );
  background-color: ${({ theme }) => theme.colors.keyboardLetterBgColor};
  border-radius: 0.4rem;
  border: 1px solid
    ${({ theme }) => darken(0.1, theme.colors.keyboardLetterBorderColor)};
  box-shadow: inset 0px 2px 0px 0px
    ${({ theme }) => lighten(0.3, theme.colors.keyboardLetterBorderColor)};
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

  &:nth-child(25) {
    grid-column: 1;
    grid-row: 5;
  }

  &:nth-child(26) {
    grid-column: 6;
    grid-row: 5;
  }
`;

export const PlayWordButton = styled(basicButton)`
  height: 50px;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => lighten(0.1, theme.colors.keyboardWordBgColor)} 90%,
    ${({ theme }) => darken(0.2, theme.colors.keyboardWordBgColor)} 100%
  );
  background-color: ${({ theme }) => theme.colors.keyboardWordBgColor};
  border-radius: 0.4rem;
  border: 1px solid ${({ theme }) => theme.colors.keyboardWordBorderColor};
  box-shadow: inset 0px 2px 0px 0px
    ${({ theme }) => lighten(0.2, theme.colors.keyboardWordBorderColor)};
  grid-column: 2 / span 4;
  grid-row: 5;

  &:active,
  .active {
    color: ${({ theme }) => theme.colors.keyboardWordTextColorActive};
    background: ${({ theme }) => theme.colors.keyboardWordBgColorActive};
    border: 1px solid ${({ theme }) => theme.colors.keyboardWordBgColorActive};
    box-shadow: none;
  }

  &.disabled {
    background: none;
    background-color: ${({ theme }) =>
      lighten(0.4, theme.colors.keyboardWordDisabledBgColor)};
    border: none;
    box-shadow: none;
  }
`;

export const Icon = styled.img`
  width: 20px;
`;
