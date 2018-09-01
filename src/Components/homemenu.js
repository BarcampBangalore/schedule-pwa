import React, { Component } from 'react';
import MaterialIcon,{colorPallet} from 'material-icons-react';
import {Link} from 'react-router-dom';
class HomeMenu extends Component{
  render()
  {
    return(

      <div class="main-content">
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              <div class="row">
                <div class="panel panel-default">



                    <ul class="sidebarservices"><b>
                          <li><Link to="/Registration"><div class="rotate">08:30</div><div class="fixed">Registration</div></Link></li>
                          <li><Link to="/Introduction"><div class="rotate">09:00</div><div class="fixed">Introduction </div></Link></li>
                          <li><Link to="/Slot1"><div class="rotate">09:45</div><div class="slots">Slot 1 </div></Link></li>
                          <li><Link to="/"><div class="rotate">10:30</div><div class="fixed">Break 1 </div></Link></li>
                          <li><Link to="/Slot2"><div class="rotate">11:00</div><div class="slots">Slot 2 </div></Link></li>
                          <li><Link to="/Slot3"><div class="rotate">11:45</div><div class="slots">Slot 3 </div></Link></li>
                          <li><Link to="/"><div class="rotate">12:30</div><div class="fixed">Lunch</div></Link> </li>
                          <li><Link to="/TechLash"><div class="rotate">13:30</div><div class="techlash">Techlash</div></Link> </li>
                        </b>
                        </ul>



               </div>
             </div>
           </div>
         </div>
        </div>
      </div>

      )
    }
  }

export default HomeMenu;
