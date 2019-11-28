import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import './Game.css';
import Fullscreen from 'react-fullscreen-crossbrowser';
import { GameaccessToken, Getdata } from './Action/ServerApi';
// import{get} from 'react-lodash'
const URL = 'wss://f3-gs.jaqk.in/rooms/85ec04b2-ec2f-49be-8840-363370431b7d';


const ws = new WebSocket(URL);

export default class Game extends Component {

	constructor(props) {
		super(props)

		this.state = {
			showModal: true,
			isFullscreenEnabled: false,
			minvalue: 0,
			maxvalue: 5000,
			step: 100,
			handlerclick: "",
			value: 0,
			balance: 10000,
			showimg: false,
			number: 0,
			name: "srikanth",
			total: 0,
			accessToken: '',
			userId: '',
			roomId: '',
			Joinroom: '',
		}
	}



	componentDidMount = () => {
		const ws = new WebSocket(URL);


		Getdata().then(userGetdata => {
			console.log('id', userGetdata.userId);
			this.setState({
				userId: userGetdata.userId,
			})

		}).catch(err => {
			console.log("error", err)
		})




		GameaccessToken().then(Token => {
			console.log('responce Token', Token);
			this.setState({
				accessToken: Token.accessToken
			})
		}).catch(err => {
			console.log('error,', err)
		});





		ws.onopen = () => {

			console.log('access Token', this.state.accessToken)


			console.log(' connection established');


			ws.send(
				JSON.stringify(
					{
						type: "join",
						data: {
							"accessToken": this.state.accessToken,
							"roomId": this.state.userId,
						}
					}));


		};


		ws.onmessage = (event) => {
			console.log("message send sever", event);


			if (JSON.parse(event.data).type === "join-room") {
				console.log(" Join:", JSON.parse(event.data).data.room);

				const Joinroom = JSON.parse(event.data).data.room


				this.setState({
					roomId: Joinroom

				})
				console.log('room number ', this.state.roomId)

			}

		};
		ws.onerror = (event) => {
			console.log('error websocket', event)
		}
		ws.onclose = (event) => {

			console.log('closed event', event);
			const ws = new WebSocket(URL);
			ws.onopen = () => {
				console.log('userid', this.state.RoomId)


				console.log(' connection established');


				ws.send(
					JSON.stringify(
						{
							type: "join",
							data: {
								"accessToken": this.state.accessToken,
								"roomId": this.state.RoomId
							}
						}));
			}



		}

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
				value: 0,
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



		console.log('bet value   ', this.state.value, this.state.number);
		this.setState(preState => ({
			//  balance : preState.balance - this.state.value,
			handlerclick: null,
			total: parseInt(preState.value) + parseInt(preState.total),
			value: 0,
			balance: preState.balance - preState.value,
		}))


		ws.send(JSON.stringify({ "type": "placeBet", data: { "betValue": parseInt(this.state.value), "number": parseInt(this.state.number), "roomId": this.state.roomId } }));


		// ws.send(JSON.stringify({"type":"PlaceBet", "number":this.state.number, "amount":this.state.balance ,"prev":localStorage.getItem('PlaceBet')}))

		// // console.log(PlaceBet);
		// ws.send(JSON.stringify({"type":"DiceRolled", "number":this.state.number,"amount":this.state.balance ,"prev":localStorage.getItem('DiceRolled')}))
	}

	handleimg = () => {
		this.setState({
			showimg: !this.state.showimg
		})
	}



	render() {
		return (
			<div>
				<Modal
					show={this.state.showModal}

					className="modal-90w"
				>

					<Modal.Header closeButton onClick={this.close}>

					</Modal.Header>

					{/* 
					<Fullscreen
          enabled={this.state.isFullscreenEnabled}
          onChange={isFullscreenEnabled => this.setState({isFullscreenEnabled})}
        > */}

					<div className="container">

						<div class="bg-color  d-flex align-content-end flex-wrap">

							<div class="position-fixed container">
								<div class="col-12 d-flex justify-content-end ">

									<div><i class="fa fa-volume-up"></i></div>
									<div><i class="fa fa-cog"></i></div>
									<div><i class="fa fa-history"></i></div>
									<div><i class="fa fa-question-circle"></i> </div>
									<div onClick={() => this.setState({ isFullscreenEnabled: true })} ><i class="fa fa-compress"></i></div>
								</div>

							</div>





							<div class="d-flex justify-content-center w-100">
								<div class="col-4 bars-grid d-flex justify-content-end">
									<div class="col-2">
										{this.state.handlerclick === "handlerclick" && <div className="sliderbg bar1">

											<div className="value" ><img src={process.env.PUBLIC_URL + "/Bet_range.png"} className="betvalue" />
												<span className="value1">{this.state.value} </span>  </div>
											<input onChange={this.handlechange} type="range" min={this.state.minvalue} max={this.state.maxvalue} value={this.state.value} step={this.state.step} className="slider" />


										</div>}
									</div>
									<div class="col-2">


										{this.state.handlerclick === "handlerclick1" && <div className="sliderbg bar2">

											<div className="value" ><img src={process.env.PUBLIC_URL + "/Bet_range.png"} className="betvalue" />
												<span className="value1">{this.state.value} </span>  </div>
											<input onChange={this.handlechange} type="range" min={this.state.minvalue} max={this.state.maxvalue} value={this.state.value} step={this.state.step} className="slider" />


										</div>}


									</div>
									<div class="col-2">

										{this.state.handlerclick === "handlerclick2" && <div className="sliderbg bar3">

											<div className="value" ><img src={process.env.PUBLIC_URL + "/Bet_range.png"} className="betvalue" />
												<span className="value1">{this.state.value} </span>  </div>
											<input onChange={this.handlechange} type="range" min={this.state.minvalue} max={this.state.maxvalue} value={this.state.value} step={this.state.step} className="slider" />


										</div>}
									</div>
									<div class="col-2">

										{this.state.handlerclick === "handlerclick3" && <div className="sliderbg bar4">

											<div className="value" ><img src={process.env.PUBLIC_URL + "/Bet_range.png"} className="betvalue" />
												<span className="value1">{this.state.value} </span>  </div>
											<input onChange={this.handlechange} type="range" min={this.state.minvalue} max={this.state.maxvalue} value={this.state.value} step={this.state.step} className="slider" />


										</div>}
									</div>
									<div class="col-2">

										{this.state.handlerclick === "handlerclick4" && <div className="sliderbg bar5">
											<div className="value" ><img src={process.env.PUBLIC_URL + "/Bet_range.png"} className="betvalue" />
												<span className="value1">{this.state.value} </span>  </div>
											<input onChange={this.handlechange} type="range" min={this.state.minvalue} max={this.state.maxvalue} value={this.state.value} step={this.state.step} className="slider" />


										</div>}
									</div>
									<div class="col-2">


										{this.state.handlerclick === "handlerclick5" && <div className="sliderbg bar6">

											<div className="value" ><img src={process.env.PUBLIC_URL + "/Bet_range.png"} className="betvalue" />
												<span className="value1">{this.state.value} </span>  </div>
											<input onChange={this.handlechange} type="range" min={this.state.minvalue} max={this.state.maxvalue} value={this.state.value} step={this.state.step} className="slider" />


										</div>}
									</div>
								</div>

							</div>







							<div class="d-flex w-100 align-items-end">
								<div class="col-3 d-flex align-items-end p-0">
									<div class="col-5 p-0 align-items-end">
										{/* <img src="./images/latest/0xkukURg.png" class="w-100 latest-rolls" alt=""></img> */}
										<img src={process.env.PUBLIC_URL + "/lastRoll.png"} className="w-100 latest-rolls img-fluid" />
									</div>
									<div class="col-7 px-0">
										{/* <img src="./images/latest/Dh8ro7_A.png" class="w-100" alt=""> */}
										<img src={process.env.PUBLIC_URL + "/currentBet.png"} className="w-100  img-fluid" />


									</div>

								</div>



								<div class="col-5  d-flex p-0" >





								
									<img src={process.env.PUBLIC_URL + "/betlimitBar.png"} className="w-100 img-fluid max-bet" />
									<div class="max-bet col-12 w-100 position-absolute">

<div class="d-flex align-items-end flex-column bd-highlight ml-auto col-9 p-0 mt-4">
 
   <div class="d-flex justify-content-end">
	
	<div>
		<div class="bar-pad img-fluid">
			<img class="image-bars img-fluid"src={process.env.PUBLIC_URL + "/dark_b.png"}alt=""/>
		</div>
	</div>
	<div>
		<div class="bar-pad img-fluid">
			<img class="image-bars img-fluid" src={process.env.PUBLIC_URL + "/yellow_b.png"} alt=""/>
		</div>
	</div>
	<div>
		<div class="bar-pad img-fluid">
			<img class="image-bars img-fluid" src={process.env.PUBLIC_URL + "/blue_b.png"} alt=""/>
		</div>
	</div>
	<div>
		<div class="bar-pad img-fluid">
			<img class="image-bars img-fluid" src={process.env.PUBLIC_URL + "/purpul_b.png"} alt=""/>
		</div>
	</div>
	<div>
		<div class="bar-pad img-fluid">
			<img class="image-bars img-fluid" src={process.env.PUBLIC_URL + "/red_b.png"} alt=""/>
		</div>
	</div>
	<div>
		<div class="bar-pad img-fluid">
			<img class="image-bars img-fluid"src={process.env.PUBLIC_URL + "/green_b.png"} alt=""/>
		</div>
	</div>
   
   </div>
   
  </div>

</div>



								</div>




								<div class="col-4 d-flex p-0">
									<div class="col-5 p-0 text-center text-light">
										chat
							</div>


									<div class="col-7 p-0">
										{this.state.showimg ?
											<img src={process.env.PUBLIC_URL + "/statistics.png"} class="w-100 statistic img-fluid" alt="" /> : null}
									</div>
								</div>
							</div>




							<div class="bg-light d-flex w-100" >
								<div className="col-3 w-100 p-0  d-flex align-self-center ">

									<div className="col-12  d-flex justify-content-around ">


										<img src={process.env.PUBLIC_URL + "/balance.png"} className="  bal mt-3 w-50" />
										<span className="balance">{this.state.balance}</span>




										{/* <div className="col-6 px-0"> */}
										<img src={process.env.PUBLIC_URL + "/total-bet.png"} className="  bal  mt-3 w-50" />
										<span className="totalbet">{this.state.total}</span>
									</div>
									{/* </div> */}


								</div>



								<div class="col-5 d-flex">
									<div class="place-bet">
										<img onClick={this.handlechangebet} src={process.env.PUBLIC_URL + "/bet_btn.png"} className="place-btn cursor" alt="" />
									</div>

									<div class="click-number">
              <div class="text-center">
			  <img src={process.env.PUBLIC_URL + "/click_bet.png"}  className="click_number_text" alt=""/>
              </div>


									<div class="btn-grp d-flex  justify-content-end">
										<img src={process.env.PUBLIC_URL + "/1-bg.png"} alt="" onClick={this.handlerclick} className="cursor" />


										<img onClick={this.handlerclick1} src={process.env.PUBLIC_URL + "/2-bg.png"} alt="" className="cursor" />
										<img onClick={this.handlerclick2} src={process.env.PUBLIC_URL + "/3-bg.png"} alt="" className="cursor" />
										<img onClick={this.handlerclick3} src={process.env.PUBLIC_URL + "/4-bg.png"} alt="" className="cursor" />
										<img onClick={this.handlerclick4} src={process.env.PUBLIC_URL + "/5-bg.png"} alt="" className="cursor" />

										<img onClick={this.handlerclick5} src={process.env.PUBLIC_URL + "/6-bg.png"} alt="" className="cursor" />
									</div>
								
									</div>
								</div>

								<div class="col-4 pl-0 d-flex">
									<div class="col-6 p-0">
										<div class="chat-box">
											<img class="img-fluid" src={process.env.PUBLIC_URL + "/chat_box.png"} alt="" />
										</div>
										<div class="d-flex justify-content-around">
											<img class="icons img-fluid" src={process.env.PUBLIC_URL + "/vide.png"} alt="" />
											<img class="icons img-fluid" src={process.env.PUBLIC_URL + "/star.png"} />
											<img class="icons img-fluid" href="#" onClick={this.handleimg} src={process.env.PUBLIC_URL + "/status.png"} alt="" />
										</div>


									</div>
									<div class="col-6 justify-content-around">
										<div class="d-flex align-items-center sm-mt-0">
											<img class="icons w-50 mt-4 img-fluid" src={process.env.PUBLIC_URL + "/table.png"} alt="" />
											<img class="icons w-50 mt-4 img-fluid" src={process.env.PUBLIC_URL + "/lobby.png"} alt="" />
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>

					{/* </Fullscreen> */}
				</Modal>
			</div>

		)
	}
}
