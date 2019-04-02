import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./composants/Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Travel</h1>
        </header>
        <Travel
          destination="Le bout du monde"
          country="l'Algérie - Timimoun"
          photo="http://www.wipplay.com/static/user-content//42066/501942-newvis.jpg"
          distance = "3212km"
        />
        <Travel
          destination="L'autre bout du monde"
          country="Indonésie - blue fire "
          photo="https://news.nationalgeographic.com/content/dam/news/photos/000/758/75878.jpg"
          credit="Photograph by Olivier Grunewald"
          distance = "1345km"
        />
      </div>
    );
  }
}

export default App;