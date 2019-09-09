import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import FrontScreen from './components/FrontScreen';
// import SlideBar from './components/SlideBar'
// import DownBar from './components/DownBar';
// import Footerbar from './components/Footerbar';
// import Loyout from './components/Loyout';
import Frontview from './components/Frontview';
// import Dicegam from './components/Dicegam';
// import DiceGame from '../../react-dice-master/src/DiceGame';
import DiceGame from './components/DiceGame';
// import DownBar from './components/DownBar';
// import Items from './components/DownBar';
import { BrowserRouter, Route,Redirect } from 'react-router-dom'
// import DownBar from './components/DownBar';


function App() {
  return (
    
      
   
<Frontview/>
// <BrowserRouter>
// <Route exact path='/' component={Frontview}/>

// {/* <Route path ='/DiceGame' component={DiceGame}/> */}
// </BrowserRouter>
  
  );
}

export default App;
