import React, { Component } from 'react';
import store from '../store';
import {IncreaseButton} from '.'
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
        <div className="App-state">
          {JSON.stringify(this.state.counter)}
        </div>

        <IncreaseButton/>
      </div>
    );
  }
}

export default App;