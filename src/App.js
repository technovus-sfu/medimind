import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Chatroom from './mobileApp/Chatroom';
import Splash from './mobileApp/Splash';

class App extends Component {
  render() {
    return (
    <div className="App">
		<Switch>
		  <Route exact path='/' component={Splash}/>
		  <Route path='/chat' component={Chatroom}/>
	  	</Switch>
 	</div>

    );
  }
}

export default App;
