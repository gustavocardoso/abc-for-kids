import React from 'react'
import PropTypes from 'prop-types'

import { Container, LettersContainer, LetterButton, PlaySoundButton, PlayWordButton } from './styles'

const Keyboard = ({ letters, selectedLetter, handleClickedButton, handlePlayLetterButton, handlePlayWordButton }) => {
  const { character } = selectedLetter

  const handleClick = (event) => {
    handleClickedButton(event)
  }

  const handlePlayLetterClick = (event) => {
    handlePlayLetterButton()
  }

  const handlePlayWordClick = (event) => {
    handlePlayWordButton()
  }

  return (
    <>
      <Container>
        <LettersContainer>
          {letters.map((letter) => (
            <LetterButton key={letter} onClick={handleClick} className={character === letter ? 'active' : 'null'}>
              {letter}
            </LetterButton>
          ))}

          <PlaySoundButton onClick={handlePlayLetterClick}>ss</PlaySoundButton>
          <PlayWordButton onClick={handlePlayWordClick}>ww</PlayWordButton>
        </LettersContainer>
      </Container>
    </>
  )
}

Keyboard.propTypes = {
  letters: PropTypes.array.isRequired,
  selectedLetter: PropTypes.object,
  handleClickedButton: PropTypes.func.isRequired,
  handlePlayLetterButton: PropTypes.func.isRequired,
  handlePlayWordButton: PropTypes.func.isRequired
}

export default Keyboard
