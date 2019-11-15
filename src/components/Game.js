import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import './Game.css';
import { GameaccessToken } from './Action/ServerApi';
const URL = 'wss://f3-gs.jaqk.in/rooms/85ec04b2-ec2f-49be-8840-363370431b7d'; 
const ws = new WebSocket(URL);


export default class Game extends Component {

	constructor(props) {
		super(props)
	
		this.state = {
			 showModal:true,
			 handlerclick: "",
			 value: 0,
			 balance: 10000,
	   
			 number: 0,
			 name: "srikanth",
			 total: 0,
			 accessToken:'',
		}
	}
	

	  
   componentDidMount=()=>{


  GameaccessToken().then(Token=>{
	  console.log('responce Token',Token);
	  this.setState({
		accessToken:Token.accessToken
	  })
  }).catch(err=>{
	  console.log('error,',err)
  })
	  
	  //web socket coonnetion
	  
		ws.onopen=()=>{
             console.log(' connection established');
             
			 ws.send(
				JSON.stringify(
				  {type: "join",
				   data: {"accessToken":this.state.accessToken,
						  "roomId": "id-18"}}));
			

		}
		
		
		 ws.onmessage=(event)=>{
			 console.log("message send sever",event);
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

  handleopen=()=>{
 this.setState({
	 show:true

 })
  }

  close = () => {
	  this.setState({
		  showModal: false,
		  setShow: false

	  });
	  this.props.history.push('/LiveCasino')
  }

  open = () => {
	  console.log('open')
	  this.setState({
		  showModal: true,
		  setShow: true
	  });

  }


  handlechange = (event) => {
	  console.log('hello moving');
	  this.setState({
		value: event.target.value
	  })
	}
   
   
	handlerclick = () => {
	  console.log('botton hide$$show');
   
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
	  // console.log("hello  button2")
   
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
	  // console.log("hello  button2")
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
	  // console.log("hello  button2")
   
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
	  // console.log("hello  button2")
   
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
   
   
	  ws.send(JSON.stringify({ "type": "placeBet", data:{"betValue": this.state.value,  "number": this.state.number, "roomid": this.state.roomid }}));
   
   
	  // ws.send(JSON.stringify({"type":"PlaceBet", "number":this.state.number, "amount":this.state.balance ,"prev":localStorage.getItem('PlaceBet')}))
   
	  // // console.log(PlaceBet);
	  // ws.send(JSON.stringify({"type":"DiceRolled", "number":this.state.number,"amount":this.state.balance ,"prev":localStorage.getItem('DiceRolled')}))
	}
   
	render() {
		return (
			<Modal
			show={this.state.showModal}
	 
	  className="modal-90w"
        
  >
	  <Modal.Header closeButton onClick={this.close}> 

	   </Modal.Header>
	  
	  
	   <div className="container gamesize">
          <div className="row">
            <div className="col-12">

              <div className="bg-color">

              </div>




              <div className="d-flex align-items-start flex-column ">

                <div className="mb-auto container-1 d-flex align-content-center flex-wrap position-absolute">

                  <div className="col d-block side-content text-center bg font_color p-0">


                    <img src={process.env.PUBLIC_URL + "/Layer5.png"} />
                    <img src={process.env.PUBLIC_URL + "/HOT.png"} />

                    <p id="number" className="mb-sm-0 py-lg-1">1</p>
                    <p id="number" className="mb-sm-0 py-lg-1">2</p>
                    <p id="number" className="mb-sm-0 py-lg-1">3</p>
                    <p id="number" className="mb-sm-0 py-lg-1">4</p>
                    <p id="number" className="mb-sm-0 py-lg-1">5</p>
                    <p id="number" className="mb-sm-0 py-lg-1">6</p>
                  </div>

                </div>
              </div>

              <div className="col-12 bottom-container">
                <div className="row">
                  <div className="col-3 w-100 p-0">
                    <div className="col-12 border-right p-0">
                      <div className="input-group">
                        <input className="input-group-append w-100 bg text-black font_color" type="text" name="text"
                          placeholder="CLICK TO CHAT" /><span>  <i class="fas fa-paper-plane chat_send_button" aria-hidden="true"></i>
                        </span>
                      </div>
                    </div>
                    <div className="col-12 border-right">
                      <div className="row d-flex flex-nowrap">

                        <div className="col  m-1 p-0 text-center">
                          {/* <p className="font_color text-center p-auto m-0">BALANCE</p> */}
                          <img src={process.env.PUBLIC_URL + "/balance.png"} className="  bal text-center p-auto m-0" />
                          <span className="number"><small>${this.state.balance}</small></span>

                        </div>

                        <div className="col  m-1  text-center">
                          {/* <p className="font_color text-center p-auto m-0">TOTAL BET</p> */}
                          <img src={process.env.PUBLIC_URL + "/total-bet.png"} className="  bal text-center p-auto m-0" />
                          <span className="number"><small>$ {this.state.total}</small></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 d-flex border-right">

                    <div className="col-12 d-flex background_color px-1">
                      <div className="col-2 p-0">
                        {/* <p className="font_color my-2">CLICK THE NUMBERS TO PLACE BET
                                </p> */}
                        <img src={process.env.PUBLIC_URL + "/text.png"} className="font_color my-2 chatt" />

                      </div>


                      {/* <!--buttons--> */}

                      <div className="col-lg-10 d-flex col-md-10 col-sm-10 px-0 btn-group">
                        {/* <!-- button-1 && bar-1--> */}
                        {this.state.handlerclick === "handlerclick" &&
                          <div className="col-2 bar m-0 text-center child bar-1" id="bar1">

                            <div><span className="bet_range" id="demo">{this.state.value}</span>
                              <div className="slidecontainer">

                                <input onChange={this.handlechange} type="range" min={0} max={1000} value={this.state.value} className="slider" id="myRange" />

                              </div>
                            </div>

                          </div>}
                        <div className="col-2 button_img btn p-0 parant h-100">

                          <img onClick={this.handlerclick} src={process.env.PUBLIC_URL + "/1-bg.png"} alt="" className="btn_img" />
                          <img src={process.env.PUBLIC_URL + "/1.png"} alt="" className="number" />

                        </div>

                        {/* <!--button-2 && bar-2--> */}
                        {this.state.handlerclick === "handlerclick1" && <div class="col-2 bar m-0 child bar-2" id="bar2">
                          <span className="bet_range" id="demo">{this.state.value}</span>
                          <div className="slidecontainer">
                            <input onChange={this.handlechange} type="range" min={0} max={1000} value={this.state.value} className="slider" id="myRange" />

                          </div>
                        </div>}
                        <div className="col-2 button_img btn p-0 h-100 parant">
                          <img onClick={this.handlerclick1} src={process.env.PUBLIC_URL + "/2-bg.png"} alt="" className="btn_img" />
                          <img src={process.env.PUBLIC_URL + "/2.png"} alt="" className="number" />

                        </div>
                        {/* <!--button-3 && bar-3--> */}
                        {this.state.handlerclick === "handlerclick2" && <div className="col-2 bar m-0 child bar-3" id="bar3">
                          <span className="bet_range" id="demo">{this.state.value}</span>
                          <div className="slidecontainer">
                            <input onChange={this.handlechange} type="range" min={0} max={1000} value={this.state.value} className="slider" id="myRange" />

                          </div>
                        </div>}
                        <div className="col-2 button_img btn p-0 h-100 parant">
                          <img onClick={this.handlerclick2} src={process.env.PUBLIC_URL + "/3-bg.png"} alt="" className="btn_img" />
                          <img src={process.env.PUBLIC_URL + "/3.png"} alt="" className="number" />
                        </div>
                        {/* <!--button-4 && bar-4--> */}
                        {this.state.handlerclick === "handlerclick3" && <div className="col-2 bar m-0 child bar-4" id="bar4">
                          <span className="bet_range" id="demo">{this.state.value}</span>
                          <div className="slidecontainer">
                            <input onChange={this.handlechange} type="range" min={0} max={1000} value={this.state.value} className="slider" id="myRange" />

                          </div>
                        </div>}
                        <div className="col-2 button_img btn p-0 h-100 parant">
                          <img onClick={this.handlerclick3} src={process.env.PUBLIC_URL + "/4-bg.png"} alt="" className="btn_img" />
                          <img src={process.env.PUBLIC_URL + "/4.png"} alt="" className="number" />
                        </div>

                        {/* <!--button-5 && bar-5--> */}
                        {this.state.handlerclick === "handlerclick4" && <div className="col-2 bar m-0 child bar-5" id="bar5">
                          <span className="bet_range" id="demo">{this.state.value}</span>
                          <div className="slidecontainer">
                            <input onChange={this.handlechange} type="range" min={0} max={1000} value={this.state.value} className="slider" id="myRange" />

                          </div>
                        </div>}
                        <div className="col-2 button_img btn p-0 h-100 parant">
                          <img onClick={this.handlerclick4} src={process.env.PUBLIC_URL + "/5-bg.png"} alt="" className="btn_img" />
                          <img src={process.env.PUBLIC_URL + "/5.png"} alt="" className="number" />
                        </div>

                        {/* <!--button-6 && bar-6--> */}
                        {this.state.handlerclick === "handlerclick5" && <div className="col-2 bar m-0 child bar-6" id="bar6">
                          <span className="bet_range" id="demo">{this.state.value}</span>
                          <div className="slidecontainer">
                            <input onChange={this.handlechange} type="range" min={0} max={1000} value={this.state.value} className="slider" id="myRange" />

                          </div>
                        </div>}
                        <div className="col-2 button_img btn p-0 h-100 parant">
                          <img onClick={this.handlerclick5} src={process.env.PUBLIC_URL + "/6-bg.png"} alt="" className="btn_img" />
                          <img src={process.env.PUBLIC_URL + "/6.png"} alt="" className="number" />
                        </div>


                        {/* <!--bet-button--> */}
                        <div className="col-2 button_img parant h-100 p-0">
                          {/* <img onclick="barVisibility('6');" src="images/bet_btn.png" alt="" class="btn_img border border-black"> */}

                          <img onClick={(e) => this.handlechangebet()} src={process.env.PUBLIC_URL + "/bet_btn.png"} alt="" className="btn_img border border-black" />


                        </div>
                      </div>

                    </div>

                  </div>

                  <div className="col-3 mt-sm-0 p-0 align-self-center">

                    <a href=""><img className="img-fluid" src={process.env.PUBLIC_URL + "/Replay Button.png"} /></a>
                    <a href=""><img className="img-fluid" src={process.env.PUBLIC_URL + "/Star Button.png"} /></a>
                    <a href=""><img className="img-fluid" src={process.env.PUBLIC_URL + "/Stats Button.png"} /></a>
                    <span onClick={this.handleJoin} ><img className="img-fluid square" src={process.env.PUBLIC_URL + "/table.png"} /></span>
                    <span onClick={e => this.handleRoom("Dies Rolled ", 2000)}><img className="img-fluid square" src={process.env.PUBLIC_URL + "/lobby.png"} /></span>


                  </div>
                </div>
              </div>
            </div>

          </div>
          {/* <button     onClick={this.open} style={{ marginLeft: '40%', "background-color": " #8d8dae" }} >dice rolling server</button> */}

        </div>



 

			</Modal>
		)
	}
}
