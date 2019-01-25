import React, { Component } from "react";
import { Route, Link } from 'react-router-dom'
import data from "../bcb.json";
import slotPage from "./slot";
export default class details extends React.Component {
  render() {
    const match = this.props.match;

    return (
      <div>
        <h1>{match.params.index}</h1>
        how to mke the single session appear on this block when one session is pressed.

      </div>
    );
  }
}
const slot = ({ match }) => {
  const sessions = data.slots[match.params.index].sessions;

  return (
    <div>
      
      {sessions.map((session, sessionIndex) => (
        <div>
          <Link to={`/slot/${match.params.index}/session/${sessionIndex}`}>
          <li>
          <div class={session.type}>{session.title}
           <div class={session.type}>{session.presenter}</div>                                      
           {session.location} </div>
          </li>   
          </Link>
        </div>
      ))}
    </div>
  );
};