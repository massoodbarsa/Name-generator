import React, { Component } from 'react';
import store from '../store';
import {FormGenerator, Header, ButtonGenerator, Spinner} from '.'
import './App.css';
import * as actions from '../actions';
import {FormPage, ResultPage , LoadingPage} from '../pages';

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
    const {loading , companyName} = this.state;
    if(loading){
      return <LoadingPage/>
    }
    else if (companyName != null) {
      return <ResultPage/>
    }
    else {
      return <FormPage/>
    }
  }
}




export default App;
