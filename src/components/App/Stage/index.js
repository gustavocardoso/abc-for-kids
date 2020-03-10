import React from 'react'

import * as S from './styles'

export default function Stage({ selectedLetter }) {
  const object = 'wolf'
  const image =
    selectedLetter === ''
      ? '/assets/images/select.svg'
      : `/assets/images/${object}.svg`

  return (
    <>
      <S.Container
        className={selectedLetter === '' ? 'noLetterSelected' : null}
      >
        {selectedLetter !== '' && (
          <S.Letter>
            <S.UpperCase>{selectedLetter.toUpperCase()}</S.UpperCase>
            <S.LowerCase>{selectedLetter}</S.LowerCase>
          </S.Letter>
        )}

        <S.WordBox>
          {selectedLetter !== '' && <S.Word>Wolf</S.Word>}
          <S.Icon src={image} />
          {selectedLetter === '' && (
            <S.Instructions>Please, select a letter below!</S.Instructions>
          )}
        </S.WordBox>
      </S.Container>
    </>
  )
}
