import React from'react'
import PropTypes from 'prop-types'
import RadioButtons from './RadioButtons'
import './RadioButtonList.css'

export default class RadioButtonList extends React.Component{

  static propTypes = {
    radio: PropTypes.string,
    handleRadioChange: PropTypes.func.isRequired
  }

  static defaultProps = {
    handleRadioChange: undefined
  }


  render(){
    return(
      <div className='RadioButtonList'>
          <ul>
              <li>
                <RadioButtons
                  value='Classic'
                  label='Classic'
                  checked={this.props.radio==='Classic'}
                  onChange={this.props.handleRadioChange.bind(this)}
                />
              </li>
              <li>
                <RadioButtons
                  value='Business'
                  label='Business'
                  checked={this.props.radio==='Business'}
                  onChange={this.props.handleRadioChange.bind(this)}
                />
              </li>
              <li>
                <RadioButtons
                  value='Hipster'
                  label='Hipster'
                  checked={this.props.radio==='Hipster'}
                  onChange={this.props.handleRadioChange.bind(this)}
                />
              </li>
          </ul>
      </div>

    )
  }
}
