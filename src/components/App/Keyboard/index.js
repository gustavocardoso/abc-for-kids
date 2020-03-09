import React from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  LetterButton,
  PlaySoundButton,
  PlayWordButton
} from './styles'

export default function Keyboard({
  letters,
  selectedLetter,
  handleClickedButton
}) {
  const handleClick = event => {
    handleClickedButton(event)
  }
  return (
    <>
      <Container>
        {letters.map(letter => (
          <LetterButton
            key={letter}
            onClick={handleClick}
            className={selectedLetter === letter ? 'active' : 'null'}
          >
            {letter}
          </LetterButton>
        ))}

        <PlaySoundButton>ss</PlaySoundButton>
        <PlayWordButton>ww</PlayWordButton>
      </Container>
    </>
  )
}

Keyboard.propTypes = {
  letters: PropTypes.array.isRequired
}
