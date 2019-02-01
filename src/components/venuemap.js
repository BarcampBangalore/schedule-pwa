import React, { Component } from 'react'
import venuemap from "./images/venuemap.png"

class VenueMap extends Component {
  render() {
    return (
      <div>
        <h1>VenueMap</h1>
        <a href={venuemap}>
          <img src={venuemap} width="100%" height="100%" />
        </a>
      </div>
    )
  }
}

export default VenueMap
