import React, { Component } from 'react';
import './Lamps.css';


class Lamp extends Component {

state = {
    on: false,
}
handleClick = (e) => {
    this.setState({
        on:  !this.state.on
        // c'est comme un toggle.  !this.state.on    :ca veut dire différent de});
    })
  };


  render() {
    const light = this.state.on ? 'on' : 'off';
    return (
      <div className="Lamp">
        <button 
        className={light} onClick={this.handleClick}>{light.toUpperCase()} </button>
        <figure className={light} />
      </div>
    );
  }
}

export default Lamp;
