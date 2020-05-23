import React, { Component } from 'react';
import Tetris from './components/Tetris';
import WelcomeScreen from './components/WelcomeScreen';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      isEmptyState: true,
      isContinueState: false,
      // change to true if want to load from local storage - >
      isLoadLocalStorage: true,
      }
  }

  ContinueVisiting = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isContinueState: true
    })
  }

  LoadLocalStorage = () => {
    this.setState({
      isLoadLocalStorage: true
    })
  }

  render() {
    return (
      <div>  
        {this.state.isEmptyState && 
          <WelcomeScreen continue = {this.ContinueVisiting} />
          }  

        {this.state.isContinueState  && <Tetris loadLocalStorage
          = { this.state.isLoadLocalStorage }/>}
      </div>
    )
  }
  
}

export default App;
