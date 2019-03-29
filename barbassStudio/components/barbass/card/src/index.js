import React from 'react'
import PropTypes from 'prop-types'
import AtomCard from '@s-ui/react-atom-card'

function BarbasCard({image, title, year, id}) {
  const FilmImage = () => (
    <img src={image} alt="" className="sktest-BarbasCard-image" />
  )
  const FilmContent = () => (
    <div className="sktest-BarbasCard-content">
      <h2>{title}</h2>
      <p>Year: {year}</p>
    </div>
  )

  return (
    <a href="#" key={id} className="sktest-BarbasCard">
      <AtomCard media={FilmImage} content={FilmContent} vertical />
    </a>
  )
}

BarbasCard.displayName = 'BarbasCard'

// Remove these comments if you need
// BarbasCard.contextTypes = {i18n: PropTypes.object}
BarbasCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  id: PropTypes.string
}
// BarbasCard.defaultProps = {}

export default BarbasCard
