import React from 'react'
import AtomButton from '@schibstedspain/sui-atom-button'
import AtomInput from '@s-ui/react-atom-input'

function BarbasSearchBar() {
  return (
    <div className="sktest-BarbasSearchBar">
      <form className="sktest-BarbasSearchBar-wrapper">
        <AtomInput
          className="sktest-BarbasSearchBar-input"
          name="input"
          size="m"
          type="text"
          placeholder="Type in your query!"
        />
        <AtomButton className="sktest-BarbasSearchBar-button">
          Search
        </AtomButton>
      </form>
    </div>
  )
}

BarbasSearchBar.displayName = 'BarbasSearchBar'

// Remove these comments if you need
// BarbasSearchBar.contextTypes = {i18n: PropTypes.object}
//  BarbasSearchBar.defaultProps = {}

export default BarbasSearchBar
