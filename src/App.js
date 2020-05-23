import React, { Component } from 'react';
import Tetris from './components/Tetris';
import WelcomeScreen from './components/WelcomeScreen';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      isEmptyState: true,
      isContinueState: false,
      isLoadLocalStorage: false,
      isLocalStorageContain: JSON.parse(localStorage.getItem("stageStored"))!== null ? true : false}
  }

  ContinueVisiting = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isContinueState: true
    })
    localStorage.clear();
  }

  LoadLocalStorage = () => {
    this.setState({
      isLoadLocalStorage: true,
      isContinueState: true,
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
