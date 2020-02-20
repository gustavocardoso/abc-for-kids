import styled, { createGlobalStyle } from 'styled-components'
import { radialGradient } from 'polished'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    font: normal normal 100%/1.5 ${props => props.theme.fonts.base};
    background-color: ${({ theme }) => theme.colors.mainBgColor};
    ${radialGradient({
      colorStops: ['#FFD07A 0%', '#FFBC42 90%'],
      extent: '50% 50% at 50% 50%'
    })}
    color: ${({ theme }) => theme.colors.mainTextColor};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
