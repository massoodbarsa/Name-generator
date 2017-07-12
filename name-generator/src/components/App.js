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
    if(this.state.generator===false){
    return (
      <div className="App">
        <Header/>

        <div className='App-form'>
        <FormGenerator />
        </div>

        <div className='App-buttonGeneretor'>
           <ButtonGenerator
             label='Generator'
             onClick={this.onClickGenerator.bind(this)}
             generator={this.state.generator}
           />
        </div>

      </div>
    );
  }

  if(this.state.generator===true){


      return (
        <div className="App">

              <Header/>

              <div className='App-form'>
              <FormGenerator />
              </div>
              <div className='Button-area'>
                  <div className='App-buttonGeneretor'>
                     <ButtonGenerator
                       label='Refresh'
                       onClick={this.onClickGenerator.bind(this)}
                       generator={this.state.generator}
                     />
                  </div>

                  <div className='Message'>
                      <ul className='Message-list'>
                          <li><span className='span'>This is your name </span>: {this.state.form.name}</li><br/>
                          <li><span className='span'>This is your email</span> : {this.state.form.email}</li>
                      </ul>
                  </div>
             </div>
        </div>

         )
     }

  }
  onClickGenerator(){
    const generator={...this.state}
    if(this.state.generator) {
        store.setState({generator:false})
      }else{
        store.setState({generator:true})
    }
  }


}

export default App;
