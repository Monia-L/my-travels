import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./components/Travel";
import Quotes from "./components/Quotes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Travel</h1>
        </header>
        <Travel/>
        {/* <Quotes/> */}
      </div>
    );
  }
}

export default App;