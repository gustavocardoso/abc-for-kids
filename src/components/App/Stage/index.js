import React from 'react'

import * as S from './styles'

export default function Stage({ selectedLetter }) {
  const { character, word } = selectedLetter
  const object = 'wolf'
  const image =
    character === ''
      ? '/assets/images/select.svg'
      : `/assets/images/${object}.svg`

  return (
    <>
      <S.Container className={character === '' ? 'noLetterSelected' : null}>
        {character !== '' && (
          <S.Letter>
            <S.UpperCase>{character.toUpperCase()}</S.UpperCase>
            <S.LowerCase>{character}</S.LowerCase>
          </S.Letter>
        )}

        <S.WordBox>
          {character !== '' && <S.Word>{word}</S.Word>}
          <S.Icon src={image} />
          {character === '' && (
            <S.Instructions>Please, select a letter below!</S.Instructions>
          )}
        </S.WordBox>
      </S.Container>
    </>
  )
}
