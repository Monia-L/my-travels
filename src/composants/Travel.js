import React from "react";
import "./Travel.css";



const Travel = props => (
  <figure>
    <h3>{props.country}</h3>
    <img className="test" src={props.photo} alt={props.country} />
    <figcaption>
      <blockquote>{props.destination}</blockquote>
      <cite>{props.distance}</cite>
      <br></br>
      <cite>{props.credit}</cite>
    </figcaption>
  </figure>
);

export default Travel;