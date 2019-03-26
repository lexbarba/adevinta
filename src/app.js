import React, {useReducer} from 'react'
import ReactDOM from 'react-dom'
import AtomProgressBar from '@s-ui/react-atom-progress-bar'
import MoleculeButtonGroup from '@s-ui/react-molecule-button-group'
import AtomButton from '@schibstedspain/sui-atom-button'

import './styles.scss'

export default function App() {
  let [value, setValue] = useReducer((state, action) => {
    switch (action) {
      case 'add1':
        return state + 1
      case 'add10':
        return state + 10
      case 'remove1':
        return state - 1
      case 'clear':
        return state - state
      default:
        return state
    }
  }, 0)

  return (
    <div>
      <AtomProgressBar
        percentage={value}
        indicatorTotal
        size="large"
        type="circle"
      />
      <div className="btn__container">
        <MoleculeButtonGroup>
          <AtomButton
            size="large"
            onClick={() => {
              setValue('add1')
            }}
          >
            Add 1%
          </AtomButton>
          <AtomButton
            size="large"
            type="secondary"
            onClick={() => {
              setValue('add10')
            }}
          >
            Add 10%
          </AtomButton>
          <AtomButton
            size="large"
            type="tertiary"
            onClick={() => {
              setValue('remove1')
            }}
          >
            Remove 1%
          </AtomButton>
          <AtomButton
            size="large"
            type="accent"
            onClick={() => {
              setValue('clear')
            }}
          >
            Clear Loading Circle
          </AtomButton>
        </MoleculeButtonGroup>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
