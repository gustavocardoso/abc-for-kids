import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 3.125rem 16.25rem 3.125rem 1fr;
`

export const Header = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.headerBgColor};
  ${({ theme }) => theme.mixins.flexAlign()}
`

export const Stage = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.stageBgColor};
  ${({ theme }) => theme.mixins.flexAlign()}
`

export const Player = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.playerBgColor};
  ${({ theme }) => theme.mixins.flexAlign()}
`

export const Keyboard = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.keyboardBgColor};
  ${({ theme }) => theme.mixins.flexAlign()}
`
