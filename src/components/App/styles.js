import styled from 'styled-components'
import { darken, lighten } from 'polished'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 3.125rem 16.25rem 1.5rem 1fr;
`

export const Header = styled.header`
  ${({ theme }) => theme.mixins.flexAlign()};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.headerBgColor};
  border-bottom: 1px solid
    ${({ theme }) => darken(0.2, theme.colors.headerBgColor)};
`

export const Stage = styled.div`
  ${({ theme }) => theme.mixins.flexAlign()}
  width: 100%;
  background-color: ${({ theme }) => theme.colors.stageBgColor};
  border-top: 1px solid
    ${({ theme }) => lighten(0.3, theme.colors.stageBgColor)};
  border-bottom: 1px solid
    ${({ theme }) => darken(0.2, theme.colors.separatorBgColor)};
`

export const Separator = styled.header`
  ${({ theme }) => theme.mixins.flexAlign()}
  width: 100%;
  background-color: ${({ theme }) => theme.colors.separatorBgColor};
  border-top: 1px solid
    ${({ theme }) => lighten(0.2, theme.colors.separatorBgColor)};
`

export const Keyboard = styled.div`
  ${({ theme }) => theme.mixins.flexAlign()}
  width: 100%;
  background-color: ${({ theme }) => theme.colors.keyboardBgColor};
`
