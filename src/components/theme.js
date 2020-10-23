const colors = {
  camelot: '#8F2D56',
  pampas: '#F2F1EB',
  elm: '#218380',
  mineShaft: '#222',
  razzmatazz: '#D81159',
  renoSand: '#9B6A11',
  yellowOrange: '#FFBC42'
}

const colorPalette = {
  light: colors.pampas,
  dark: colors.mineShaft,
  primary: colors.elm,
  highlight: colors.yellowOrange
}

const mainTheme = {
  media: {
    desktop: '55rem'
  },

  fonts: {
    base: "'Roboto', sans-serif;",
    styled: "'Henny Penny', cursive;"
  },

  colors: {
    mainBgColor: colorPalette.highlight,
    mainTextColor: colorPalette.dark,

    titleBaseColor: colorPalette.light,
    titleFirstLetter: colors.razzmatazz,
    titleSecondLetter: colors.camelot,
    titleThirdLetter: colors.elm,

    startButtonBgColor: colorPalette.dark,
    startButtonTextColor: colorPalette.dark,
    startButtonTextHoverColor: colorPalette.light,

    headerBgColor: colorPalette.highlight,

    stageBgColor: colorPalette.light,
    stageLettersTextColor: colorPalette.dark,
    stageWordTextColor: colorPalette.primary,

    separatorBgColor: colorPalette.highlight,

    keyboardBgColor: colorPalette.primary,
    keyboardLetterBgColor: colorPalette.light,
    keyboardLetterBgColorActive: colorPalette.highlight,
    keyboardLetterBgColorClick: colorPalette.highlight,
    keyboardLetterTextColor: colorPalette.primary,
    keyboardLetterTextColorActive: colorPalette.light,
    keyboardLetterBorderColor: colorPalette.dark
  },

  mixins: {
    flexAlign: () => {
      return `
        display: flex;
        justify-content: center;
        align-items: center;
      `
    },

    flexAlignColumn: () => {
      return `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `
    }
  }
}

export default mainTheme
