import React, { Component } from "react";
import data from "../bcb.json";
import SlotsSlider from "./slider";
class HomeMenu extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="container slotscontainer">
          <ul className="sidebarservices">
            {data.slots.map((slot, index) => {
              if (slot.type === "session") {
                return (
                  <li key={index}>
                    {/* need to make a slider here*/}
                    <SlotsSlider index={index} slot={slot} key={index} />
                    {/* <Link to={`/slot/${index}`}>
                      <div className="rotate">{slot.startTime}</div>
                      <div className={slot.type}>{slot.name}</div>
                    </Link> */}
                  </li>
                );
              } else {
                return (
                  <li key={index}>
                    <div className="rotate">{slot.startTime}</div>
                    <div className={slot.type}>
                      <div className="fixed_slot_name">{slot.name}</div>
                      <div className="fixed_slot_desc">{slot.description}</div>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default HomeMenu;
