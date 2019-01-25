import React, { Component } from "react";
 import { Route, Link } from 'react-router-dom'
import data from "../bcb.json";
import slot from "./slot";
export default class session extends Component {
 /* render() {
    const match = this.props.match;

    return (
      <div>
        <h1>{match.params.index}</h1>
      </div>
    );
  }
}*/


  session = ({ match }) => {
  const details = data.slot[match.params.index].session[match.params.sessionIndex].details;
 return (
    <div>
      <h1>{match.params.index}</h1>
      {details.map((details, detailIndex) => (
        <div>
          <Link to={`/slot/${match.params.index}/session/${match.params.sessionIndex}/details/${detailIndex}`}>  
          </Link>
        </div>
      ))}
    </div>
  );
};
};
