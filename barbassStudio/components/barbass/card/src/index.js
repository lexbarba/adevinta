import React from 'react'
import PropTypes from 'prop-types'
import AtomCard from '@s-ui/react-atom-card'
import AtomImage from '@s-ui/react-atom-image'

function BarbasCard({image, title, description, actors, externalUrl}) {
  const FilmImage = () => (
    <AtomImage src={image} alt="" className="sktest-BarbasCard-image" />
  )
  const FilmContent = () => (
    <div className="sktest-BarbasCard-content">
      <h2>{title}</h2>
      <p>{description}</p>
      <h4>List of Actors</h4>
      <ul>{actors && actors.map(actor => <li>{actor}</li>)}</ul>
    </div>
  )

  return (
    <AtomCard
      media={FilmImage}
      content={FilmContent}
      href={externalUrl}
      vertical
    />
  )
}

BarbasCard.displayName = 'BarbasCard'

// Remove these comments if you need
// BarbasCard.contextTypes = {i18n: PropTypes.object}
BarbasCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  actors: PropTypes.array,
  externalUrl: PropTypes.string
}
// BarbasCard.defaultProps = {}

export default BarbasCard
