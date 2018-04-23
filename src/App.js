import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch({ type: 'INCREMENT' })
})
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>{this.props.count}</p>
        <button onClick={this.props.onClick}>+</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)