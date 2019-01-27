import React, { Component, Fragment } from 'react'
// import MaterialIcon,{colorPallet} from 'material-icons-react'
import { Link } from 'react-router-dom'
import data from '../bcb.json'
class HomeMenu extends Component {
  render() {
    return (
      <div className='main-content'>
        <div className='container slotscontainer'>
          <ul className='sidebarservices'>
            {data.slots.map((slot, index) => {
              if (slot.type === 'session') {
                return (
                  <li>
                    <Link to={`/slot/${index}`}>
                      <div className='rotate'>{slot.startTime}</div>
                      <div className={slot.type}>{slot.name}</div>
                    </Link>
                  </li>
                )
              } else {
                return (
                  <li>
                    <div className='rotate'>{slot.startTime}</div>
                    <div className={slot.type}>
                      <div className="fixed_slot_name">{slot.name}</div>
                      <div className="fixed_slot_desc">{slot.description}</div>
                    </div>

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
