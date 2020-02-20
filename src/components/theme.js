const colors = {
  camelot: '#8F2D56',
  cararra: '#ECEBE4',
  elm: '#218380',
  mineShaft: '#222',
  razzmatazz: '#D81159',
  renoSand: '#9B6A11',
  yellowOrange: '#FFBC42'
}

const mainTheme = {
  media: {
    desktop: '55rem'
  },

  fonts: {
    base: "'Open Sans', sans-serif;",
    styled: "'Henny Penny', cursive;"
  },

  colors: {
    mainBgColor: colors.yellowOrange,
    mainTextColor: colors.mineShaft,

    titleBaseColor: colors.cararra,
    titleFirstLetter: colors.razzmatazz,
    titleSecondLetter: colors.camelot,
    titleThirdLetter: colors.elm,

    startButtonBgColor: colors.mineShaft,
    startButtonTextColor: colors.mineShaft,
    startButtonTextHoverColor: colors.cararra,

    headerBgColor: colors.yellowOrange,
    stageBgColor: colors.cararra,
    playerBgColor: colors.yellowOrange,
    keyboardBgColor: colors.elm
  },

  mixins: {
    flexAlign: () => {
      return `
        display: flex;
        justify-content: center;
        align-items: center;
      `
    }
  }
}

export default mainTheme
