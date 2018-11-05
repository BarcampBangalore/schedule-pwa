import React, { Component } from "react";
//  import { Route, Link } from 'react-router-dom'
import data from "../bcb.json";
import slotPage from "./slot";
export default class session extends Component {
  render() {
    const match = this.props.match;

    return (
      <div>
        <h1>{match.params.index}</h1>
      </div>
    );
  }
}
