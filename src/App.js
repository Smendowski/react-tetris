import React, { Component } from 'react';
import Tetris from './components/Tetris';
import ContinueButton from './components/ContinueButton';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { isEmptyState: true }
  }

  ContinueVisiting = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isContinueState: true
    })
  }

  render() {
    return (
      <div>
        {this.state.isEmptyState && <ContinueButton continue={this.ContinueVisiting} />}
  
        {this.state.isContinueState  && <Tetris />}
      </div>
    )
  }
  
}

export default App;
