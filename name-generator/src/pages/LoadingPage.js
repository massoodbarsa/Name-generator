import React from 'react';
import {Spinner,Header} from '../components'


export default class LoadingPage extends React.Component{
  render(){
    return(
    <div className="App">

      <Header/>

      <Spinner/>
      
    </div>
  )
  }
}
