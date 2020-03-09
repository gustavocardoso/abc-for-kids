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
`

export const Letter = styled.div`
  ${({ theme }) => theme.mixins.flexAlign()}
  font-size: 3rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.stageLettersTextColor};
  margin-bottom: 0.5rem;
`

export const UpperCase = styled.div``

export const LowerCase = styled.div``

export const WordBox = styled.div`
  ${({ theme }) => theme.mixins.flexAlignColumn()}
`

export const Word = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 0;
  color: ${({ theme }) => theme.colors.stageWordTextColor};
  margin: 0 0 1.8rem 0;
`

export const Icon = styled.img`
  width: 100px;
  height: 100px;
`
