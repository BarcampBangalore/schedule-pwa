import React from 'react'
import LoginPage from './LoginPage'
import AgendaPage from './AgendaPage'
import UpdatePage from './UpdatePage'
import TweetPage from './TweetPage'
import VenuePage from './VenuePage'
import VenueMap from './VenueMap'
import SharePage from './SharePage'
import AboutPage from './AboutPage'
import HomeMenu from './HomeMenu'
import slot from './slot'
// import Registration from './Registration';
// import Introduction from './Introduction';
// import Slot1 from './Slot1';
// import Slot2 from './Slot2';
// import Slot3 from './Slot3';
// import TechLash from './TechLash';
import { Route } from 'react-router-dom'
import sessionPage from './session'

const Main = () => (
  <div>
    <Route exact path='/' component={HomeMenu} />
    {/* for MenuBar */}
    <Route exact path='/LoginPage' component={LoginPage} />
    <Route exact path='/UpdatePage' component={UpdatePage} />
    <Route exact path='/TweetPage' component={TweetPage} />
    <Route exact path='/VenuePage' component={VenuePage} />
    <Route exact path='/VenueMap' component={VenueMap} />
    <Route exact path='/AgendaPage' component={AgendaPage} />
    <Route exact path='/SharePage' component={SharePage} />
    <Route exact path='/AboutPage' component={AboutPage} />
    <Route exact path='/slot/:index' component={slot} />
    <Route
      exact
      path='/slot/:slotIndex/session/:sessionIndex'
      component={sessionPage}
    />
  </div>
)

/* const Main = () => (
       for HomeMenu
       <Route  path="/Registration" component={Registration} />
       <Route  path="/Introduction" component={Introduction} />
       <Route  path="/Slot1" component={Slot1} />
       <Route  path="/Slot2" component={Slot2} />
       <Route  path="/Slot3" component={Slot3} />
       <Route  path="/TechLash" component={TechLash} />
   </Switch>
 ) */

export default Main
