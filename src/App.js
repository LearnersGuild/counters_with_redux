import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import Counter from './Counter'

const mapStateToProps = state => ({
  counts: state.counts
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: (index) => dispatch({ type: 'INCREMENT', index }),
  decrement: (index) => dispatch({ type: 'DECREMENT', index })
})
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.props.counts.map((count, index) => {
          return <Counter
            count={count}
            increment={() => this.props.increment(index)} 
            decrement={() => this.props.decrement(index)} 
            />
        })}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)