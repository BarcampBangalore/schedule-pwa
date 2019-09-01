import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
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


const slot = ({ match }) => {
  const sessions = data.slots[match.params.index].sessions;

  return (
    <div>

      {sessions.map((session, sessionIndex) => (
        <Link to={`/session/${match.params.index}/${sessionIndex}`}>
          <div className="slot_row" style={{ backgroundColor: session.color }}>
            <img src={session.photo} class="image--cover" />
            <div className="slot_info">
              <div className="slot_title">{unescapeHTML(session.title)}</div>
              <div className="slot_session_presenter">By : {session.presenter}</div>
              <div className="slot_session_location">At : {session.location} </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default slot;
