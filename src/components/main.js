import React from 'react'
import LoginPage from './loginpage'
import agendapage from './agendapage'
import UpdatePage from './updatepage'
import TweetPage from './tweetpage'
import VenuePage from './venuepage'
import VenueMap from './venuemap'
import SharePage from './sharepage'
import aboutpage from './aboutpage'
import HomeMenu from './homemenu'
import slot from './slot'
// import Registration from './Registration';
// import Introduction from './Introduction';
// import Slot1 from './Slot1';
// import Slot2 from './Slot2';
// import Slot3 from './Slot3';
// import TechLash from './TechLash';
import { Route } from 'react-router-dom'
import session from './session'
import details from './details'

const Main = () => (
  <div>
    <Route exact path='/' component={HomeMenu} />
    {/* for MenuBar */}
    <Route exact path='/LoginPage' component={LoginPage} />
    <Route exact path='/UpdatePage' component={UpdatePage} />
    <Route exact path='/TweetPage' component={TweetPage} />
    <Route exact path='/VenuePage' component={VenuePage} />
    <Route exact path='/VenueMap' component={VenueMap} />
    <Route exact path='/agendapage' component={agendapage} />
    <Route exact path='/SharePage' component={SharePage} />
    <Route exact path='/aboutpage' component={aboutpage} />
    <Route exact path='/slot/:index' component={slot} />
    <Route exact path='/session/:index/:sessionIndex' component={session}/>
    
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
