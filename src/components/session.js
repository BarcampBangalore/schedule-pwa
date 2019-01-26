import React, { Component } from "react";
import { Route, Link } from 'react-router-dom'
import data from "../bcb.json";

var escapeChars = { lt: '<', gt: '>', quot: '"', apos: "'", amp: '&' };

function unescapeHTML(str) {
  return str.replace(/\&([^;]+);/g, function (entity, entityCode) {
    var match;

    if (entityCode in escapeChars) {
      return escapeChars[entityCode];
    } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
      return String.fromCharCode(parseInt(match[1], 16));
    } else if (match = entityCode.match(/^#(\d+)$/)) {
      return String.fromCharCode(~~match[1]);
    } else {
      return entity;
    }
  });
}

const session = ({ match }) => {
  const session = data.slots[match.params.index].sessions[match.params.sessionIndex];
  console.log(session);
  return (
    <div className="sessiondetails">
      <div style={{
        display: "flex",
        flexdirection: "row",
        valign: "center"
      }}>
        <img src={session.photo} class="image--cover" />
        <a href={session.permalink} target="__blank">
          <h1 className="title">{unescapeHTML(session.title)}</h1>
        </a>
      </div>
      <hr />
      <div className="presenter">
        By : {session.presenter}
      </div>
      <div className="description" dangerouslySetInnerHTML={{ __html: session.description }}>

      </div>
      <div className="session_time">
        Session time : {session.time}
      </div>
      <div className="session_location">
        Location : {session.location}
      </div>
    </div>
  );
};


export default session;