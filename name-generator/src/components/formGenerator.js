import React, { Component } from 'react';
import store from '../store';
import TextField from './TextField'
import './formGenerator.css';
import RadioButtonList from './RadioButtonList'

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
           error={store.state.error}
           label='1.What is your name'
           value={this.state.name}
           onChange={this.handleChange.bind(this,'name')}/>
         <TextField
           error={store.state.error}
           label='2.What is your email'
           value={this.state.email}
           onChange={this.handleChange.bind(this,'email')}/>

        <RadioButtonList
           radio={this.state.radio}
           handleRadioChange={this.handleRadioChange.bind(this)}
        />
      </div>
    );
  }


  handleChange(input,value){
   const form={...this.state}
   form[input]=value
   store.setState({form})

  }

  handleRadioChange(value){
    const form=[...this.state]
    form['radio']=value
    store.setState({form})
  }
}
