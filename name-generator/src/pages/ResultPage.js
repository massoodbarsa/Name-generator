import React from 'react';
import {Header, ButtonGenerator} from '../components'
import store from '../store';
import * as actions from '../actions';
import '../pages/ResultPage.css'



export default class ResultPage extends React.Component{
  componentWillMount() {
    this.subscription = store.subscribe(state => {
      this.setState(state)
    })
  }

  componentWillUnmount() {
    this.subscription.remove();
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <div className="Message-list">
          <div className="Message">
            <span className="span">{this.state.companyName}</span>
          </div>
        </div>
        <div className='ResultPage-button'>
          <ButtonGenerator
            label='Refresh'
            onClick={this.onClickRefresh.bind(this)}
          />
        </div>
        <div className='Retry-button'>
          <ButtonGenerator
            label='Retry'
            onClick={this.onClicRetry.bind(this)}
          />
        </div>

      </div>
    )
  }

  onClickRefresh(){
    actions.refresh();
  }

  onClicRetry(){
    actions.generateName()
  }

}
