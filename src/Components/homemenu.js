import React, { Component, Fragment } from "react";
//import MaterialIcon,{colorPallet} from 'material-icons-react';
import { Link } from "react-router-dom";
import data from "../bcb.json";
class HomeMenu extends Component {
  render() {
    return (
      <div class="main-content">
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              <div class="row">
                <div class="panel panel-default">
                  <ul class="sidebarservices">
                    {data.slots.map((slot, index) => {
                      if (slot.type === "session") {
                        return (
                          <li>
                            <Link to={`/slot/${index}`}>
                              <div class="rotate">{slot.startTime}</div>
                              <div class={slot.type}>{slot.name}</div>
                            </Link>
                          </li>
                        );
                      } else {
                        return (
                          <Fragment>
                            <div class="rotate">{slot.startTime}</div>
                            <div class={slot.type}>{slot.name}</div>
                          </Fragment>
                        );
                      }
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeMenu;
