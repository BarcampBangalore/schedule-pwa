import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import data from "../bcb.json";

const slot = ({ match }) => {
  const sessions = data.slots[match.params.index].sessions;

  return (
    <div>
      <h1>{match.params.index}</h1>
      {sessions.map((session, sessionIndex) => (
        <div>
          <Link to={`/slot/${match.params.index}/session/${sessionIndex}`}>
          <li>
          <div class={session.type}>{session.title}</div>
          <div class={session.title}>{session.presenter} </div>
          <div class={session.title}>{session.location}</div>
          </li>   
          </Link>
        </div>
      ))}
    </div>
  );
};

export default slot;
