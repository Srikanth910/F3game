import React, { Component } from 'react';
import './DiceGame.css';
import Dice from './Dice.js'
import './Dice.css';
// var Modal = ReactBootstrap.Modal;
// import Modal from 'react-bootstrap'
import { Link } from 'react-router-dom'

// const URL = 'ws://localhost:8080'

const URL = 'wss://f3-game-server.herokuapp.com/:8080'


const ws = new WebSocket(URL)

class DiceGame extends Component {

	constructor(props) {
		super(props);
		this.state = {
			diceOne: 'six',
			diceTwo: 'six',
			diceThree: 'six',
			value: 'Roll the Dice!',
			rolling: false
		}
		this.rollDice = this.rollDice.bind(this);



	}
	// getInitialState() {
	//     return { showModal: false };
	//   }

	//   close() {
	//     this.setState({ showModal: false });
	//   }

	//   open() {
	//     this.setState({ showModal: true });
	//   }




	componentDidMount = () => {

		ws.onmessage = (event) => {
			let resp = JSON.parse(event.data)
			let dies = resp.data.dies
			let diceArr = ['one', 'two', 'three', 'four', 'five', 'six']
			console.log("object", dies)

			if (resp.type === "results") {
				this.setState({
					rolling: false,
					diceOne: diceArr[dies[0] - 1],
					diceTwo: diceArr[dies[1] - 1],
					diceThree: diceArr[dies[2] - 1]
				})
			}
		}



	}

	rollDice = (e) => {


		this.setState({
			rolling: true
		})

		setTimeout(() => {
			ws.send(JSON.stringify({
				type: "diceRolling",
			}))
		}, 2000)

		// this.setState({
		// 	rolling : true,
		// 	diceOne : diceFace1,
		// 	diceTwo : diceFace2,

		// }, 800)
	}

	render() {

		console.log('state value ', this.state.value);
		return (
			// <Modal show={this.state.showModal} onHide={this.close}>

			<section className="DiceGame">
				<section className="DiceGame-inner">
					<Dice face={this.state.diceOne} rolling={this.state.rolling} />
					<Dice face={this.state.diceTwo} rolling={this.state.rolling} />
					<Dice face={this.state.diceThree} rolling={this.state.rolling} />

				</section>
				<button
					onClick={this.rollDice}
					className="DiceGame-btn"
					disabled={this.state.rolling}>
					{this.state.value}
				</button>

			</section>

		)
	}
}

export default DiceGame;