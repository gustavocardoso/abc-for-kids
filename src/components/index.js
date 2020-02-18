import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, Container } from './styles'
import mainTheme from './theme'

import IntroScreen from './IntroScreen'

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
          {started && <p>App started</p>}
        </Container>
        <GlobalStyle />
      </>
    </ThemeProvider>
  )
}
