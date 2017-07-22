import React from'react'
import PropTypes from 'prop-types'

export default class RadioButtons extends React.Component{

  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
  }

  static defaultProps = {
    label:'',
    value:'',
    onClick: () => undefined
  }


  render(){
    const{label,value,checked}=this.props
    return(
      <div className='RadioButtons'>
        <label>
          <input type='radio' value={value} checked={checked} onChange={this.handleRadioButton.bind(this)}/>
          {label}
        </label>
      </div>

    )
  }

  handleRadioButton(e){
    this.props.onChange(e.target.value)
  }
}
