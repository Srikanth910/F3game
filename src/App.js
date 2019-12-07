import React, { Component } from 'react'

import Lobby from './components/Lobby'

import {BrowserRouter, Route} from 'react-router-dom'


import Gamef3 from  './components/Gamef3'



export default class App extends Component {
  render() {
    return (

      // <Gamef3/>


      <BrowserRouter>
      <div>
      
      <Route  exact path="/"  component={Gamef3}/>
      <Route path ="/Lobby" component={Lobby}/> 
      </div>  
      </BrowserRouter>

     
        
        
    
    )
  }
}
