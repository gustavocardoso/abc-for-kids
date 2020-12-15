const colors = {
  alabaster: '#fafafa',
  camelot: '#8F2D56',
  doveGray: '#555',
  carolinaBlue: '#279AF1',
  mineShaft: '#222',
  pampas: '#F2F1EB',
  ruby: '#D81159',
  renoSand: '#9B6A11',
  yellowOrange: '#FFBC42'
}

const colorPalette = {
  lightest: colors.alabaster,
  light: colors.pampas,
  gray: colors.doveGray,
  dark: colors.mineShaft,
  primary: colors.carolinaBlue,
  highlight: colors.yellowOrange,
  danger: colors.ruby
}

const mainTheme = {
  media: {
    desktop: '55rem',
    largeDesktop: '130rem',
    tablet: '43rem'
  },

  fonts: {
    base: "'Roboto', sans-serif;",
    styled: "'Roboto Slab', serif;"
  },

  colors: {
    mainBgColor: colorPalette.highlight,
    mainTextColor: colorPalette.dark,

    titleBaseColor: colorPalette.lightest,
    titleFirstLetter: colors.ruby,
    titleSecondLetter: colors.camelot,
    titleThirdLetter: colors.carolinaBlue,

    startButtonBgColor: colorPalette.dark,
    startButtonTextColor: colorPalette.dark,
    startButtonTextHoverColor: colorPalette.light,

    headerBgColor: colorPalette.highlight,

    stageBgColor: colorPalette.lightest,
    stageLettersTextColor: colorPalette.dark,
    stageWordTextColor: colorPalette.primary,

    separatorBgColor: colorPalette.highlight,

    keyboardBgColor: colorPalette.primary,
    keyboardLetterBgColor: colorPalette.light,
    keyboardLetterBgColorActive: colorPalette.highlight,
    keyboardLetterBgColorClick: colorPalette.highlight,
    keyboardLetterTextColor: colorPalette.gray,
    keyboardLetterTextColorActive: colorPalette.light,
    keyboardLetterBorderColor: colorPalette.light,

    keyboardWordBgColor: colorPalette.highlight,
    keyboardWordBorderColor: colorPalette.highlight,
    keyboardWordBgColorActive: colorPalette.highlight,
    keyboardWordBgColorClick: colorPalette.highlight,
    keyboardWordTextColorActive: colorPalette.light,
    keyboardWordDisabledBgColor: colorPalette.gray
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
