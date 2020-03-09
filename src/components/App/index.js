import React, { useEffect, useState } from 'react'

import Logo from '../Shared/Logo'
import Stage from './Stage'
import Keyboard from './Keyboard'
import { Container, Header, Separator } from './styles'

export default function App() {
  const [alphabet, setAlphabet] = useState([])
  const [letters, setLetters] = useState([])
  const [loadingData, setLoadingData] = useState(false)
  const [selectedLetter, setSelectedLetter] = useState('')

  useEffect(() => {
    async function fetchAlphabet() {
      setLoadingData(true)

      const response = await window.fetch('./assets/data/letters.json')
      const data = await response.json()

      setAlphabet(data)
      setLoadingData(false)
    }

    fetchAlphabet()
  }, [])

  useEffect(() => {
    if (alphabet.length > 0) {
      setLetters(alphabet.map(letter => letter.name))
    }
  }, [alphabet])

  const handleClickedButton = event => {
    const clickedLetter = event.target.innerText.toLowerCase()
    setSelectedLetter(clickedLetter)
  }

  return (
    <>
      <Container>
        <Header>
          <Logo />
        </Header>

        <Stage />
        <Separator />

        {!loadingData && alphabet.length > 0 && (
          <Keyboard
            letters={letters}
            handleClickedButton={handleClickedButton}
            selectedLetter={selectedLetter}
          />
        )}
      </Container>
    </>
  )
}
