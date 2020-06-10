import React, { Component } from 'react';
import Tetris from './components/Tetris';
import WelcomeScreen from './components/WelcomeScreen';

/**
 * @desc root class'based component
 */
class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      isEmptyState: true,
      isContinueState: false,
      isLoadLocalStorage: localStorage.getItem("stageStored")
        === null ? false : true,
      }
  }

  /**
   * @desc modify component state if user is willing to continue game
   */
  ContinueVisiting = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isContinueState: true
    })
  }

  /**
   * @desc modify component state if user wants to start a new game
   */
  StartNewGame = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isContinueState: true,
      isLoadLocalStorage: false
    })
    localStorage.clear();
  }

  /**
   * @desc render component and return it's child components
   */
  render() {
    return (
      <div>  
        {this.state.isEmptyState && 
          <WelcomeScreen continue = {this.ContinueVisiting}
            startNew = {this.StartNewGame}
            loadLocalStorage= { this.state.isLoadLocalStorage } />
          }  
        {this.state.isContinueState  && <Tetris loadLocalStorage
          = { this.state.isLoadLocalStorage }/>}
      </div>
    )
  }
  
}

export default App;
