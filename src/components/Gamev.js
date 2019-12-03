
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
                                                <span className="value1" id="output">{	values[currentStepIndex]} </span>  </div>
                                            {/* <input onChange={this.handlechange} type="range" min={this.state.minvalue} max={this.state.maxvalue} value={this.state.value} step={this.state.step} className="slider" /> */}
                                            <input  type="range" 
                                            onInput={this.handleInputChange}
                                            type="range"
                                            min="0"
                                            value={this.state.currentStepIndex}
                                            max="14"
                                            step="1"
                                            className="slider" />


                                        </div>}
                                    </div>
                                    <div class="col-2">


                                        {this.state.handlerclick === "handlerclick1" && 
                                        <div className="sliderbg bar2">

                                            <div className="value" ><img src={process.env.PUBLIC_URL + "/Bet_range.png"} className="betvalue" />
                                                <span className="value1">{	values[currentStepIndex]} </span>  </div>
                                            <input
                                               onInput={this.handleInputChange}
                                               type="range"
                                               min="0"
                                               value={this.state.currentStepIndex}
                                               max="14"
                                               step="1"
                                            
                                            
                                            // onChange={this.handlechange} type="range" min={this.state.minvalue} max={this.state.maxvalue} value={this.state.value} step={this.state.step} 
                                            
                                            className="slider" />


                                        </div>}


                                    </div>
                                    <div class="col-2">

                                        {this.state.handlerclick === "handlerclick2" && 
                                        <div className="sliderbg bar3">

                                            <div className="value" ><img src={process.env.PUBLIC_URL + "/Bet_range.png"} className="betvalue" />
                                                <span className="value1">{	values[currentStepIndex]}</span>  </div>
                                            <input 
                                               onInput={this.handleInputChange}
                                               type="range"
                                               min="0"
                                               value={this.state.currentStepIndex}
                                               max="14"
                                               step="1"
                                            // onChange={this.handlechange} type="range" min={this.state.minvalue} max={this.state.maxvalue} value={this.state.value} step={this.state.step} 
                                            className="slider" />


                                        </div>}
                                    </div>
                                    <div class="col-2">

                                        {this.state.handlerclick === "handlerclick3" && <div className="sliderbg bar4">

                                            <div className="value" ><img src={process.env.PUBLIC_URL + "/Bet_range.png"} className="betvalue" />
                                                <span className="value1">{	values[currentStepIndex]} </span>  </div>
                                            <input 
                                            // onChange={this.handlechange} type="range" min={this.state.minvalue} max={this.state.maxvalue} value={this.state.value} step={this.state.step} 
                                            onInput={this.handleInputChange}
                                            type="range"
                                            min="0"
                                            value={this.state.currentStepIndex}
                                            max="14"
                                            step="1"


                                            className="slider" />


                                        </div>}
                                    </div>
                                    <div class="col-2">

                                        {this.state.handlerclick === "handlerclick4" && <div className="sliderbg bar5">
                                            <div className="value" ><img src={process.env.PUBLIC_URL + "/Bet_range.png"} className="betvalue" />
                                                <span className="value1">{	values[currentStepIndex]} </span>  </div>
                                            <input 
                                            // onChange={this.handlechange} type="range" min={this.state.minvalue} max={this.state.maxvalue} value={this.state.value} step={this.state.step}

                                            onInput={this.handleInputChange}
                                            type="range"
                                            min="0"
                                            value={this.state.currentStepIndex}
                                            max="14"
                                            step="1"
                                             className="slider" />


                                        </div>}
                                    </div>
                                    <div class="col-2">


                                        {this.state.handlerclick === "handlerclick5" && <div className="sliderbg bar6">

                                            <div className="value" ><img src={process.env.PUBLIC_URL + "/Bet_range.png"} className="betvalue" />
                                                <span className="value1">{	values[currentStepIndex]} </span>  </div>
                                            <input
                                            //  onChange={this.handlechange} type="range" min={this.state.minvalue} max={this.state.maxvalue} value={this.state.value} step={this.state.step} 
                                            onInput={this.handleInputChange}
                                            type="range"
                                            min="0"
                                            value={this.state.currentStepIndex}
                                            max="14"
                                            step="1"
                                             className="slider" />


                                        </div>}
                                    </div>
                                </div>

                            </div>







                            <div class="d-flex w-100 align-items-end">
                                <div class="col-3 d-flex align-items-end p-0">
                                    <div class="col-5 p-0 align-items-end">

                                        {this.state.lastroll &&
                            
                                        <img src={process.env.PUBLIC_URL + "/lastRoll.png"} className="w-100 latest-rolls img-fluid" />}
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
                                                        <img class="image-bars img-fluid" src={process.env.PUBLIC_URL + "/dark_b.png"} alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="bar-pad img-fluid">
                                                        <img class="image-bars img-fluid" src={process.env.PUBLIC_URL + "/yellow_b.png"} alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="bar-pad img-fluid">
                                                        <img class="image-bars img-fluid" src={process.env.PUBLIC_URL + "/blue_b.png"} alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="bar-pad img-fluid">
                                                        <img class="image-bars img-fluid" src={process.env.PUBLIC_URL + "/purpul_b.png"} alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="bar-pad img-fluid">
                                                        <img class="image-bars img-fluid" src={process.env.PUBLIC_URL + "/red_b.png"} alt="" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div class="bar-pad img-fluid">
                                                        <img class="image-bars img-fluid" src={process.env.PUBLIC_URL + "/green_b.png"} alt="" />
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


                        {this.state.showimg ?<div class="col-7 p-0">

                                    
                                                                <div className='slider-vertical'>
                                                                    <Slider
                                                                    min={0}
                                                                    max={100}
                                                                    value='80'
                                                                    orientation='vertical'
                                                                    onChange={this.handleChange}
                                                                    />

                                                                    
                                                        </div>

                                                        

                                            <img src={process.env.PUBLIC_URL + "/statistics.png"} class="w-100 statistic img-fluid" alt="" /> 
                                    </div>:null}
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
                                            <img src={process.env.PUBLIC_URL + "/click_bet.png"} className="click_number_text" alt="" />
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
                                            <img class="icons img-fluid"onClick={this.handlelastroll} src={process.env.PUBLIC_URL + "/star.png"} />
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