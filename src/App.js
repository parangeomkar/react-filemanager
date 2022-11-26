import MainContainer from './components/MainContainer';
import './App.css';
import { Component } from 'react';
import GlobalStateContext from "./GlobalStateContext";
import NavbarContainer from './components/NavbarContainer';


export default class App extends Component {

  constructor() {
    super();

    //states
    this.state = {
      currentFolder: null,
      currentBreadcrumbs: [],
      selectedItems: []
    };

    //bindings
    this.setGlobalState = this.setGlobalState.bind(this);
  }

  setGlobalState(newStates) {
    this.setState(newStates);
  }

  render() {
    return (
      <div className="App">
        <GlobalStateContext.Provider value={{ globalState: this.state, setGlobalState: this.setGlobalState }}>
          <NavbarContainer />
          <MainContainer />
        </GlobalStateContext.Provider>
      </div>
    );
  }
}