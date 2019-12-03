import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import './Game.css';
import Fullscreen from 'react-fullscreen-crossbrowser';
import 'react-rangeslider/lib/index.css';
import { GameaccessToken, Getdata } from './Action/ServerApi';
import Slider from 'react-rangeslider';
// import{get} from 'react-lodash'
const URL = 'wss://f3-gs.jaqk.in/rooms/85ec04b2-ec2f-49be-8840-363370431b7d';


const ws = new WebSocket(URL);




export default class Game extends Component {
	// rangevalue = [0,10, 25, 50, 75, 100,200,300,400,500,600,700,800,900,1000];

	constructor(props) {
		super(props)

		this.state = {
			showModal: true,
			isFullscreenEnabled: false,
			minvalue: 0,
			maxvalue: 1000,
			step: 100,
			max:13,
			handlerclick: "",
			values: [5,10, 25, 50, 75, 100,200,300,400,500,600,700,800,900,1000],
			currentStepIndex: 0,
			

			balance: 10000,
			showimg: false,
			number: 0,
			name: "srikanth",
			total: 0,
			accessToken: '',
			userId: '',
			roomId: '',
			Joinroom: '',
			lastroll:'',
			value:0
		}
	}



	componentDidMount = () => {
		const ws = new WebSocket(URL);


		// Getdata().then(userGetdata => {
		// 	console.log('id', userGetdata.userId);
		// 	this.setState({
		// 		userId: userGetdata.userId,
		// 	})

		// }).catch(err => {
		// 	console.log("error", err)
		// })




		// GameaccessToken().then(Token => {
		// 	console.log('responce Token', Token);
		// 	this.setState({
		// 		accessToken: Token.accessToken
		// 	})
		// }).catch(err => {
		// 	console.log('error,', err)
		// });





		// ws.onopen = () => {

		// 	console.log('access Token', this.state.accessToken)


		// 	console.log(' connection established');


		// 	ws.send(
		// 		JSON.stringify(
		// 			{
		// 				type: "join",
		// 				data: {
		// 					"accessToken": this.state.accessToken,
		// 					"roomId": this.state.userId,
		// 				}
		// 			}));


		// };


		// ws.onmessage = (event) => {
		// 	console.log("message send sever", event);


		// 	if (JSON.parse(event.data).type === "join-room") {
		// 		console.log(" Join:", JSON.parse(event.data).data.room);

		// 		const Joinroom = JSON.parse(event.data).data.room


		// 		this.setState({
		// 			roomId: Joinroom

		// 		})
		// 		console.log('room number ', this.state.roomId)

		// 	}

		// };
		// ws.onerror = (event) => {
		// 	console.log('error websocket', event)
		// }
		// ws.onclose = (event) => {

		// 	console.log('closed event', event);
		// 	const ws = new WebSocket(URL);
		// 	ws.onopen = () => {
		// 		console.log('userid', this.state.RoomId)


		// 		console.log(' connection established');


		// 		ws.send(
		// 			JSON.stringify(
		// 				{
		// 					type: "join",
		// 					data: {
		// 						"accessToken": this.state.accessToken,
		// 						"roomId": this.state.RoomId
		// 					}
		// 				}));
		// 	}



		// }

	}

	getInitialState() {
		return { show: false };
	}

	render() {
		let close = () => {
			console.log('hiding');
			this.setState({ show: false });
		}
	}
	getInitialState() {
		return {
			showModal: false,


		};
	}
	modelclose = () => {

		this.setState({
			show: false
		})

	}

	handleopen = () => {
		this.setState({
			show: true

		})
	}

	close = () => {
		this.setState({
			showModal: false,
			setShow: false

		});
		window.location.href = "http://localhost:8000/LiveCasino"
	}

	open = () => {
		console.log('open')
		this.setState({
			showModal: true,
			setShow: true
		});

	}


	handlechange = (event) => {

		this.setState({
			value: event.target.value
		})
	}


	handlerclick = () => {
		console.log('botton1');

		const { handlerclick } = this.state;
		if (handlerclick === "handlerclick") {
			this.setState({
				handlerclick: "",
				value: 0
			})
		} else {
			this.setState({
				handlerclick: "handlerclick",
				currentStepIndex:0,
				
				number: 1
			});
		}
	}


	handlerclick1 = () => {
		console.log("hello  button2")

		const { handlerclick } = this.state;
		if (handlerclick === "handlerclick1") {
			this.setState({
				handlerclick: "",
				value: 0
			});
		} else {
			this.setState({
				handlerclick: "handlerclick1",
				value: 0,
				number: 2

			});

		}
	}

	handlerclick2 = () => {
		console.log("hello  button3")
		const { handlerclick } = this.state;
		if (handlerclick === "handlerclick2") {
			this.setState({
				handlerclick: "",
				value: 0
			});
		} else {
			this.setState({
				handlerclick: "handlerclick2",
				value: 0,
				number: 3
			});

		}

	}


	handlerclick3 = () => {
		console.log("hello  button4")
		const { handlerclick } = this.state;
		if (handlerclick === "handlerclick3") {
			this.setState({
				handlerclick: "",
				// value: 0
			});
		} else {
			this.setState({
				handlerclick: "handlerclick3",
				value: 0,
				number: 4
			});
		}

	}
	handlerclick4 = () => {
		console.log("hello  button5")

		const { handlerclick } = this.state;
		if (handlerclick === "handlerclick4") {
			this.setState({
				handlerclick: ""

			});
		} else {
			this.setState({
				handlerclick: "handlerclick4",
				value: 0,
				number: 5
			});
		}

	}


	handlerclick5 = () => {
		console.log("hello  button6")

		const { handlerclick } = this.state;
		if (handlerclick === "handlerclick5") {
			this.setState({
				handlerclick: "",
				value: 0,

			});
		} else {
			this.setState({
				handlerclick: "handlerclick5",
				value: 0,
				number: 6
			});
		}

	}




	/// bet placed evnet


	handlechangebet = () => {
		const{values ,currentStepIndex}=this.state




		console.log('bet value   ', values[currentStepIndex], this.state.number);
		this.setState(preState => ({
			//  balance : preState.balance - this.state.value,
			handlerclick: null,
			total: parseInt(preState.values[currentStepIndex]) + parseInt(preState.total),
			value: 0,
			balance: preState.balance - preState.values[currentStepIndex],
		}))


		ws.send(JSON.stringify({ "type": "placeBet", data: { "betValue": parseInt(this.state.values[currentStepIndex]), "number": parseInt(this.state.number), "roomId": this.state.roomId } }));


		// ws.send(JSON.stringify({"type":"PlaceBet", "number":this.state.number, "amount":this.state.balance ,"prev":localStorage.getItem('PlaceBet')}))

		// // console.log(PlaceBet);
		// ws.send(JSON.stringify({"type":"DiceRolled", "number":this.state.number,"amount":this.state.balance ,"prev":localStorage.getItem('DiceRolled')}))
	}

	handleimg = () => {
		this.setState({
			showimg: !this.state.showimg
		})
	}
	handlelastroll=()=>{
		this.setState({
			lastroll:!this.state.lastroll
		})
	}


	

	

	handleInputChange = e => {
		this.setState({ currentStepIndex: e.currentTarget.value });
	  };
	  
  

	render() {
		const { values, currentStepIndex } = this.state;
		return (
		
				<Modal
					show={this.state.showModal}

					className="modal-90w"
				>

					<Modal.Header closeButton onClick={this.close}>

					</Modal.Header>


						<div className=" container">

							<div class="bg-color  d-flex align-content-end flex-wrap">

							</div>
						</div>

					
				</Modal>
			
		)
	}
}
