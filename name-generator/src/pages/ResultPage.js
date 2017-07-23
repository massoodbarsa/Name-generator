import React from 'react';
import {Header, ButtonGenerator} from '../components'
import store from '../store';
import * as actions from '../actions';



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
            {this.state.companyName}
          </div>
        </div>
        <div className='App-buttonGeneretor'>
          <ButtonGenerator
            label='Refresh'
            onClick={this.onClickRefresh.bind(this)}
          />
        </div>
      </div>
    )
  }

  onClickRefresh(){
    actions.refresh();
  }

}
