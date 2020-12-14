import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const Stage = ({ selectedLetter }) => {
  const { character, word } = selectedLetter
  const image =
    character === ''
      ? '/assets/images/icons/select.svg'
      : `/assets/images/words/${word}.svg`

  return (
    <>
      <S.Container className={character === '' ? 'noLetterSelected' : null}>
        {character !== '' && (
          <S.Letter>
            <S.LowerCase>{character}</S.LowerCase>
            <S.UpperCase>{character.toUpperCase()}</S.UpperCase>
          </S.Letter>
        )}

        <S.WordBox>
          {character !== '' && <S.Word>{word}</S.Word>}
          <S.Icon src={process.env.PUBLIC_URL + image} />
          {character === '' && (
            <S.Instructions>Please, select a letter below!</S.Instructions>
          )}
        </S.WordBox>
      </S.Container>
    </>
  )
}

Stage.propTypes = {
  selectedLetter: PropTypes.object
}

export default Stage
