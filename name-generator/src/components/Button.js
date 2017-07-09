import React from 'react'
import store from '../store'
import './Button.css'

export default function IncreaseButton({label, onClick}) {
	return (
		<button className="Button" onClick={onClick}>
			<span className="Button-label">{label}</span>
		</button>
	)
}