import React from 'react'

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

export default Root
