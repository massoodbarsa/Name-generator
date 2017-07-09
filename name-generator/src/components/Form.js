import React from 'react'
import './Form.css'
import store from '../store'

export default class Form extends React.Component {

	componentWillMount() {
		this.subscription = store.subscribe(state => {
			this.setState(state.form)
		})
	}

	componentWillUnmount() {
		this.subscription.remove()
	}

	render() {
		return (
			<div className="Form">

				<FormRow label="1. What is your own name?">
					<input
						type="text"
						value={this.state.ownName || ''}
						onChange={e => { this.update({ownName: e.target.value}) }}
					/>
				</FormRow>

			</div>
		)
	}

	update(newData) {
		const {data} = this.props
		store.setState({form: {...data, ...newData}})
	}

}

export function FormRow({label, children}) {
	return (
		<div className="Form-row">
			<div className="Form-row-label">
				{label}
			</div>
			<div className="Form-row-content">
				{children}
			</div>
		</div>
	)
}