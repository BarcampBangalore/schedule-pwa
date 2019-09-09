import React from "react";
import { Link } from "react-router-dom";
import data from "../bcb.json";
import unescapeHTML from "./utils";

const slot = ({ match }) => {
  const sessions = data.slots[match.params.index].sessions;
  return (
    <div>
      {sessions.map((session, sessionIndex) => (
        <Link to={`/session/${match.params.index}/${sessionIndex}`}>
          <div className="slot_row" style={{ backgroundColor: session.color }}>
            <img src={session.photo} alt="session" class="image--cover" />
            <div className="slot_info">
              <div className="slot_title">{unescapeHTML(session.title)}</div>
              <div className="slot_session_presenter">
                By : {session.presenter}
              </div>
              <div className="slot_session_location">
                At : {session.location}{" "}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default slot;
