import React from 'react';
import LoginPage from './LoginPage';
import AgendaPage from './AgendaPage';
import UpdatePage from './UpdatePage';
import TweetPage from './TweetPage';
import VenuePage from './VenuePage';
import VenueMap from './VenueMap';
import SharePage from './SharePage';
import AboutPage from './AboutPage';
import HomeMenu from './HomeMenu';
import Registration from './Registration';
import Introduction from './Introduction';
import Slot1 from './Slot1';
import Slot2 from './Slot2';
import Slot3 from './Slot3';
import TechLash from './TechLash';
import {Switch,Route} from 'react-router-dom';

const Main = () => (
  <Switch>
    <Route exact path="/" component={HomeMenu} />
    /*for MenuBar*/
      <Route path="/LoginPage" component={LoginPage} />
      <Route  path="/AgendaPage" component={AgendaPage} />
      <Route  path="/UpdatePage" component={UpdatePage} />
      <Route  path="/TweetPage" component={TweetPage} />
      <Route path="/VenuePage" component={VenuePage} />
      <Route  path="/VenueMap" component={VenueMap} />
      <Route  path="/SharePage" component={SharePage} />
      <Route  path="/AboutPage" component={AboutPage} />

      /*for HomeMenu*/
      <Route  path="/Registration" component={Registration} />
      <Route  path="/Introduction" component={Introduction} />
      <Route  path="/Slot1" component={Slot1} />
      <Route  path="/Slot2" component={Slot2} />
      <Route  path="/Slot3" component={Slot3} />
      <Route  path="/TechLash" component={TechLash} />
  </Switch>
)

export default Main;
