import React, { Component } from 'react'
import './Lobby.css'
import Modal from 'react-bootstrap/Modal';
import Gamef3 from './Gamef3'
import { withRouter } from 'react-router-dom'
import {Link } from 'react-router-dom'

class Lobby extends Component {



  constructor(props) {
    super(props)
  
    this.state = {  
      showmodel:false
       
    }
  }

  componentWillMount(){
     this.open()


  }

  open=()=>{
    this.setState({
      showModal:true
     })

  }

 componentDidMount(){
   
 }
  
  render() {
    return (
      <div>
         <Modal
                show={this.state.showModal}

                className="modal-90w"
           onclose={this.state.close}
                

                
            >

    {/* <Gamef3 closeevent={this.state.showmodel}/> */}
        <div class="container content">


          <div class="bg align-content-center justify-content-around  flex-wrap">
            {/* <!-- Logo --> */}
            <div class="row justify-content-md-center mb-5 p-0 mr-0">
              <img src={process.env.PUBLIC_URL + "/logo.png"} class="logo align-self-center"  alt="..." />
            </div>

              <div class="row justify-content-around around">

                {/* <!-- Card--1 --> */}


     <Link to="/">
                <div class="col-md-4 cards-section cardcursor" href="/">
                  <div class="card text-white">
                    <img src={process.env.PUBLIC_URL + "/host_g1..png"} class="card-img" alt="..." />
                    <div class="card-img-overlay align-self-end">
                      <div class="image-game-type align-self-end">
                        <img src={process.env.PUBLIC_URL + "/price.png"} class="bet-place" alt="" />
                        <img src={process.env.PUBLIC_URL + "/game_type_f3.png"} class="dies" />
                      </div>
                    </div>

                  </div>
                  <div class="card-footer bg-light d-flex justify-content-between">
                    <img src={process.env.PUBLIC_URL + "/flag_ph.png"} />
                    <h6 class="player_name"> AMANDA PERRY</h6>
                    <div>
                      <img src={process.env.PUBLIC_URL + "/icon_players.png"} class="icon_players" />
                      <span class="player_bet">1000</span>
                    </div>


                  </div>
                </div>
                </Link>
               

                {/* <!-- Card--2 --> */}
                <Link  Link to ="/">

                <div class="col-4 cards-section cardcursor">
                  <div class="card text-white">
                    <img src={process.env.PUBLIC_URL + "/host_g2.png"} class="align-self-center card-img" alt="..." />
                    <div class="card-img-overlay align-self-end">
                      <div class="image-game-type align-self-end">
                        <img src={process.env.PUBLIC_URL + "/price.png"} class="bet-place" alt="" />
                        <img src={process.env.PUBLIC_URL + "/game_type_f3.png"} class="dies" />
                      </div>
                    </div>

                  </div>
                  <div class="card-footer bg-light d-flex justify-content-between">
                    <img src={process.env.PUBLIC_URL + "/flag_uk.png"} />
                    <h6 class="player_name"> BLAKE PORTMAN</h6>
                    <div>
                      <img ssrc={process.env.PUBLIC_URL + "/icon_players.png"} class="icon_players" />
                      <span class="player_bet">1000</span>
                    </div>


                  </div>
                </div>
                </Link>

              {/* <!-- Card--3 --> */}
              
              <Link to ='/'>
              <div class="col-4 cards-section cardcursor">
                <div class="card text-white">
                  <img src={process.env.PUBLIC_URL + "/host_g3.png"} class="card-img" alt="..." />
                  <div class="card-img-overlay align-self-end">
                    <div class="image-game-type align-self-end">
                      <img src={process.env.PUBLIC_URL + "/price.png"} class="bet-place" alt="" />
                      <img src={process.env.PUBLIC_URL + "/game_type_f3.png"} class="dies" />
                    </div>
                  </div>

                </div>
                <div class="card-footer bg-light d-flex justify-content-between">
                  <img src={process.env.PUBLIC_URL + "flag_us.png"} />
                  <h6 class="player_name"> EVA JOHNSSON</h6>
                  <div>
                    <img src={process.env.PUBLIC_URL + "/icon_players.png"} class="icon_players" />
                    <span class="player_bet">1000</span>
                  </div>


                </div>
              </div>
              </Link>

              {/* <!-- Card--4 --> */}
              <Link to ='/' >
              <div class="col-4 cards-section  cardcursor">
                <div class="card text-white">
                  <img src={process.env.PUBLIC_URL + "/host_g4.png"} class="card-img" alt="..." />
                  <div class="card-img-overlay align-self-end">
                    <div class="image-game-type align-self-end">
                      <img src={process.env.PUBLIC_URL + "/price.png"} class="bet-place" alt="" />
                      <img src={process.env.PUBLIC_URL + "/game_type_f3.png"} class="dies" />
                    </div>
                  </div>

                </div>
                <div class="card-footer bg-light d-flex justify-content-between">
                  <img src={process.env.PUBLIC_URL + "/flag_eu.png"} />
                  <h6 class="player_name"> NATALIE BLAIR</h6>
                  <div>
                    <img src={process.env.PUBLIC_URL + "/icon_players.png"} class="icon_players" />
                    <span class="player_bet">1000</span>
                  </div>


                </div>
              </div>  
              </Link>

            </div>



            {/* 
      <!--  -->
<!-- Bottom --> */}
            <div class="bottom_div p-0 mb-auto d-flex justify-content-end align-items-center">
              <div class="col-4">
              <img src={process.env.PUBLIC_URL + "/Balance.png"} class="bottom-layer" alt="" />
              </div>
              <div class="col-8">
                <img src={process.env.PUBLIC_URL + "/lobby_area.png"} class="bottom-layer" alt="" />
              </div>
            </div>

          </div>
        </div>
  
      </Modal>
      </div>
    
    )
  }
}

export default withRouter(Lobby)