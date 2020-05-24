import React, { Component } from 'react';
import Tetris from './components/Tetris';
import WelcomeScreen from './components/WelcomeScreen';

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

  ContinueVisiting = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isContinueState: true
    })
  }

  StartNewGame = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isContinueState: true,
      isLoadLocalStorage: false
    })
  }

  // dodaj sprawdzanie czy gra jest over, jesli tak to nie daj mozliwosc kontynuacji
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
