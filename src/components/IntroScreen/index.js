import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";

import Logo from "../../components/Shared/Logo";
import { StartButton } from "./styles";

const IntroScreen = ({ startApp }) => {
  const handleStartApp = () => {
    startApp();
  };

  const handleKeyDown = useCallback(
    (e) => {
      if (e.keyCode === 32) {
        startApp();
      }
    },
    [startApp]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown, false);

    return () => {
      window.removeEventListener("keydown", handleKeyDown, false);
    };
  }, [handleKeyDown]);

  return (
    <>
      <Logo type="intro" />
      <StartButton onClick={handleStartApp}>
        [press here or hit &apos;space&apos;]
      </StartButton>
    </>
  );
};

IntroScreen.propTypes = {
  startApp: PropTypes.func.isRequired,
};

export default IntroScreen;
