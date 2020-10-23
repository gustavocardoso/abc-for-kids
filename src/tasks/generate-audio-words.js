const Txt2Audio = require('txt2audio')
const path = require('path')

const alphabet = require('../data/letters.json')

const generateAudioWords = () => {
  const wordsByLetter = alphabet.reduce((wordsArray, letter) => {
    return wordsArray.concat(letter.words)
  }, [])

  const allWords = wordsByLetter.map(letter => letter.word)

  allWords.forEach(word => {
    const txt2audio = Txt2Audio({
      text: word,
      filename: word,
      voicename: 'en-US',
      path: path.resolve(__dirname, '..', '..', 'public', 'assets', 'audio', 'words'),
      gender: 'female',
      ogg: true,
      debug: false
    })

    txt2audio.generateAudio()
  })
}

module.exports = generateAudioWords
