const Txt2Audio = require('txt2audio')
const path = require('path')

const alphabet = require('../../public/assets/data/letters.json')

const generateAudioLetters = () => {
  const letters = alphabet.map(letter => letter.character)

  letters.forEach(letter => {
    const txt2audio = Txt2Audio({
      text: letter,
      filename: letter,
      voicename: 'en-US',
      path: path.resolve(__dirname, '..', '..', 'public', 'assets', 'audio', 'letters'),
      gender: 'female',
      ogg: true,
      debug: false
    })

    txt2audio.generateAudio()
  })
}

module.exports = generateAudioLetters
