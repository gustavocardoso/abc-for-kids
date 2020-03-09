import React from 'react'

import * as S from './styles'

export default function Stage() {
  return (
    <>
      <S.Container>
        <S.Letter>
          <S.UpperCase>W</S.UpperCase>
          <S.LowerCase>w</S.LowerCase>
        </S.Letter>

        <S.WordBox>
          <S.Word>Wolf</S.Word>
          <S.Icon src='/assets/images/wolf.svg' />
        </S.WordBox>
      </S.Container>
    </>
  )
}
