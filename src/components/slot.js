import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import data from "../bcb.json";

const slot = ({ match }) => {
  const sessions = data.slots[match.params.index].sessions;

  return (
    <div>
      
      {sessions.map((session, sessionIndex) => (
        <div>
          <Link to={`/session/${match.params.index}/${sessionIndex}`}>
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

export default slot;
