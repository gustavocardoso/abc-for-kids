import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, Container } from './styles'
import mainTheme from './theme'

import IntroScreen from './IntroScreen'
import App from './App'

export default function AbcForKids() {
  const [started, setStarted] = useState(false)

  const startApp = () => {
    setStarted(true)
  }

  return (
    <ThemeProvider theme={mainTheme}>
      <>
        <Container>
          {!started && <IntroScreen startApp={startApp} />}
          {started && <App />}
        </Container>
        <GlobalStyle />
      </>
    </ThemeProvider>
  )
}
