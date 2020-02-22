import React from 'react'

import Logo from '../Shared/logo'
import { Container, Header, Stage, Separator, Keyboard } from './styles'

export default function App() {
  return (
    <>
      <Container>
        <Header>
          <Logo />
        </Header>
        <Stage>Stage</Stage>
        <Separator>Player</Separator>
        <Keyboard>Keyboard</Keyboard>
      </Container>
    </>
  )
}
