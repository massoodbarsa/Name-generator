import React, { Component } from 'react';
import store from '../store';
import FormGenerator from './formGenerator'
import Header from './Header'
import ButtonGenerator from './buttonGenerator'
import './App.css';

class App extends Component {

  componentWillMount() {
    this.subscription = store.subscribe(state => {
      this.setState(state)
    })
  }

  componentWillUnmount() {
    this.subscription.remove();
  }

  render() {
    return (
      <div className="App">
        <Header/>

        <div className='App-form'>
        <FormGenerator />
        </div>

        <div className='App-buttonGeneretor'>
        <ButtonGenerator label='Generator' onClick={this.onClickGenerator.bind(this)}/>
        </div>

      </div>
    );
  }
  onClickGenerator(){
    alert('hello')

  }
}

export default App;
