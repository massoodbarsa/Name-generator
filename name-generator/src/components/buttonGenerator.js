import React from 'react'
import PropTypes from 'prop-types'
import './buttonGenerator.css'

export default class ButtonGenerator extends React.Component{

  static propTypes ={
    label:PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired
  }
  static defaultProps ={
    onClick:() => undefined
  }


  render(){
    const {label,onClick} = this.props
    return(
      <button className='Button' onClick={onClick}>
      {label}
      </button>
    )
  }
}
