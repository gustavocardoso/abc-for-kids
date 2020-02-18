import styled, { createGlobalStyle } from 'styled-components'
import { radialGradient } from 'polished'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100vw;
    height: 100vh;
  }

  body {
    font: normal normal 100%/1.5 ${props => props.theme.fonts.base};
    background-color: ${props => props.theme.colors.mainBgColor};
    ${radialGradient({
      colorStops: ['#FFD07A 0%', '#FFBC42 90%'],
      extent: '50% 50% at 50% 50%'
    })}
    color: ${props => props.theme.colors.mainTextColor};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
