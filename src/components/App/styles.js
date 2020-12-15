import styled from 'styled-components'
import { darken, lighten } from 'polished'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 3.125rem 16.25rem 1.5rem 1fr;
  animation: all 0.5s ease;

  @media screen and (min-width: ${({ theme }) => theme.media.tablet}) {
    grid-template-rows: 3.125rem 18rem 1.5rem 1fr;
  }

  @media screen and (min-width: ${({ theme }) => theme.media.desktop}) {
    grid-template-rows: 6.5rem 1fr 1rem 26rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.media.largeDesktop}) {
    grid-template-rows: 6.5rem 1fr 1rem 35rem;
  }
`

export const Header = styled.header`
  ${({ theme }) => theme.mixins.flexAlign()};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.headerBgColor};
  border-bottom: 1px solid
    ${({ theme }) => darken(0.2, theme.colors.headerBgColor)};
`

export const Separator = styled.div`
  ${({ theme }) => theme.mixins.flexAlign()}
  width: 100%;
  background-color: ${({ theme }) => theme.colors.separatorBgColor};
  border-top: 1px solid
    ${({ theme }) => lighten(0.2, theme.colors.separatorBgColor)};
`
