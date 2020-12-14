import styled from 'styled-components'
import { darken, lighten } from 'polished'

export const Container = styled.div`
  ${({ theme }) => theme.mixins.flexAlignColumn()}
  width: 100%;
  background-color: ${({ theme }) => theme.colors.stageBgColor};
  border-top: 1px solid
    ${({ theme }) => lighten(0.3, theme.colors.stageBgColor)};
  border-bottom: 1px solid
    ${({ theme }) => darken(0.2, theme.colors.separatorBgColor)};
  padding: 0 1rem 1rem 1rem;

  &.noLetterSelected {
    padding-top: 1rem;
  }
`

export const Letter = styled.div`
  ${({ theme }) => theme.mixins.flexAlign()}
  font-size: 3rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.stageLettersTextColor};
  margin-bottom: 0.5rem;

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    font-size: 5rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.media.largeDesktop}) {
    font-size: 6rem;
  }
`

export const UpperCase = styled.div`
  margin-left: 0.3rem;
`

export const LowerCase = styled.div``

export const WordBox = styled.div`
  ${({ theme }) => theme.mixins.flexAlignColumn()}
`

export const Word = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 0;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.stageWordTextColor};
  margin: 0 0 1.8rem 0;

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    font-size: 3rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.media.largeDesktop}) {
    margin-top: 1rem;
  }
`

export const Icon = styled.img`
  width: 6.25rem;
  height: 6.25rem;

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    width: 9rem;
    height: 9rem;
    margin-top: 1rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.media.largeDesktop}) {
    width: 14rem;
    height: 14rem;
    margin-top: 3rem;
  }
`

export const Instructions = styled.p`
  font-size: 0.8rem;
  margin-top: 1.5rem;

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    font-size: 1.4rem;
  }
`
