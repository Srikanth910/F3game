import React, { Component } from 'react'
import './Dic.css';

export default class Dices extends Component {
    render(){
		return(
			<i className={`Dice fas fa-dice-${this.props.face} ${this.props.rolling && 'rolling'}`}></i>
		)
	}
}
