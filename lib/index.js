import React from 'react'
import { hot } from 'react-hot-loader'

class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
  }

  incrementCounter() {
    const counter = this.state.counter + 1

    this.setState({ counter })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.incrementCounter()}>
          {this.state.counter}
        </button>
      </div>
    )
  }
}

export default hot(module)(Root)
