import React from 'react'
import './Spinner.css'
import times from 'lodash/times'

export default function Spinner() {
	return (
		<div className="Spinner">
			{times(50, index => <div key={index}/>)}
		</div>
	)
}
