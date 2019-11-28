import React, { Component } from 'react'
import './Gamev.css'
export default class Gamev extends Component {
    render() {
        return (















// new







<div className="col-6 d-flex  ">

<div className="col-12 d-flex background_color px-1  ">
    <div className="col-2 p-0">
        
        <img   onClick={(e) => this.handlechangebet()} src={process.env.PUBLIC_URL + "/bet_btn.png"} className="plce_bet" />

    </div>


    {/* <!--buttons--> */}

    <div className="col-lg-10 d-flex col-md-10 col-sm-10 px-0 btn-group    ">
        {/* <!-- button-1 && bar-1--> */}
        {this.state.handlerclick === "handlerclick" &&
            <div className="col-2 bar m-0 text-center child bar-1" >

                <div><span className="bet_range" id="demo">{this.state.value}</span>
                    <div className="slidecontainer">

                        <input onChange={this.handlechange} type="range" min={0} max={1000} value={this.state.value} className="slider" id
                    </div>
                </div>

            </div>}
        <div className="col-2 button_img p-0 parant h-100 btn parant ">

            <img src={process.env.PUBLIC_URL + "/1-bg.png"} alt="" className="btn_img"   onClick={this.handlerclick}/>
            
            

        </div>

        {/* <!--button-2 && bar-2--> */}
        {this.state.handlerclick === "handlerclick1" && <div class="col-2 bar m-0 child bar-2">
            <span className="bet_range" id="demo">{this.state.value}</span>
            <div className="slidecontainer">
                <input onChange={this.handlechange} type="range" min={0} max={1000} value={this.state.value} className="slider" id="myRange" />

            </div>
        </div>}
        <div className="col-2 button_img p-0 h-100  btn parant">
            <img onClick={this.handlerclick1} src={process.env.PUBLIC_URL + "/2-bg.png"} alt="" className="btn_img" />


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
            {/* <img src={process.env.PUBLIC_URL + "/6.png"} alt="" className="number" /> */}
        </div>


        {/* <!--bet-button--> */}
        <div className="col-2 button_img parant h-100 p-0">
            {/* <img onclick="barVisibility('6');" src="images/bet_btn.png" alt="" class="btn_img border border-black"> */}

            {/* <img onClick={(e) => this.handlechangebet()} src={process.env.PUBLIC_URL + "/bet_btn.png"} alt="" className="btn_img border border-black" /> */}


        </div>
    </div>

</div>

</div>




	
				
{/* 
    
				<div className=" col-12 bottom-container">
					
				<div className="row gstatus ">
				
					<div className="col-3 p-0 d-flex ">
						
						<div className="col-6  align-self-end p-0">

					<img src={process.env.PUBLIC_URL + "/lastRoll.png"}  />
					</div>
					
				
					<div className="col-6 p-0  align-self-end " >
					<img src={process.env.PUBLIC_URL + "/currentBet.png"} className="betimage" />




					</div>


					</div>

					<div className="col-6 align-self-end">
					<img src={process.env.PUBLIC_URL + "/betlimitBar.png"}  className="limitbar"   />
				
					</div>
					<div className="col-3 align-self-end  ">
					<img src={process.env.PUBLIC_URL + "/statistics.png"}  className="Statistics "   />
				
					</div>
					</div>
				
			
			
			 */}



// end



            <div className="container">
                 <div class="bg-img w-100 d-flex align-content-end flex-wrap">

<div class="d-flex w-100 align-items-end">
        <div class="col-3 d-flex align-items-end p-0">
            <div class="col-6 p-0 align-items-end">
                    <img src="./images/latest/0xkukURg.png" class="w-100 latest-rolls" alt=""/>
            </div>
            <div class="col-6 px-0">
                <img src="./images/latest/Dh8ro7_A.png" class="w-100" alt=""/>
            </div>
               
              </div>
              
              <div class="col-6 d-flex p-0">
                <img src="./images/latest/Zx0TNMsw.png" class="w-100" alt=""/>
                
              </div>
              <div class="col-3 d-flex p-0">
                <div class="col-6 p-0 text-center text-light">
                        chat
                </div>
                <div class="col-6 p-0">
                    <img src="./images/latest/TFEdRfwg.png" class="w-100 statistic" alt=""/>
                </div>
              </div>
  </div>


<div class="bg-light d-flex w-100">
    <div class="col-3 d-flex">
            1 of 3
          </div>
          
{/*           
          <div class="col-6 d-flex">
            <img src="./images/latest/place-btn.png" class="place-btn" alt="">
            <div class="btn-grp d-flex">
                    <img src="./images/latest/btn.png" alt="">
                    <img src="./images/latest/btn.png" alt="">
                    <img src="./images/latest/btn.png" alt="">
                    <img src="./images/latest/btn.png" alt="">
                    <img src="./images/latest/btn.png" alt="">
                    <img src="./images/latest/btn.png" alt="">
            </div> */}

            
          </div>
          
</div>

</div>
// </div>/

                
//             </div>
        )
    }
}

<div class="col-5 d-flex p-0">
<im          g src={process.env.PUBLIC_URL + "/betlimitBar.png"} class="w-100 max-bet img-fluid" alt="" />
          <div class="max-bet col-12 w-100 position-absolute">

                <div class="d-flex align-items-end flex-column bd-highlight mt-4">
                 
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
		 

         {/*  */}



         <div class="col-5 d-flex">
          <div class="place-bet">
              <img src="./images/latest/place-btn.png" class="place-btn img-fluid curser" alt="" />
          </div>

          
            <div class="click-number">
              <div class="text-center">
                <p class="tex-center p-0 m-0">CLICK THE NUMBERS TO PLACE BET</p>
              </div>
          <div class="btn-grp d-flex  justify-content-end">
            <img class="img-fluid curser" src="./images/latest/btn.png" alt="bet-button" />
            <img class="img-fluid curser" src="./images/latest/2.png" alt="bet-button" />
            <img class="img-fluid curser" src="./images/latest/3.png" alt="bet-button" />
            <img class="img-fluid curser" src="./images/latest/4.png" alt="bet-button" />
            <img class="img-fluid curser" src="./images/latest/5.png" alt="bet-button" />
            <img class="img-fluid curser" src="./images/latest/6.png" alt="bet-button" />
          </div>
        </div>
        </div>



         {/*  */}



<div class="col-6 d-flex p-0">
          
          <div class="max-bet col-12 w-100">

                <div class="d-flex align-items-end flex-column bd-highlight mt-4">
                    <div class="bd-highlight justify-content-end d-flex col-8">
                      <div class="d-block max-bet-bars">
                          <img src="./images/latest/max-bet-bar.png" class="" alt=""/>
                          {/* <img src="./images/latest/max-bet-bar.png" class="" alt=""> */}
                      </div>
                      <div class="d-block max-bet-bars">
                          <img src="./images/latest/max-bet-bar.png" class="" alt=""/>
                          {/* <img src="./images/latest/max-bet-bar.png" class="" alt=""/> */}
                      </div>
                      <div class="d-block max-bet-bars">
                          <img src="./images/latest/max-bet-bar.png" class="" alt=""/>
                          {/* <img src="./images/latest/max-bet-bar.png" class="" alt=""> */}
                      </div>
                      <div class="d-block max-bet-bars">
                          <img src="./images/latest/max-bet-bar.png" class="" alt=""/>
                          {/* <img src="./images/latest/max-bet-bar.png" class="" alt=""> */}
                      </div>
                      <div class="d-block max-bet-bars">
                          <img src="./images/latest/max-bet-bar.png" class="" alt=""/>
                          {/* <img src="./images/latest/max-bet-bar.png" class="" alt=""> */}
                      </div>
                      <div class="d-block max-bet-bars">
                          <img src="./images/latest/max-bet-bar.png" class="" alt=""/>
                          {/* <img src="./images/latest/max-bet-bar.png" class="" alt=""> */}
                      </div>
                        
                    </div>
                  </div>
          </div>