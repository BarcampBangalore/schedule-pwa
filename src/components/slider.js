import React from "react";
import { Link } from "react-router-dom";
import data from "../bcb.json";
import unescapeHTML from "./utils";

export default function SlotsSlider(props) {
  const sessions = data.slots[props.index].sessions;
  const slotBanner = {
    borderWidth: "0rem",
    borderStyle: "none"
  };
  const horizontalSlidingStyling = {
    overflow: "auto",
    whiteSpace: "nowrap",
    backgroundImage:
      "linear-gradient(to right top, #f2c74c, #f4cd61, #f5d475, #f7da89, #f2c74c)",
    display: "flex"
  };

  return (
    <div>
      <div style={slotBanner}>
        <div className="rotate">{props.slot.startTime}</div>
        <div className="session">{props.slot.name}</div>
      </div>
      <div style={horizontalSlidingStyling}>
        {sessions.map((session, sessionIndex) => (
          <Link
            to={`/session/${props.index}/${sessionIndex}`}
            key={sessionIndex}
          >
            <div
              className="slot_row"
              // style={{ backgroundColor: session.color }}
            >
              <img src={session.photo} alt="session" className="image--cover" />
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
    </div>
  );
}
