
import React, { Component } from 'react'

import './Frontview.css';
// import '/RequsetData.json'
import { Link } from 'react-router-dom'
import  Modal from 'react-bootstrap/Modal'
import './DiceGame.css';
import Dice from './Dice.js'
//  import './Dice.css'



const URL = 'ws://localhost:8080'
const ws = new WebSocket(URL)
 

export default class Frontview extends Component {

  // URL.send('hello')
  constructor(props) {
    super(props)

    this.state = {
      handlerclick: "",
      value: 0,
      balance: 10000,

      number: 0,
      name: "srikanth",
      total: 0,
      accesstoken: "kasdfkajsdfkasdjfkasdjf.234asdfklasdjf",
      diceOne : 'six',
			diceTwo : 'six',
			diceThree : 'six',
			value : 'Roll the Dice!',
			rolling : false
    }
    this.rollDice = this.rollDice.bind(this);
  }




  rollDice = (e) => {

		
		this.setState({
			rolling : true
		})

		setTimeout(()=>{
			ws.send(JSON.stringify({  
				type:"diceRolling",
			  }))
    },2000)
  }




  getInitialState() {
    return { showModal: false };
  }

  close=()=> {
    this.setState({ showModal: false });
  }

  open=()=>{
    this.setState({ showModal: true });
  }



  //join room event 
  handleJoin = () => {
    console.log('join room event');
    ws.send(JSON.stringify({ "type": "join", "roomid": 12, "token": this.state.accesstoken }));


  }


  // join room event 
  handleRoom = (msg, duration) => {

    //  var el = document.createElement("div");
    //  el.setAttribute("style","position:absolute;top:40%;left:50%;color:white;");
    //  let dies = [Math.floor(Math.random() * 6+1) ,Math.floor(Math.random() * 6+1),Math.floor(Math.random() * 6+1)]
    //  console.log('dies',dies)
    //  el.innerHTML = `${msg} ${dies}`;
    //  setTimeout(function(){
    //   el.parentNode.removeChild(el);
    //  },duration);
    //  document.body.appendChild(el);

    ws.send(JSON.stringify({
      type: "diceRolling",
      //   data:{  
      //      numbers:dies
      // }
    }))

  }



  componentDidMount = () => {

    localStorage.clear()

    // let name = window.prompt("Enter your name please?")
    // if(name != null) {
    //   this.setState({
    //     name : name
    //   })
    // }
    ///connection estbished user
    ws.onopen = () => {
      ws.send(JSON.stringify({ "connection": "f3game", "type": "connection", "token": this.state.accesstoken, "uuid": "35r62veef3235t6" }));

    }
    ws.onmessage = (event) => {



      let resp = JSON.parse(event.data)
			let dies = resp.data.dies
			let diceArr = ['one', 'two', 'three', 'four', 'five', 'six']
			console.log("object",dies)

			if(resp.type === "results") {
				this.setState({
					rolling : false,
					diceOne : diceArr[dies[0]-1], 
					diceTwo : diceArr[dies[1]-1],
					diceThree : diceArr[dies[2]-1]
				})
			}
		  






      // console.log("WebSocket message received:", event.data);
      if (JSON.parse(event.data).type === "connection") {
        console.log("on Connection:", event.data);
        localStorage.setItem('connection', event.data)
      }


      if (JSON.parse(event.data).type === "changeStatus") {
        console.log("on Connection:", event.data);
        localStorage.setItem('state', event.data)
      }

      if (JSON.parse(event.data).type === "results") {
        console.log("on results:", JSON.parse(event.data));
        if (JSON.parse(event.data) && JSON.parse(event.data).data.players.length > 0) {
          JSON.parse(event.data).data.players.map(player => {
            console.log("player", player)
            if (player.name === this.state.name) {
              let value = player.winAmount - player.amount
              if (value > 0) {
                this.setState(pre => ({
                  balance: parseInt(pre.balance) + parseInt(player.winAmount),
                  total: 0
                }))
                let el = document.createElement("div");
                el.setAttribute("style", "position:absolute;top:40%;left:40%;color:white;");
                el.innerHTML = `Congratulation you won ${value} <br/> betAmount : ${player.amount} <br/> winAmount : ${player.winAmount}`;
                setTimeout(function () {
                  el.parentNode.removeChild(el);
                }, 8000);
                document.body.appendChild(el);
              } else if (value === 0) {
                this.setState(pre => ({
                  balance: parseInt(pre.balance) + parseInt(player.winAmount),
                  total: 0
                }))
                let el = document.createElement("div");
                el.setAttribute("style", "position:absolute;top:40%;left:40%;color:blue;");
                el.innerHTML = `Sorry you gained ${value}<br/> betAmount : ${player.amount}<br/> winAmount : ${player.winAmount}`;
                setTimeout(function () {
                  el.parentNode.removeChild(el);
                }, 8000);
                document.body.appendChild(el);
              }
              else {
                this.setState(pre => ({
                  balance: parseInt(pre.balance) + parseInt(player.winAmount),
                  total: 0
                }))
                let el = document.createElement("div");
                el.setAttribute("style", "position:absolute;top:60%;left:40%;color:red;");
                el.innerHTML = `Sorry you lost ${value} <br/> betAmount : ${player.amount}<br/>  winAmount : ${player.winAmount}`;
                setTimeout(function () {
                  el.parentNode.removeChild(el);
                }, 8000);
                document.body.appendChild(el);
              }

            }
          })
        }
        localStorage.setItem('results', event.data)
      }



      if (JSON.parse(event.data).type === "summary") {
        console.log("on Connection:", event.data);
        localStorage.setItem('summary', event.data)
      }




      //// joining in the rooom  user:


      if (JSON.parse(event.data).type === "join") {
        console.log("on Join:", event.data);
        localStorage.setItem('joinroom', event.data)

      }


      //// bet placed in user to local data:


      if (JSON.parse(event.data).type === "betPlaced") {
        console.log("on Betplaced:", event.data);
        // this.setState(prev=>({
        //   balance : prev.balance - parseInt(JSON.parse(event.data).data.amount)

        // }))
        localStorage.setItem('betPlaced', event.data)

      }

      /// place bet


      if (JSON.parse(event.data).type === 'placeBet') {
        console.log("on placeBet:", event.data);
        localStorage.setItem('placeBet', event.data)


      }




      //


      if (JSON.parse(event.data).type === 'diceRolling') {
        console.log("on DiceRolled:", event.data);
        localStorage.setItem('DiceROlled', event.data)


      }


    };

  }



  /// hide and show events call////////////////////////////

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
      balance: preState.balance - preState.value
    }))


    ws.send(JSON.stringify({ "type": "placeBet", "betValue": this.state.value, "by": this.state.name, "number": this.state.number }));


    // ws.send(JSON.stringify({"type":"PlaceBet", "number":this.state.number, "amount":this.state.balance ,"prev":localStorage.getItem('PlaceBet')}))

    // // console.log(PlaceBet);
    // ws.send(JSON.stringify({"type":"DiceRolled", "number":this.state.number,"amount":this.state.balance ,"prev":localStorage.getItem('DiceRolled')}))
  }



  render() {
    return (
      <div >
        <div className="container">
          <div className="row">
            <div className="col-12">

              <div className="bg-color">

              </div>




              <div className="d-flex align-items-start flex-column ">

                <div className="mb-auto container-1 d-flex align-content-center flex-wrap position-absolute">

                  <div className="col d-block side-content text-center bg font_color p-0">


                    <img src={process.env.PUBLIC_URL + "/layer5.png"} />
                    <img src={process.env.PUBLIC_URL + "/hot.png"} />
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
                          placeholder="CLICK TO CHAT" /><span><a href="">   <i class="fas fa-paper-plane chat_send_button" aria-hidden="true"></i>
                          </a></span>
                      </div>
                    </div>
                    <div className="col-12 border-right">
                      <div className="row d-flex flex-nowrap">

                        <div className="col bg m-1 p-0 text-center">
                          <p className="font_color text-center p-auto m-0">BALANCE</p>
                          <span id="balance"><small>{this.state.balance}</small></span>

                        </div>

                        <div className="col bg m-1 p-0 text-center">
                          <p className="font_color text-center p-auto m-0">TOTAL BET</p>
                          <span id="total-balance" ><small>bet:-{this.state.total}</small></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 d-flex border-right">

                    <div className="col-12 d-flex background_color px-1">
                      <div className="col-2 p-0">
                        <p className="font_color my-2">CLICK THE NUMBERS TO PLACE BET
                                </p>


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

                          <img onClick={this.handlerclick} src={process.env.PUBLIC_URL + "/Group 1.png"} alt="" className="btn_img" />

                        </div>

                        {/* <!--button-2 && bar-2--> */}
                        {this.state.handlerclick === "handlerclick1" && <div class="col-2 bar m-0 child bar-2" id="bar2">
                          <span className="bet_range" id="demo">{this.state.value}</span>
                          <div className="slidecontainer">
                            <input onChange={this.handlechange} type="range" min={0} max={1000} value={this.state.value} className="slider" id="myRange" />
                          </div>
                        </div>}
                        <div className="col-2 button_img btn p-0 h-100 parant">
                          <img onClick={this.handlerclick1} src={process.env.PUBLIC_URL + "/Group 2.png"} alt="" className="btn_img" />

                        </div>
                        {/* <!--button-3 && bar-3--> */}
                        {this.state.handlerclick === "handlerclick2" && <div className="col-2 bar m-0 child bar-3" id="bar3">
                          <span className="bet_range" id="demo">{this.state.value}</span>
                          <div className="slidecontainer">
                            <input onChange={this.handlechange} type="range" min={0} max={1000} value={this.state.value} className="slider" id="myRange" />

                          </div>
                        </div>}
                        <div className="col-2 button_img btn p-0 h-100 parant">
                          <img onClick={this.handlerclick2} src={process.env.PUBLIC_URL + "/Group 3.png"} alt="" className="btn_img" />

                        </div>
                        {/* <!--button-4 && bar-4--> */}
                        {this.state.handlerclick === "handlerclick3" && <div className="col-2 bar m-0 child bar-4" id="bar4">
                          <span className="bet_range" id="demo">{this.state.value}</span>
                          <div className="slidecontainer">
                            <input onChange={this.handlechange} type="range" min={0} max={1000} value={this.state.value} className="slider" id="myRange" />

                          </div>
                        </div>}
                        <div className="col-2 button_img btn p-0 h-100 parant">
                          <img onClick={this.handlerclick3} src={process.env.PUBLIC_URL + "/Group 4.png"} alt="" className="btn_img" />

                        </div>

                        {/* <!--button-5 && bar-5--> */}
                        {this.state.handlerclick === "handlerclick4" && <div className="col-2 bar m-0 child bar-5" id="bar5">
                          <span className="bet_range" id="demo">{this.state.value}</span>
                          <div className="slidecontainer">
                            <input onChange={this.handlechange} type="range" min={0} max={1000} value={this.state.value} className="slider" id="myRange" />

                          </div>
                        </div>}
                        <div className="col-2 button_img btn p-0 h-100 parant">
                          <img onClick={this.handlerclick4} src={process.env.PUBLIC_URL + "/Group 5.png"} alt="" className="btn_img" />

                        </div>

                        {/* <!--button-6 && bar-6--> */}
                        {this.state.handlerclick === "handlerclick5" && <div className="col-2 bar m-0 child bar-6" id="bar6">
                          <span className="bet_range" id="demo">{this.state.value}</span>
                          <div className="slidecontainer">
                            <input onChange={this.handlechange} type="range" min={0} max={1000} value={this.state.value} className="slider" id="myRange" />

                          </div>
                        </div>}
                        <div className="col-2 button_img btn p-0 h-100 parant">
                          <img onClick={this.handlerclick5} src={process.env.PUBLIC_URL + "/Group 6.png"} alt="" className="btn_img" />

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
                   
                    <button  onClick={this.open} style={{ width: 40 }} >click</button>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>




        
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>F3 dice rolling</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <section className="DiceGame">
				<section className="DiceGame-inner">
					<Dice face={this.state.diceOne} rolling={this.state.rolling}/>	
					<Dice face={this.state.diceTwo} rolling={this.state.rolling}/>
					<Dice face={this.state.diceThree} rolling={this.state.rolling}/>

				</section>
			<button 
					onClick={this.rollDice} 
					className="DiceGame-btn" 
					disabled={this.state.rolling}> 
					{this.state.value}
				</button>
				
			</section>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={this.close}>Close</button>
          </Modal.Footer>
        </Modal>
      </div>
     




    )
  }
}