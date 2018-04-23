import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux'

const defaultState = { count: 0 }

const reducer  = function(state = defaultState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }
    default:
      return state
  }
}

const store = createStore(reducer)
class App extends Component {
  componentWillMount() {
    store.subscribe(() => this.setState(store.getState()));
    this.setState(store.getState());
  }

  render() {
    const onClick = () => store.dispatch({ type: 'INCREMENT' })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>{this.state.count}</p>
        <button onClick={onClick}>+</button>
      </div>
    );
  }
}

export default App;
