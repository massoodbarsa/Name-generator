import React, { Component } from 'react';
import store from '../store';
import TextField from './TextField'
import './formGenerator.css';

export default class FormGenerator extends Component {



  componentWillMount() {
    this.subscription = store.subscribe(state => {
      this.setState(state.form)
    })
  }

  componentWillUnmount() {
    this.subscription.remove();
  }

  render() {
    return (
      <div className="formGenerator">
         <TextField
           label='1.What is your name'
           value={this.state.name}
           onChange={this.handleChange.bind(this,'name')}/>
         <TextField
           label='2.What is your email'
           value={this.state.email}
           onChange={this.handleChange.bind(this,'email')}/>
      </div>
    );
  }
  handleChange(input,value){
   const form={...this.state}
   form[input]=value
   store.setState({form})

  }
}
