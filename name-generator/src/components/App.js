import React, { Component } from 'react';
import store from '../store';
import FormGenerator from './formGenerator'
import Header from './Header'
import ButtonGenerator from './buttonGenerator'
import Spinner from './Spinner'
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

    if (this.state.generator === false || this.state.error === true) {
      return this.FirstPage()
    }
    if (this.state.generator === true ) {
      return this.ResultPage()
    }
  }



  onClickGenerator() {

    if (this.state.form.name === '' || this.state.form.email === '') {
      this.onError()
    } else {
      store.setState({
        error: false
      })
    }

    this.generateName()
    const generator = { ...this.state}
    if (this.state.generator) {
      store.setState({
        loading: false ,
        generator: false
      })
    } else {
      setTimeout(() => store.setState({ loading: true }), 4000);

      store.setState({
        generator: true
      })
    }
  }


  onError = () => {
    store.setState({
      error: true
    })
  }



  generateName() {

    const name = this.state.form.name
    const email = this.state.form.email
    const radio = this.state.form.radio
    let newName;

    switch (radio) {
      case 'Classic':
        newName = `${name} and brothers`
        break;
      case 'Business':
        newName = `${name} Corp`
        break;
      default:
        // this will be Hipster
        newName = `${name} ${this.getMessage()}`
    }

    const companyName = this.state.companyName
    store.setState({
      companyName: newName
    })
  }


  getMessage = () => {
    let messages = ["Menyuch", "Djasus", "Mohandis"];
    return messages[Math.floor(Math.random() * messages.length)];
  }


   FirstPage=()=> {
    return(
      <div className="App">

        <Header randomName={this.getMessage() }/>

        <div className='App-form'>
          <FormGenerator />
        </div>

        <div className='App-buttonGeneretor'>
           <ButtonGenerator
             label='Generator'
             onClick={this.onClickGenerator.bind(this)}
             generator={this.state.generator}
             error={this.state.error}
           />
        </div>

      </div>
    )
  }


  ResultPage=()=>{
    if(this.state.loading===false)
    return <Spinner/>


    return (
      <div className="App">
          <Header/>

          <div className='Message'>
              <ul className='Message-list'>
                  <li><span className='span'>{this.state.companyName}</span></li><br/>
              </ul>
          </div>

            <div className='App-buttonGeneretor'>
               <ButtonGenerator
                 label='Refresh'
                 onClick={this.onClickGenerator.bind(this)}
               generator={this.state.generator}
             />
          </div>
      </div>

       )
  }

}




export default App;
