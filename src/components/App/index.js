import React, { useEffect, useRef, useState } from "react";

// import Logo from "../Shared/Logo";
import Stage from "./Stage";
import Keyboard from "./Keyboard";
import Player from "./Player";

import alphabetData from "../../data/letters.json";

import { Container, Header, Separator } from "./styles";

const App = () => {
  const [alphabet, setAlphabet] = useState([]);
  const [letters, setLetters] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState({
    character: "",
    word: "",
  });
  const [audioLetterSrc, setAudioLetterSrc] = useState([]);
  const [audioWordSrc, setAudioWordSrc] = useState([]);

  const playerLetter = useRef(null);
  const playerWord = useRef(null);

  useEffect(() => {
    const fetchAlphabet = async () => {
      setLoadingData(true);
      setAlphabet(alphabetData);
      setLoadingData(false);
    };

    fetchAlphabet();
  }, []);

  useEffect(() => {
    if (alphabet.length > 0) {
      setLetters(alphabet.map((letter) => letter.character));
    }
  }, [alphabet]);

  useEffect(() => {
    if (selectedLetter.character !== "") {
      setAudioLetterSrc([
        { file: `${selectedLetter.character}.mp3`, type: "audio/mp3" },
        { file: `${selectedLetter.character}.ogg`, type: "audio/ogg" },
      ]);
      setAudioWordSrc([
        { file: `${selectedLetter.word}.mp3`, type: "audio/mp3" },
        { file: `${selectedLetter.word}.ogg`, type: "audio/ogg" },
      ]);
    }
  }, [selectedLetter]);

  const handleClickedButton = async (event) => {
    const clickedLetter = event.target.innerText.toLowerCase();
    const filteredLetter = alphabet.filter(
      (letter) => letter.character === clickedLetter
    );
    const words = filteredLetter[0].words;
    const randomWord = words[Math.floor(Math.random() * words.length)].word;

    setSelectedLetter({ character: clickedLetter, word: randomWord });

    await handlePlayLetterButton();
  };

  const handlePlayLetterButton = (event) => {
    return new Promise((resolve, reject) => {
      window.setTimeout(() => {
        playerLetter.current.pause();
        playerLetter.current.load();
        playerLetter.current.play();
        resolve("Playing sound");
      }, 300);
    });
  };

  const handlePlayWordButton = () => {
    if (audioWordSrc.length === 0) {
      return false;
    }

    playerWord.current.pause();
    playerWord.current.load();
    playerWord.current.play();
  };

  return (
    <>
      <Container>
        <Header>{/* <Logo /> */}</Header>

        <Stage selectedLetter={selectedLetter} />
        <Separator />

        {selectedLetter.character !== "" && (
          <Player
            folder="letters"
            audioSrc={audioLetterSrc}
            ref={playerLetter}
          />
        )}
        {selectedLetter.word !== "" && (
          <Player folder="words" audioSrc={audioWordSrc} ref={playerWord} />
        )}

        {!loadingData && alphabet.length > 0 && (
          <Keyboard
            letters={letters}
            selectedLetter={selectedLetter}
            handleClickedButton={handleClickedButton}
            handlePlayLetterButton={handlePlayLetterButton}
            handlePlayWordButton={handlePlayWordButton}
          />
        )}
      </Container>
    </>
  );
};

export default App;
