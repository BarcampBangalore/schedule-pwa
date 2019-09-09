import React from "react";
import data from "../bcb.json";
import unescapeHTML from "./utils";

const session = ({ match }) => {
  const session =
    data.slots[match.params.index].sessions[match.params.sessionIndex];

  return (
    <div className="sessiondetails">
      <div
        style={{
          display: "flex",
          flexdirection: "row",
          valign: "center"
        }}
      >
        <img src={session.photo} alt="session" class="image--cover" />
        <a href={session.permalink} target="__blank">
          <h1 className="title">{unescapeHTML(session.title)}</h1>
        </a>
      </div>
      <hr />
      <div className="presenter">By : {session.presenter}</div>
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: session.description }}
      ></div>
      <div className="session_time">Session time : {session.time}</div>
      <div className="session_location">Location : {session.location}</div>
      <a href={require("./images/" + session.location.toLowerCase() + ".png")}>
        <img
          src={require("./images/" + session.location.toLowerCase() + ".png")}
          width="100%"
          alt="location"
        />
      </a>
    </div>
  );
};

export default session;
