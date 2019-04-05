import React, { Component } from "react";

import Lamp from "./components/Lamps"
import Travel from "./components/Travel";
import Quotes from "./components/Quotes";

import logo from "./logo.svg";

import "./App.css";

class App extends Component {

state = {
  message: false,
}


changeMessage = (e) => {
  this.setState({
    message: !this.state.message
  })
}

  render() {
    const messageWorking = this.state.message ? 'je suis en pause' :'je travaille'
    // grâce à la ternaire il fait le lien avec la booléen cf console.log(this.state.message);
     const speed = this.state.message ? 'App-logo' : 'homerSpeed';

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={speed} alt="logo" />
          <h1 className="App-title">Travel</h1>
        </header>
        <div >
          <button onClick={this.changeMessage}> {messageWorking} </button>
        </div>
          {/* <Travel/> */}
          <Lamp/>
          <Lamp/>
          {/* <Quotes/> */}
      </div>
    );
  }
}

export default App;