import React, { Component } from 'react';
import store from '../store';
import './App.css';

class App extends Component {

  componentWillMount() {
    this.subscription = store.subscribe(state => {
      this.setState({counter: state.counter})
    })
  }

  componentWillUnmount() {
    this.subscription.remove();
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;