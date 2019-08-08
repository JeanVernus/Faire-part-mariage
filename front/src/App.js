import React, { Component } from 'react';
import FairePart from './Components/FairePart'
import zic from './Assets/zic.mp3'
import {
  BrowserRouter,
  NavLink,
  Switch,
  Route
} from 'react-router-dom';
import './CSS/App.css';

class App extends Component {
  render() {
    return (
      <div className="displayStart">
        <h1 className="displayTitle">Bienvenue</h1><br />
        <audio autoplay="true" loop preload=" true">
          <source src={zic} />
        </audio>
        <BrowserRouter>
          <NavLink exact to="/" />
          <NavLink to="/faire-part"><h1 className="displayLink">Veuillez cliquer ici</h1></NavLink><br />
          <Switch>
            <Route path="/faire-part" component={FairePart} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
