import React from 'react';
import {FormGenerator, Header, ButtonGenerator} from '../components'
import store from '../store';
import * as actions from '../actions';


export default class FormPage extends React.Component{
  componentWillMount() {
    this.subscription = store.subscribe(state => {
      this.setState(state)
    })
  }

  componentWillUnmount() {
    this.subscription.remove();
  }


  render(){
    return(
      <div className="App">

        <Header/>

        <div className='App-form'>
          <FormGenerator />
        </div>

        <div className='App-buttonGeneretor'>
           <ButtonGenerator
             label='Generator'
             onClick={this.onClickGenerator.bind(this)}
           />
        </div>

      </div>
    )
  }

  
  onClickGenerator() {

    if (this.state.form.name === '' || this.state.form.email === '') {
      store.setState({
        error: true
      })
      return
    }
    store.setState({
      error: false
    })
    actions.generateName()
  }
}
