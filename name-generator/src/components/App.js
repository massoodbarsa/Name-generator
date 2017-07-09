import React, { Component } from 'react'
import store from '../store'
import {Logo, Form, Button} from '.'
import * as generators from '../generators'
import './App.css'

export default class App extends Component {

  generateName() {
    const {form} = this.state
    const Generator = generators[form.theme]
    const generator = new Generator(form)
    store.setState({generating: true})

    generator.generate().then(result => {
      store.setState({generating: false, result})
    })
  }

  componentWillMount() {
    this.subscription = store.subscribe(state => {
      this.setState(state)
    })
  }

  componentWillUnmount() {
    this.subscription.unsubscribe()
  }

  render() {
    const {form} = this.state

    return (
      <div className="App">
        <Logo/>
        <Form data={form}/>

        <div className="App-buttons">
          <Button label="GENERATE" onPress={this.onGeneratePress.bind(this)}/>
        </div>
      </div>
    )
  }

  onGeneratePress() {
    this.generateName()
  }

}