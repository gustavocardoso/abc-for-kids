import React from "react";
import PropTypes from "prop-types";

import {
  Container,
  LettersContainer,
  LetterButton,
  PlaySoundButton,
  PlayWordButton,
  Icon,
} from "./styles";

// const playButton = process.env.PUBLIC_URL + "/assets/images/icons/play.svg";
import playButton from "../../../assets/icons/play.svg";

console.log(playButton);

const Keyboard = ({
  letters,
  selectedLetter,
  handleClickedButton,
  handlePlayLetterButton,
  handlePlayWordButton,
}) => {
  const { character } = selectedLetter;

  const handleClick = (event) => {
    handleClickedButton(event);
  };

  const handlePlayLetterClick = (event) => {
    handlePlayLetterButton();
  };

  const handlePlayWordClick = (event) => {
    handlePlayWordButton();
  };

  return (
    <>
      <Container>
        <LettersContainer>
          {letters.map((letter) => (
            <LetterButton
              key={letter}
              onClick={handleClick}
              className={character === letter ? "active" : "null"}
            >
              {letter}
            </LetterButton>
          ))}

          <PlaySoundButton onClick={handlePlayLetterClick}>
            <Icon src={playButton} alt="Play" />{" "}
            <span className="buttonText">letter</span>
          </PlaySoundButton>
          <PlayWordButton onClick={handlePlayWordClick}>
            <Icon src={playButton} alt="Play" />{" "}
            <span className="buttonText">word</span>
          </PlayWordButton>
        </LettersContainer>
      </Container>
    </>
  );
};

Keyboard.propTypes = {
  letters: PropTypes.array.isRequired,
  selectedLetter: PropTypes.object,
  handleClickedButton: PropTypes.func.isRequired,
  handlePlayLetterButton: PropTypes.func.isRequired,
  handlePlayWordButton: PropTypes.func.isRequired,
};

export default Keyboard;
