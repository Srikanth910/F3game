import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import './Gamef3.css'
import { GameaccessToken, Getdata } from './Action/ServerApi';
const URL = 'wss://f3-gs.jaqk.in/rooms/85ec04b2-ec2f-49be-8840-363370431b7d';


const ws = new WebSocket(URL);

export default class Gamef3 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showModal: true,
            isFullscreenEnabled: false,

            min: 0,
            max: 15,
            handlerclick: "",
            values: [0, 5, 10, 25, 50, 75, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
            currentStepIndex: 0,
            progressvalue: 60,
            progressvalue1: 50,
            progressvalue2: 20,
            progressvalue3: 40,
            progressvalue4: 90,
            progressvalue6: 100,

            balance: 10000,
            showimg: false,
            number: 0,
            name: "srikanth",
            total: 0,
            accessToken: '',
            userId: '',
            roomId: '',
            Joinroom: '',
            lastroll: '',
            value: 0

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
            // console.log("message send sever", event);
            

             if( JSON.parse(event.data).type ==="connection"){
                 console.log('connectin evnet', event.data);
             };



        	if (JSON.parse(event.data).type === "join-room") {
                console.log('join room event', event.data)
        		console.log(" Join:", JSON.parse(event.data).data.room);

        		const Joinroom = JSON.parse(event.data).data.room


        		this.setState({
        			roomId: Joinroom

        		})
        		// console.log('room number ', this.state.roomId)

            };
            if(JSON.parse(event.data).type ==="summary") {
                console.log('summary data dispayed', event.data);
           }

           if(JSON.parse(event.data)==="placebet"){
                console.log('')
           }

        };


        /// websocket onerror state
       ws.onerror = (event) => {
        	console.log('error websocket', event)
        };

        // web socket on closes state 

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

    };



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
                currentStepIndex: 0,

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
                // value: 0,
                currentStepIndex: 0,

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
                // value: 0,
                currentStepIndex: 0,

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
                // value: 0,
                currentStepIndex: 0,

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
                // value: 0,
                currentStepIndex: 0,

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
                // value: 0,
                currentStepIndex: 0,

                number: 6
            });
        }

    }
    handlechangebet = () => {
        const { values, currentStepIndex } = this.state




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


    handleInputChange = e => {
        this.setState({ currentStepIndex: e.currentTarget.value });
    };



    handleimg = () => {
        this.setState({
            showimg: !this.state.showimg
        })
    }
    handlelastroll = () => {
        this.setState({
            lastroll: !this.state.lastroll
        })
    }

    progressbar = (e) => {
        console.log('value', this.state.value);
        this.setState({
            value: e.target.value
        })
    }

    render() {
        const { values, currentStepIndex } = this.state;
        return (



            <Modal
                show={this.state.showModal}

                className="modal-90w"
            >

                <Modal.Header closeButton onClick={this.close}>

                </Modal.Header>
                <div className="container">
                    <div class="bg-img  d-flex align-content-end flex-wrap">


 

  



                        <div class="col p-0 d-flex align-items-end">

                            {this.state.lastroll &&
                                <div >

                                    <img src={process.env.PUBLIC_URL + "/lastRoll.png"} className=" img-fluid six-rolls" /></div>}

                                    <div >
                            <img src={process.env.PUBLIC_URL + "/currentBet.png"} className="img-fluid current-bt" /></div>

                        </div>
                        <div class="col-6 p-0 d-flex align-items-end">
                            <img src={process.env.PUBLIC_URL + "/betlimitBar.png"} className="w-100 max-bet img-fluid" alt="" />

                            <div className="max-bet col-12 w-100 position-absolute">

                                <div className="d-flex align-items-end flex-column bd-highlight ml-auto mt-4 col-9 p-0">

                                    <div className="d-flex justify-content-end">

                                        <div>
                                            <div className="bar-pad img-fluid">

                                                <img className="image-bars img-fluid" src={process.env.PUBLIC_URL + "/dark_b.png"} alt="" />

                                            </div>
                                        </div>
                                        <div>
                                            <div className="bar-pad img-fluid">
                                                <img className="image-bars img-fluid" src={process.env.PUBLIC_URL + "/yellow_b.png"} alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="bar-pad img-fluid">
                                                <img className="image-bars img-fluid" src={process.env.PUBLIC_URL + "/blue_b.png"} alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="bar-pad img-fluid">
                                                <img className="image-bars img-fluid" src={process.env.PUBLIC_URL + "/purpul_b.png"} alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="bar-pad img-fluid">
                                                <img className="image-bars img-fluid" src={process.env.PUBLIC_URL + "/black_b.png"} alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="bar-pad img-fluid">
                                                <img className="image-bars img-fluid" src={process.env.PUBLIC_URL + "/green_b.png"} alt="" />
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="col d-flex p-0">
                            <div className="col-4">
                                chat
                        </div>


                        
                            <div className="col-8 p-0 d-flex align-items-end">



                                {this.state.showimg &&
                                    <div>
                                        <div class="col-12 d-flex position-absolute pro-bars ">
                                            <div className="col-2 progress progress-bar-vertical">

                                                <div></div>
                                                <div className=" progress-bar bar-1" role="progressbar" value="60" aria-valuemin="0" aria-valuemax="100"
                                                    style={{ height: `${this.state.progressvalue}%` }}>
                                                     <div class="sr-only ">
                                <p style={{color:'black'}}>{this.state.progressvalue}</p>
                                                                            </div>
                                                </div>
                                            </div>
                                            <div className="col-2 progress progress-bar-vertical">
                                                <div className="progress-bar bar-2" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                                    style={{ height: `${this.state.progressvalue1}%` }}>
                                                 <div class="sr-only ">
                                <p style={{color:'black'}}>{this.state.progressvalue1}</p>
                                                                            </div>
                                                </div>
                                            </div>
                                            <div class="col-2 progress progress-bar-vertical">
                                                <div className="progress-bar bar-3" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                                    style={{ height: `${this.state.progressvalue2}%` }}>
                                                    <div class="sr-only ">
                                <p style={{color:'black'}}>{this.state.progressvalue2}</p>
                                                                            </div>
                                                </div>
                                            </div>
                                            <div className="col-2 progress progress-bar-vertical">
                                                <div className="progress-bar bar-4" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                                    style={{ height: `${this.state.progressvalue3}%` }}>
                                                   <div class="sr-only ">
                                <p style={{color:'black'}}>{this.state.progressvalue3}</p>
                                                                            </div>
                                         </div>
                                            </div>
                                            <div className="col-2 progress progress-bar-vertical">
                                                <div className="progress-bar bar-5" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                                    style={{ height: `${this.state.progressvalue4}%` }}>
                                                      <div class="sr-only ">
                                <p style={{color:'black'}}>{this.state.progressvalue4}</p>
                                                                            </div>
                                                </div>
                                            </div>
                                            <div className="col-2 progress progress-bar-vertical">
                                                <div className="progress-bar bar-6" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                                    style={{ height: `${this.state.progressvalue6}%` }}>
                                                     <div class="sr-only ">
                                <p style={{color:'black'}}>{this.state.progressvalue6}</p>
                                                                            </div>
                                                </div>
                                            </div>


                                        </div>



                                        <img src={process.env.PUBLIC_URL + "/statistics.png"} className="statistic img-fluid" alt="" />
                                    </div>
                                }



                            </div>

                        </div>





                        <div className="d-flex bg-light w-100">
                            <div className="col d-flex align-items-center">
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/balance.png"} className="  left-btns" />
                                    <span className="balance">{this.state.balance}</span>
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/total-bet.png"} className="  left-btns" />
                                    <span className="totalbet">{this.state.total}</span>
                                </div>
                            </div>
                            <div className="col-5 p-0 d-flex">



                                <div className="col-9 p-0 d-flex justify-content-end position-absolute bars">
                                    <div className="col-2">

                                        {this.state.handlerclick === "handlerclick" && <div className="sliderbg bar">

                                            <div className="value" ><img src={process.env.PUBLIC_URL + "/Bet_range.png"} className="betvalue" />
                                                <span className="value1">{values[currentStepIndex]} </span>  </div>
                                            <input


                                                onInput={this.handleInputChange}
                                                type="range"
                                                min={this.state.min}
                                                value={this.state.currentStepIndex}
                                                max={this.state.max}
                                                step="1"

                                                className="slider" />


                                        </div>}

                                    </div>
                                    <div class="col-2">


                                        {this.state.handlerclick === "handlerclick1" && <div className="sliderbg bar">

                                            <div className="value" ><img src={process.env.PUBLIC_URL + "/Bet_range.png"} className="betvalue" />
                                                <span className="value1">{values[currentStepIndex]} </span>  </div>
                                            <input

                                                onInput={this.handleInputChange}
                                                type="range"
                                                min={this.state.min}
                                                value={this.state.currentStepIndex}
                                                max={this.state.max}
                                                step="1"


                                                // onChange={this.handlechange} type="range" min={this.state.minvalue} max={this.state.maxvalue} value={this.state.value} step={this.state.step}
                                                className="slider" />


                                        </div>}
                                    </div>
                                    <div class="col-2">

                                        {this.state.handlerclick === "handlerclick2" && <div className="sliderbg bar">

                                            <div className="value" ><img src={process.env.PUBLIC_URL + "/Bet_range.png"} className="betvalue" />
                                                <span className="value1">{values[currentStepIndex]} </span>  </div>
                                            <input
                                                // onChange={this.handlechange} type="range" min={this.state.minvalue} max={this.state.maxvalue} value={this.state.value} step={this.state.step}

                                                onInput={this.handleInputChange}
                                                type="range"
                                                min={this.state.min}
                                                value={this.state.currentStepIndex}
                                                max={this.state.max}
                                                step="1"

                                                className="slider" />


                                        </div>}
                                    </div>
                                    <div class="col-2">


                                        {this.state.handlerclick === "handlerclick3" && <div className="sliderbg bar">

                                            <div className="value" ><img src={process.env.PUBLIC_URL + "/Bet_range.png"} className="betvalue" />
                                                <span className="value1">{values[currentStepIndex]} </span>  </div>
                                            <input
                                                // onChange={this.handlechange} type="range" min={this.state.minvalue} max={this.state.maxvalue} value={this.state.value} step={this.state.step}

                                                onInput={this.handleInputChange}
                                                type="range"
                                                min={this.state.min}
                                                value={this.state.currentStepIndex}
                                                max={this.state.max}
                                                step="1"

                                                className="slider" />


                                        </div>}
                                    </div>
                                    <div class="col-2">

                                        {this.state.handlerclick === "handlerclick4" && <div className="sliderbg bar">

                                            <div className="value" ><img src={process.env.PUBLIC_URL + "/Bet_range.png"} className="betvalue" />
                                                <span className="value1">{values[currentStepIndex]} </span>  </div>
                                            <input
                                                //  onChange={this.handlechange} type="range" min={this.state.minvalue} max={this.state.maxvalue} value={this.state.value} step={this.state.step}

                                                onInput={this.handleInputChange}
                                                type="range"
                                                min={this.state.min}
                                                value={this.state.currentStepIndex}
                                                max={this.state.max}
                                                step="1"

                                                className="slider" />


                                        </div>}
                                    </div>
                                    <div class="col-2">

                                        {this.state.handlerclick === "handlerclick5" && <div className="sliderbg bar">

                                            <div className="value" ><img src={process.env.PUBLIC_URL + "/Bet_range.png"} className="betvalue" />
                                                <span className="value1">{values[currentStepIndex]} </span>  </div>
                                            <input
                                                //  onChange={this.handlechange} type="range" min={this.state.minvalue} max={this.state.maxvalue} value={this.state.value} step={this.state.step}

                                                onInput={this.handleInputChange}
                                                type="range"
                                                min={this.state.min}
                                                value={this.state.currentStepIndex}
                                                max={this.state.max}
                                                step="1"

                                                className="slider" />


                                        </div>}
                                    </div>
                                </div>



                                <div className="place-bet col-3 p-0">

                                    <img onClick={this.handlechangebet} src={process.env.PUBLIC_URL + "/bet_btn.png"} className="place-btn img-fluid curser" alt="" />

                                </div>
                                <div className="click-number col-9">
                                    <div className="text-center">
                                        <img src={process.env.PUBLIC_URL + "/click_bet.png"} className="click-number-text" alt="" />


                                    </div>
                                    <div className="btn-grp d-flex justify-content-end">


                                        <img src={process.env.PUBLIC_URL + "/1-bg.png"} className="img-fluid curser number-btns" alt="" onClick={this.handlerclick} />


                                        <img onClick={this.handlerclick1} src={process.env.PUBLIC_URL + "/2-bg.png"} className="img-fluid curser number-btns" alt="" />
                                        <img onClick={this.handlerclick2} src={process.env.PUBLIC_URL + "/3-bg.png"} className=" img-fluid curser number-btns" alt="" />
                                        <img onClick={this.handlerclick3} src={process.env.PUBLIC_URL + "/4-bg.png"} className="img-fluid curser number-btns" alt="" />
                                        <img onClick={this.handlerclick4} src={process.env.PUBLIC_URL + "/5-bg.png"} className="img-fluid curser number-btns" alt="" />

                                        <img onClick={this.handlerclick5} src={process.env.PUBLIC_URL + "/6-bg.png"} alt="" className="img-fluid curser number-btns" />

                                    </div>
                                </div>
                            </div>
                            <div className="col">


                                <div className="chat-box">
                                    <img className="img-fluid" src={process.env.PUBLIC_URL + "/chat_box.png"} alt="" className="img-fluid" />

                                </div>





                                <div className="d-flex mt-2">
                                    <div className="right-icons d-flex">

                                        <img className="rgt-icon curser" src={process.env.PUBLIC_URL + "/vide.png"} alt="" />
                                        <img className="rgt-icon curser" onClick={this.handlelastroll} src={process.env.PUBLIC_URL + "/star.png"} />
                                        <img className="rgt-icon curser" href="#" onClick={this.handleimg} src={process.env.PUBLIC_URL + "/status.png"} alt="" />
                                    </div>

                                    <div className="d-flex align-items-end">
                                        <img src={process.env.PUBLIC_URL + "/table.png"} alt="" className="curser" />
                                        <img src={process.env.PUBLIC_URL + "/lobby.png"} alt="" className="curser" />

                                    </div>
                                </div>

                            </div>
                        </div>










                    </div>




                </div>

            </Modal>
        )
    }
}
