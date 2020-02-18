import React, { useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'

import Logo from './logo'
import { StartButton } from './styles'

function IntroScreen({ startApp }) {
  const handleStartApp = () => {
    startApp()
  }

  const handleKeyDown = useCallback(
    e => {
      if (e.keyCode === 32) {
        startApp()
      }
    },
    [startApp]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown, false)

    return () => {
      window.removeEventListener('keydown', handleKeyDown, false)
    }
  }, [handleKeyDown])

  return (
    <>
      <Logo type='intro' />
      <StartButton onClick={handleStartApp}>
        [press here or hit "space”]
      </StartButton>
    </>
  )
}

IntroScreen.propTypes = {
  startApp: PropTypes.func.isRequired
}

export default IntroScreen
