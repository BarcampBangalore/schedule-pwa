import React, { Component, Fragment } from 'react'
// import MaterialIcon,{colorPallet} from 'material-icons-react'
import { Link } from 'react-router-dom'
import data from '../bcb.json'
class HomeMenu extends Component {
  render() {
    return (
      <div class='main-content'>
        <div class='container slotscontainer'>
          <ul class='sidebarservices'>
            {data.slots.map((slot, index) => {
              if (slot.type === 'session') {
                return (
                  <li>
                    <Link to={`/slot/${index}`}>
                      <div class='rotate'>{slot.startTime}</div>
                      <div class={slot.type}>{slot.name}</div>
                    </Link>
                  </li>
                )
              } else {
                return (
                  <li>
                    <div class='rotate'>{slot.startTime}</div>
                    <div class={slot.type}>{slot.name}</div>
                  </li>
                )
              }
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default HomeMenu
