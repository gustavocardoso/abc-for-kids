import React from 'react'
import PropTypes from 'prop-types'

const Player = React.forwardRef(({ audioSrc, folder }, ref) => {
  return (
    <>
      {audioSrc.length > 0 && (
        <audio ref={ref}>
          {audioSrc.map((source) => (
            <source
              id={folder}
              src={`${process.env.PUBLIC_URL}/assets/audio/${folder}/${source.file}`}
              type={source.type}
              key={source.file}
            />
          ))}
        </audio>
      )}
    </>
  )
})

Player.displayName = 'Player'

Player.propTypes = {
  audioSrc: PropTypes.array,
  folder: PropTypes.string.isRequired
}

export default Player
export const proptype = Player.PropTypes
